import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://emoljycmlonuzveiztiy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtb2xqeWNtbG9udXp2ZWl6dGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMzY1NzYsImV4cCI6MjA3NTkxMjU3Nn0.chbwO9Q7Z3C00b__afvhIKa4KabKgcFtV5qqf7zzKXk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
