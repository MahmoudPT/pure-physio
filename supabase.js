
const SUPABASE_URL = "https://iymuuxevubftfeuiehse.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_1lrSyB8FJQYzqDZXbpa-FA_BxagcgyA";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.signUpStudent = async function(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });
  if (error) throw error;
  return data;
};

window.loginStudent = async function(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });
  if (error) throw error;
  return data;
};

window.logoutStudent = async function() {
  const { error } = await supabaseClient.auth.signOut();
  if (error) throw error;
};

window.getCurrentStudent = async function() {
  const { data, error } = await supabaseClient.auth.getUser();
  if (error) throw error;
  return data.user;
};
