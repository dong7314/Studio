import { useEffect, useState } from "react";

import * as styles from "./Introduce.css";

import ThemeToggleButton from "../theme/ThemeToggleButton";
import { composeStyles } from "@vanilla-extract/css";
import ChangeIcon from "./change/ChangeIcon";

export default function Introduce() {
  const [borderRadius, setBorderRadius] = useState<boolean>(true);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const main = document.querySelector("#main")!;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const docHeight = main.scrollHeight - main.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled > 99.1 ? 100 : scrolled);
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
          borderRadius: borderRadius ? "0 5px 5px 0" : "",
          background: `linear-gradient(90deg, rgba(0,86,214,1) 0%, rgba(102,163,255,1) 50%, rgba(204,224,255,1) 100%)`,
        }}
      />
      {/* <div className={styles.changeIcon}>
        <ChangeIcon />
      </div> */}
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
      </section>
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Work Experience
        </h2>
        <div className={styles.row}>
          <div className={styles.left}>
            <h3 className={styles.header3}>
              에이프리카<span className={styles.pointTextStyle}>.</span>
            </h3>
            <span className={styles.sub}>FullStack Developer (Front Part)</span>
            <span className={styles.time}>2023.04 - 현재</span>
          </div>
          <div className={styles.right}>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                Vscode Extension 고도화
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2025.01 - 2025.02</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                Ast 변환 Vscode Extension에서 Java와 C 언어를 비교하여 분석할 수
                있는 뷰어를 개발하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  C 언어 코드 및 변환된 Java 코드를 동시에 확인할 수 있는 뷰어
                  구현
                </li>
                <li className={styles.li}>
                  뷰어 내부에 파일 탭 추가 및 자동 저장 기능 개발
                </li>
                <li className={styles.li}>
                  AI를 활용하여 사용자가 선택한 부분의 코드를 재변환하는 기능
                  개발
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>React, JavaScript, Scss</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                세렝게티 사용자 즐겨찾기 기능 개발
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2024.11 - 2024.12</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                세렝게티 사용자가 즐겨찾기를 등록할 수 있도록 백엔드 및
                프론트엔드 기능을 추가하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  RabbitMQ를 활용한 MSA 구조의 백엔드에서 사용자 정보를 동기화
                </li>
                <li className={styles.li}>
                  사용자 및 즐겨찾기 데이터를 매핑하여 관계형 데이터 구조를 설계
                </li>
                <li className={styles.li}>
                  즐겨찾기 기능의 CRUD API 개발과 솔루션 프론트엔드 작업
                </li>
                <li className={styles.li}>
                  쿠버네티스의 파드로 백엔드 서버 배포
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                Java, Spring Boot, Kubernetes, Angular, Scss
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                Vscode Extension WebView 개발
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2024.10 - 2024.10</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                C언어 AST 분석에 따른 파일 트리 구조 뷰어를 개발하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  리액트를 기반으로 React-flow 라이브러리를 커스텀 하여 프로젝트
                  요구사항에 맞게 최적화
                </li>
                <li className={styles.li}>
                  C 언어 AST 분석 결과로 제공되는 데이터 구조를 직렬화 기능 개발
                </li>
                <li className={styles.li}>
                  Vscode와 연동하여 상호작용할 수 있는 기능 추가
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>React, JavaScript, Scss</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                세렝게티 머테리얼 개발 및 적용
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2024.03 - 2024.12</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                세렝게티 전용 디자인 시스템 구축과 해당 솔루션 UI/UX에
                적용하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>사용되고 있는 컴포넌트의 UX 통일</li>
                <li className={styles.li}>
                  확장성을 고려한 디자인 시스템 컴포넌트 개발
                </li>
                <li className={styles.li}>
                  세렝게티 디자인 시스템 document 페이지 개발
                </li>
                <li className={styles.li}>
                  세렝게티 머테리얼을 활용하여 기존 솔루션 웹 페이지의 UI/UX
                  개선 진행
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>Angular, TypeScript, Scss</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                세렝게티 마이그레이션 및 단점 개선
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2024.01 - 2024.03</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                세렝게티의 앵귤러 버전 마이그레이션과 기존 프론트엔드에서 보여진
                단점들을 개선하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  앵귤러 8 버전에서 17버전으로 마이그레이션 진행
                </li>
                <li className={styles.li}>
                  새로운 버전의 세렝게티 웹 페이지 성능 향상을 위한 설계 및 개발
                </li>
                <li className={styles.li}>
                  세렝게티의 초기 로딩으로 인한 접속 지연 문제를 라이브러리
                  모듈화 및 지연 로딩을 적용하여 개선
                </li>
                <li className={styles.li}>
                  라우터 모듈을 상속하여 프론트엔드 MSA화 진행
                </li>
                <li className={styles.li}>
                  로컬 개발 환경을 동일하게 구성할 수 있는 UI 전용 템플릿 개발
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>Angular, TypeScript, Scss</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                세렝게티 챗봇 UI 개발
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2023.10 - 2023.12</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                챗봇 모델을 선택하여 채팅 기능을 제공할 수 있는 세렝게티 전용
                챗봇 UI를 개발하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  피그마를 활용하여 협업 및 기획안 작성
                </li>
                <li className={styles.li}>
                  선택한 모델에 따른 커스텀 뷰어 제공
                </li>
                <li className={styles.li}>
                  챗봇 테마 변경 기능을 제공하고, 창 전환 시 레이아웃이 깨지지
                  않도록 동적 스타일 구축
                </li>
                <li className={styles.li}>
                  Pdf, Word, Excel 파일을 업로드하여 벡터 DB에 분할 저장하고,
                  이를 통해 문서를 조회할 수 있는 프론트엔드 기능 구현
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>Angular, Ngrx, TypeScript, Scss</p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                DPG 관리자 서비스 보완
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2023.07 - 2023.09</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                디지털 플랫폼 정부 관리자 서비스를 위한 솔루션 보완 작업을
                진행하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  Naver, NHN, KT, AWS, SCP 빌링 UI/UX 구축
                </li>
                <li className={styles.li}>
                  통합 계산서 기능 개발 및 영수증 Pdf 출력 기능 구현
                </li>
                <li className={styles.li}>
                  백엔드의 SQL 검색 기능을 QueryDSL로 전환
                </li>
                <li className={styles.li}>
                  세렝게티의 UI를 DPG 관리자 페이지에 맞게 변환
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                Java, Spring Boot, Angular, TypeScript, Scss, Kubernetes
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                프라이빗 클라우드 빌링 개발
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2023.06 - 2023.07</span>
              <h5 className={styles.header5}>
                Result<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                세렝게티 솔루션에 등록된 쿠버네티스의 인스턴스 사용량 로그를
                활용하여 빌링 시스템 구축하였습니다.
              </p>
              <h5 className={styles.header5}>
                What did I do<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  세렝게티 인스턴스 로그를 분석하여 주요 지표를 정리
                </li>
                <li className={styles.li}>
                  MSA 구조에 맞춰 인스턴스 정보를 빌링 시스템 데이터베이스에
                  실시간 동기화
                </li>
                <li className={styles.li}>
                  분석된 데이터에 테넌트 정보를 결합하여 빌링 측정
                </li>
                <li className={styles.li}>
                  월별 인스턴스 사용량과 빌링 데이터를 저장
                </li>
              </ul>
              <h5 className={styles.header5}>
                Tech Stack<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                Java, Spring Boot, Angular, TypeScript, Scss, Kubernetes
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Other Experience
        </h2>
        <div className={styles.row}>
          <div className={styles.left}>
            <h3 className={composeStyles(styles.header3, styles.sideProject)}>
              사이드 프로젝트<span className={styles.pointTextStyle}>.</span>
            </h3>
            <div className={styles.imageContainer}>
              <div className={styles.imageBox}>
                <img className={styles.img} src="/dpost/dpost1.png" />
              </div>
              <div className={styles.imageBox}>
                <img className={styles.img} src="/dpost/dpost2.png" />
              </div>
              <div className={styles.imageBox}>
                <img className={styles.img} src="/dpost/dpost3.png" />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                DPOST 블로그 개발
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.sub}>
                프로젝트 git 주소 :{" "}
                <a
                  className={styles.a}
                  href="https://github.com/dong7314/Blog"
                  target="_blank"
                >
                  https://github.com/dong7314/Blog
                </a>
              </span>
              <span className={styles.sub}>
                프로젝트 주소 :{" "}
                <a
                  className={styles.a}
                  href="https://dpost.site"
                  target="_blank"
                >
                  https://dpost.site
                </a>
              </span>
              <span className={styles.time}>2024.12 - 현재</span>
              <h5 className={styles.header5}>
                Description<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                개발에 필요한 지식과 학습 내용을 정리하기 위한 공용 블로그를
                개발하였습니다. 현재 계속해서 업데이트 중이며 추후 소셜 로그인
                기능까지 지원할 예정입니다.
              </p>
              <h5 className={styles.header5}>
                Frontend<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  React, NextJS, TypeScript 기반으로 개발
                </li>
                <li className={styles.li}>Zustand를 활용하여 상태 관리 진행</li>
                <li className={styles.li}>AuthJS를 통한 JWT 로그인 관리</li>
                <li className={styles.li}>
                  React Query 및 서비 사이드 렌더링 사용
                </li>
                <li className={styles.li}>Vanilla Extract를 통한 스타일링</li>
                <li className={styles.li}>
                  모노레포 구조를 이용하여 CoreUI 서브 라이브러리 개발 및
                  Storybook 구성
                </li>
              </ul>
              <h5 className={styles.header5}>
                Backend<span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>NestJS 기반으로 개발</li>
                <li className={styles.li}>
                  개인 서버에 구축한 MinIO S3 스토리지를 활용하여 이미지 저장
                </li>
                <li className={styles.li}>
                  프라이빗 harbor를 통해 이미지 배포 및 서버 구축
                </li>
              </ul>
              <h5 className={styles.header5}>
                Implemented Feature
                <span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                홈, 게시글 목록 / 상세 / 작성 / 수정 화면, 댓글, 좋아요, 로그인
                / 회원가입, 서치
              </p>
            </div>
            <div className={styles.project}>
              <h4 className={styles.header4}>
                개인 서버 운영
                <span className={styles.pointTextStyle}>.</span>
              </h4>
              <span className={styles.time}>2024.12 - 현재</span>
              <h5 className={styles.header5}>
                Description<span className={styles.pointTextStyle}>.</span>
              </h5>
              <p className={styles.p}>
                개발에 필요한 서버 및 인프라를 미니 pc를 활용하여 개인적으로 운영하고 있습니다.
              </p>
              <h5 className={styles.header5}>
                Implemented Feature
                <span className={styles.pointTextStyle}>.</span>
              </h5>
              <ul className={styles.ul}>
                <li className={styles.li}>K3s를 통해 pod, service, ingress, ssl 운영</li>
                <li className={styles.li}>
                  <span className={styles.liSpan}>개발 일지, 학습 내용 등을 작성하기 위한 사이트</span><br/>
                  블로그 :{" "}
                  <a
                    className={styles.a}
                    href="https://dpost.site"
                    target="_blank"
                  >
                    https://dpost.site
                  </a>
                </li>
                <li className={styles.li}>
                  <span className={styles.liSpan}>gemini를 활용하여 ai가 비트코인을 자동매매하는 사이트</span><br/>
                  비트코인 자동매매 :{" "}
                  <a
                    className={styles.a}
                    href="https://bitcoin.ldy-studio.com"
                    target="_blank"
                  >
                    https://bitcoin.ldy-studio.com
                  </a>
                </li>
                <li className={styles.li}>
                  <span>Ollama를 사용하여 오픈소스 LLM을 로컬 PC에서 돌리며</span><br/>
                  <span className={styles.liSpan}>Open WebUI와 연결해 ChatGPT 형식으로 사용할 수 있는 사이트</span><br/>
                  AI GPT :{" "}
                  <a
                    className={styles.a}
                    href="https://gpt.ldy-studio.com"
                    target="_blank"
                  >
                    https://gpt.ldy-studio.com
                  </a>
                </li>
                <li className={styles.li}>
                  <span className={styles.liSpan}>S3 분산 스토리지 데이터 저장소(이미지, 파일)</span><br/>
                  MinIO :{" "}
                  <a
                    className={styles.a}
                    href="https://minio.ldy-studio.com"
                    target="_blank"
                  >
                    https://minio.ldy-studio.com
                  </a>
                </li>
                <li className={styles.li}>
                  <span className={styles.liSpan}>프라이빗 도커 이미지 저장소</span><br/>
                  Harbor :{" "}
                  <a
                    className={styles.a}
                    href="https://harbor.ldy-studio.com"
                    target="_blank"
                  >
                    https://harbor.ldy-studio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Education
        </h2>
        <div className={styles.other}>
          <h4 className={styles.header4}>
            한국방송통신대학교
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>컴퓨터과학과 (편입)</span>
          <span className={styles.time}>2025.03 - 현재</span>
          <p className={composeStyles(styles.p, styles.cuttingMargin)}>
            전문적인 지식의 기초를 다지기 위해 컴퓨터 전공으로 편입을 하여 현재
            학습을 진행하고 있습니다.
          </p>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            SSAFY 8기(삼성 청년 소프트웨어 아카데미)
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>삼성전자 (주)</span>
          <span className={styles.time}>2022.07 - 2023.04</span>
          <p className={composeStyles(styles.p, styles.cuttingMargin)}>
            SSAFY 아카데미에 합격하여 교육으로 기본적인 CS, 알고리즘, 백엔드,
            프론트 프레임워크를 학습하였으며 다양한 프로젝트를 통해 협업 능력을
            키웠습니다.
          </p>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            풀스택 개발자 양성과정 교육
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>코리아 IT 아카데미 (주)</span>
          <span className={styles.time}>2022.03 - 2022.07</span>
          <p className={composeStyles(styles.p, styles.cuttingMargin)}>
            개발자가 되기 위해 국비 교육으로 풀스택 개발자 양성과정을
            수강하였습니다.
          </p>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            경북대학교
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>산림환경자원전공 (졸업)</span>
          <span className={styles.time}>2016.03 - 2022.02</span>
          <p className={styles.p}>
            학업을 진행하는 도중 복수 전공으로 소프트웨어학과에 진학하였지만
            코로나로 인한 수강 제한으로 취소 후 학사 졸업을 하게 되었습니다.
          </p>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          License
        </h2>
        <div className={styles.other}>
          <h4 className={styles.header4}>
            정보처리기사
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>과학기술정보통신부</span>
          <span className={styles.time}>2024.06.18</span>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            CKA (Certified Kubernetes Administrator)
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>Cloud Native Computing Foundation</span>
          <span className={styles.time}>2024.03.23</span>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            SQLD
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>한국데이터산업진흥원장</span>
          <span className={styles.time}>2023.04.14</span>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Awards
        </h2>
        <div className={styles.other}>
          <h4 className={styles.header4}>
            삼성 청년 소프트웨어 아카데미 2학기 공통 프로젝트 우수상
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>삼성전자 (주)</span>
          <span className={styles.time}>2023.02</span>
          <p className={styles.p}>
            소켓 통신을 통한 스타일 컨설팅 상담 서비스를 개발하였습니다. React
            라이브러리를 사용하여 웹 UI를 구성하였고 Redux 상태 관리로 사용자의
            정보를 전역 관리하였습니다.
          </p>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            삼성 청년 소프트웨어 아카데미 1학기 프로젝트 최우수상
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <span className={styles.sub}>삼성전자 (주)</span>
          <span className={styles.time}>2022.11</span>
          <p className={styles.p}>
            Django 및 Vue.js를 사용하여 영화 추천 커뮤니티 서비스를
            구현하였습니다.
          </p>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Skills
        </h2>
        <div className={styles.other}>
          <h4 className={styles.header4}>
            About Me
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              사용자의 불편함을 최소화하는 것을 목표로 삼습니다.
            </li>
            <li className={styles.li}>
              업무에 있어서 모르는 분야가 있으면 적극적으로 찾아 학습합니다.
            </li>
            <li className={styles.li}>
              팀 내에 필요한 개선 점을 찾았다면 주도적으로 진행합니다.
            </li>
          </ul>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            Communication
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              디자인, 벡엔드, 데브옵스 팀과의 협업에 대한 이해가 높습니다.
            </li>
            <li className={styles.li}>
              스스로 아직 부족한 점이 많다고 생각하여 정확하지 않은 말은
              삼가하려고 노력합니다.
            </li>
            <li className={styles.li}>
              팀 회의 시에 필요한 의견과 아이디어를 적극적으로 표현합니다.
            </li>
          </ul>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            Frontend
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              다양한 프레임워크 및 라이브러리를 사용하여 프로젝트를 개발한
              경험이 있습니다.
            </li>
            <li className={styles.li}>
              리액트, 앵귤러를 사용하여 컴포넌트 주도 개발을 진행합니다.
            </li>
            <li className={styles.li}>
              JavaScript와 TypeScript를 사용할 수 있습니다.
            </li>
            <li className={styles.li}>
              Storybook을 사용하여 아토믹 디자인 시스템을 개발 할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            Backend
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              NestJs 및 Spring Boot 백엔드의 프로젝트 경험이 있습니다.
            </li>
            <li className={styles.li}>
              MSA화 된 백엔드의 구조를 이해하고 있습니다.
            </li>
          </ul>
        </div>
        <div className={styles.seperate} />
        <div className={styles.other}>
          <h4 className={styles.header4}>
            Devops
            <span className={styles.pointTextStyle}>.</span>
          </h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Devops의 프로세스에 대해 이해하고 있습니다.
            </li>
            <li className={styles.li}>
              Kubernetes에 대해 이해하고 있으며 능숙하게 사용할 수 있습니다.
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.seperate} />
      <section className={styles.mainSection}>
        <h2 className={styles.header2}>
          <span className={styles.headerPoint}>*</span>
          Contact
        </h2>
        <ul className={styles.ul}>
          <li className={styles.li}>이메일 : eaea7314@naver.com</li>
          <li className={styles.li}>휴대폰 : 010-6250-7314</li>
          <li className={styles.li}>
            깃허브 :{" "}
            <a
              className={styles.a}
              href="https://github.com/dong7314"
              target="_blank"
            >
              https://github.com/dong7314
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
