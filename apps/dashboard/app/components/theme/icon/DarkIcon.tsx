import { themeVars } from "~/theme.css";

export default function DarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ width: "32px", height: "32px" }}
    >
      <path
        d="M21.0009 12.79C20.8436 14.4922 20.2047 16.1144 19.1591 17.4668C18.1135 18.8192 16.7044 19.8458 15.0966 20.4265C13.4888 21.0073 11.7489 21.1181 10.0804 20.7461C8.4119 20.3741 6.88387 19.5345 5.6751 18.3258C4.46633 17.117 3.62682 15.589 3.25479 13.9205C2.88275 12.252 2.99359 10.5121 3.57434 8.9043C4.15508 7.29651 5.18171 5.88737 6.53409 4.84175C7.88647 3.79614 9.50867 3.15731 11.2109 3C10.2143 4.34827 9.73473 6.00945 9.85941 7.68141C9.98409 9.35338 10.7047 10.9251 11.8903 12.1106C13.0758 13.2961 14.6475 14.0168 16.3195 14.1415C17.9914 14.2662 19.6526 13.7866 21.0009 12.79Z"
        stroke={themeVars.color.text}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
