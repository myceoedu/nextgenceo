-- RLS: coordinators only access their school_profiles and related team_students.
-- Uses auth.uid() from the JWT issued after login (see lib/supabase/server.ts + middleware).

alter table public.school_profiles enable row level security;
alter table public.team_students enable row level security;

create policy "school_profiles_select_own"
  on public.school_profiles for select
  using (auth.uid() = user_id);

create policy "school_profiles_insert_own"
  on public.school_profiles for insert
  with check (auth.uid() = user_id);

create policy "school_profiles_update_own"
  on public.school_profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "school_profiles_delete_own"
  on public.school_profiles for delete
  using (auth.uid() = user_id);

create policy "team_students_select_own"
  on public.team_students for select
  using (
    exists (
      select 1 from public.school_profiles sp
      where sp.id = team_students.school_profile_id
        and sp.user_id = auth.uid()
    )
  );

create policy "team_students_insert_own"
  on public.team_students for insert
  with check (
    exists (
      select 1 from public.school_profiles sp
      where sp.id = team_students.school_profile_id
        and sp.user_id = auth.uid()
    )
  );

create policy "team_students_update_own"
  on public.team_students for update
  using (
    exists (
      select 1 from public.school_profiles sp
      where sp.id = team_students.school_profile_id
        and sp.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from public.school_profiles sp
      where sp.id = team_students.school_profile_id
        and sp.user_id = auth.uid()
    )
  );

create policy "team_students_delete_own"
  on public.team_students for delete
  using (
    exists (
      select 1 from public.school_profiles sp
      where sp.id = team_students.school_profile_id
        and sp.user_id = auth.uid()
    )
  );
