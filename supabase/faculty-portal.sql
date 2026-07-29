create extension if not exists pgcrypto;

create table if not exists public.faculty_timeline_entries (
  id uuid primary key default gen_random_uuid(),
  faculty_id integer not null,
  faculty_name text not null,
  faculty_user_id text not null,
  entry_type text not null,
  title text not null,
  details text,
  event_date date not null,
  reference_url text,
  attachment_url text,
  attachment_name text,
  created_at timestamptz not null default now()
);

grant select, insert, update, delete on table public.faculty_timeline_entries to anon, authenticated;

insert into storage.buckets (id, name, public)
values ('faculty-evidence', 'faculty-evidence', true)
on conflict (id) do nothing;

create policy if not exists "Faculty evidence public read"
  on storage.objects
  for select
  using (bucket_id = 'faculty-evidence');

create policy if not exists "Faculty evidence public insert"
  on storage.objects
  for insert
  with check (bucket_id = 'faculty-evidence');

create policy if not exists "Faculty evidence public update"
  on storage.objects
  for update
  using (bucket_id = 'faculty-evidence');

create policy if not exists "Faculty evidence public delete"
  on storage.objects
  for delete
  using (bucket_id = 'faculty-evidence');