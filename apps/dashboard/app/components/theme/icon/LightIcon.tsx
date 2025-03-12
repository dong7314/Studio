import * as styles from "./Icon.css";

import { themeVars } from "~/theme.css";

export default function LightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styles.svg}
    >
      <g clipPath="url(#clip0_1818_5416)">
        <path
          d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 1V3"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21V23"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.2207 4.22L5.6407 5.64"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3594 18.36L19.7794 19.78"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 12H3"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12H23"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.2207 19.78L5.6407 18.36"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3594 5.64L19.7794 4.22"
          stroke={themeVars.color.text}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1818_5416">
          <rect width="24" height="24" stroke={themeVars.color.text} />
        </clipPath>
      </defs>
    </svg>
  );
}
