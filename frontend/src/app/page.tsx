import LoginForm from "@/features/auth/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-5 text-center">
      <Link href={"/auth/login"}>Войти в аккаунт</Link>
    </div>
  );
}
