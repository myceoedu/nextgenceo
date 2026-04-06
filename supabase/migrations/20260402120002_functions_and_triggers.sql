-- updated_at triggers; auto row in school_profiles when auth.users is inserted
-- (reads raw_user_meta_data from signUp, matching register-school-account.ts).

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger school_profiles_set_updated_at
  before update on public.school_profiles
  for each row execute function public.set_updated_at();

create trigger team_students_set_updated_at
  before update on public.team_students
  for each row execute function public.set_updated_at();

create or replace function public.handle_new_user_school_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  sn text;
begin
  sn := coalesce(nullif(trim(new.raw_user_meta_data ->> 'school_name'), ''), 'School');

  insert into public.school_profiles (user_id, school_name, coordinator_name, coordinator_phone)
  values (
    new.id,
    sn,
    nullif(trim(new.raw_user_meta_data ->> 'coordinator_name'), ''),
    nullif(trim(new.raw_user_meta_data ->> 'coordinator_phone'), '')
  )
  on conflict (user_id) do update set
    school_name = excluded.school_name,
    coordinator_name = excluded.coordinator_name,
    coordinator_phone = excluded.coordinator_phone,
    updated_at = now();

  return new;
end;
$$;

create trigger on_auth_user_created_school_profile
  after insert on auth.users
  for each row execute function public.handle_new_user_school_profile();
