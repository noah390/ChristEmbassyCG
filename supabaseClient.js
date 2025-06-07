import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(https://xoxvgsaoaijogslvvmio.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhveHZnc2FvYWlqb2dzbHZ2bWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMzI3MDMsImV4cCI6MjA2NDgwODcwM30.OTzsafPmbxnzjlDz1OWQnDcLrb3pczwutbLzQD_f4b0);
