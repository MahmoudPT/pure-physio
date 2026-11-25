
const SUPABASE_URL = "sb_secret_rTO8zNUwHACGHg42SkRlWw_rd-RQXmTa";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_1lrSyB8FJQYzqDZXbpa-FA_BxagcgyA
";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// إنشاء حساب طالب
async function signUpStudent(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// تسجيل دخول الطالب
async function loginStudent(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// تسجيل خروج الطالب
async function logoutStudent() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) throw error;
}

// معرفة الطالب الحالي
async function getCurrentStudent() {
  const { data, error } = await supabaseClient.auth.getUser();

  if (error) throw error;
  return data.user;
}
