import type { Route } from "./+types/home";
import { HomeScreen } from "~/features/home/screens/home-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | Admin" },
    { name: "description", content: "Feature First sample home screen" },
  ];
}

export default function Home() {
  return <HomeScreen />;
}
