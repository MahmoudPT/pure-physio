
const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL_HERE";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";

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
