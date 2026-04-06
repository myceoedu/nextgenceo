-- Ordered migrations (this repo): 20260402120000 → …20001 → …20002 → …20003
-- Apply: `supabase link` then `supabase db push` — or paste each file in order in SQL Editor.
-- App touchpoints: register-school-account.ts (user_metadata → trigger), login uses JWT for RLS.
-- If CREATE TRIGGER errors, try EXECUTE PROCEDURE instead of EXECUTE FUNCTION (older Postgres).

create extension if not exists pgcrypto;
