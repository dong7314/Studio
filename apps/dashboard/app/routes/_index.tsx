import type { MetaFunction } from "@remix-run/node";
import Introduce from "../components/introduce/Introduce";
import ThemeToggleButton from "~/components/theme/ThemeToggleButton";

export const meta: MetaFunction = () => {
  return [
    { title: "이동엽의 이력서" },
    { name: "description", content: "이동엽의 이력서 입니다." },
  ];
};

export default function Index() {
  return (
    <>
      <Introduce />
    </>
  );
}
