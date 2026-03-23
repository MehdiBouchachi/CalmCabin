// Supabase Client Placeholder
// Replace with your actual Supabase project credentials
// when ready to connect authentication and database.

// import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key-here";

// const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// export default supabase;

// For now, we export a placeholder object
const supabase = {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY,
  ready: false,
};

export default supabase;
