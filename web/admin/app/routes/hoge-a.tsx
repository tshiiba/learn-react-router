import type { Route } from "./+types/hoge-a";
import { HogeAScreen } from "~/features/hoge-a/screens/hoge-a-screen";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HogeA | Admin" },
    { name: "description", content: "Feature First sample HogeA screen" },
  ];
}

export default function HogeA() {
  return <HogeAScreen />;
}
