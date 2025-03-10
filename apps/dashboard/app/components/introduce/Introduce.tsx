import { useEffect, useState } from "react";

import * as styles from "./Introduce.css";

import ThemeToggleButton from "../theme/ThemeToggleButton";

export default function Introduce() {
  const [borderRadius, setBorderRadius] = useState<boolean>(true);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const main = document.querySelector("#main")!;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const docHeight = main.scrollHeight - main.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled > 99.6 ? 100 : scrolled);
    };

    main.addEventListener("scroll", handleScroll);

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setBorderRadius(scrollPercentage !== 100);
  }, [scrollPercentage]);

  return (
    <div className={styles.introContainer}>
      <div
        className={styles.scroll}
        style={{
          width: `${scrollPercentage}%`,
          borderRadius: borderRadius ? "0 6px 6px 0" : "",
          background: `linear-gradient(90deg, rgba(0,86,214,1) 0%, rgba(102,163,255,1) 50%, rgba(204,224,255,1) 100%)`,
        }}
      />
      <div className={styles.toggleButton}>
        <ThemeToggleButton />
      </div>
      <section className={styles.introSection}>
        <h1 className={styles.header}>
          안녕하세요.
          <br />
          주니어 개발자 <span className={styles.pointTextStyle}>이동엽</span>
          입니다!
        </h1>
        <p className={styles.headerDescription}>
          2023년을 시작으로 현재 2년차 주니어 개발자 입니다.
          <br />
          다양한 사용자가 웹을 이용하는 만큼, 불편함을 최소화하고 편리한 UI를
          제공하는 것을 목표로 삼고 있습니다. 직접 경험하며 배우는 것을 좋아해
          새로운 기술과 도전을 즐기는 성향을 가지고 있습니다.
          <br />
          단순히 주어진 일을 수행하는 것이 아니라, 스스로 가치를 창출할 수 있는
          환경에서 일하는 것을 중요하게 생각합니다.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}
