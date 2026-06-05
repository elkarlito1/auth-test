import RegisterForm from "@/features/auth/components/RegisterForm";
import type { Metadata } from "next";

export const metadat: Metadata = {
  title: "Создать аккаунт",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
