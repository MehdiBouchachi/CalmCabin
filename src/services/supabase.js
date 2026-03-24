import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://psmcjfyfvwalcpbwimxh.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbWNqZnlmdndhbGNwYndpbXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMDY5NzksImV4cCI6MjA4OTg4Mjk3OX0.ozyvoPay22HAUwiKq-2TPs97sbiDY308tJ5Xw2XaEVY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
