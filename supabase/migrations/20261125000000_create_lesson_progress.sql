-- Private lesson progress for Adult 101.
-- Run this in the Supabase SQL editor, or with `supabase db push` once the CLI is linked.
--
-- New Supabase projects do not expose tables to the Data API until you GRANT access.
-- This migration grants `authenticated` only. Anonymous visitors cannot read the table.
-- Row-level security limits every row to the signed-in user (`auth.uid()`).
-- Do not use user_metadata for access decisions. It is user-editable.

create table public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_slug text not null,
  completed boolean not null default false,
  bookmarked boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  constraint lesson_progress_pkey primary key (user_id, lesson_slug),
  constraint lesson_progress_slug_check check (
    char_length(lesson_slug) between 1 and 80
    and lesson_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'
  ),
  constraint lesson_progress_completion_check check (
    (completed = false and completed_at is null)
    or (completed = true and completed_at is not null)
  )
);

comment on table public.lesson_progress is
  'Per-user lesson completion and bookmarks. RLS restricts each row to auth.uid().';

-- The primary key starts with user_id, so it is the foreign-key index
-- Postgres does not create automatically. Policies compare user_id to auth.uid().

alter table public.lesson_progress enable row level security;
alter table public.lesson_progress force row level security;

revoke all on table public.lesson_progress from public, anon;

grant select, insert, update on table public.lesson_progress to authenticated;
grant select, insert, update, delete on table public.lesson_progress to service_role;

create policy lesson_progress_select_own
  on public.lesson_progress
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy lesson_progress_insert_own
  on public.lesson_progress
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy lesson_progress_update_own
  on public.lesson_progress
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
