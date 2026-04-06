-- Tables: one school profile per auth user; up to four team students per school.
-- Aligns with app/actions/register-school-account.ts user_metadata:
--   school_name, coordinator_name, coordinator_phone (handled by later trigger).

create table public.school_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,

  school_name text not null,
  coordinator_name text,
  coordinator_phone text,

  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint school_name_not_blank check (length(trim(school_name)) > 0)
);

create index school_profiles_user_id_idx on public.school_profiles (user_id);

create table public.team_students (
  id uuid primary key default gen_random_uuid(),
  school_profile_id uuid not null references public.school_profiles (id) on delete cascade,

  slot integer not null check (slot >= 1 and slot <= 4),
  full_name text not null,

  class_year text,
  email text,
  phone text,
  notes text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (school_profile_id, slot),
  constraint team_student_name_not_blank check (length(trim(full_name)) > 0)
);

create index team_students_school_profile_id_idx on public.team_students (school_profile_id);
