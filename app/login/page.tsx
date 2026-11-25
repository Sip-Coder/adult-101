import type { Metadata } from "next";
import { LoginScreen } from "@/components/login-screen";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Free Adult 101 accounts use Google or Apple. No password.",
};

export default function LoginPage() {
  return <LoginScreen />;
}
