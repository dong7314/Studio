import type { MetaFunction } from "@remix-run/node";
import Introduce from "../components/introduce/Introduce";

export const meta: MetaFunction = () => {
  return [
    { title: "이동엽의 이력서" },
    { name: "description", content: "이동엽의 이력서 사이트 입니다." },
    { property: "og:title", content: "이동엽의 이력서" },
    { property: "og:description", content: "이동엽의 이력서 사이트 입니다." },
    { property: "og:image", content: "/profile.png" },
  ];
};

export default function Index() {
  return (
    <>
      <Introduce />
    </>
  );
}
