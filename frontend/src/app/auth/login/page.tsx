import LoginForm from "@/features/auth/components/LoginForm";
import type { Metadata } from "next";

export const metadat: Metadata = {
  title: "Войти аккаунт",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
