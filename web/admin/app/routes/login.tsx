import type { Route } from "./+types/login";
import { LoginScreen } from "~/features/auth/screens/login-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Admin" },
    { name: "description", content: "Mock authentication screen" },
  ];
}

export default function Login() {
  return <LoginScreen />;
}
