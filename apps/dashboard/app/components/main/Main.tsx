import { ReactNode } from "react";
import * as styles from "./Main.css";

type Props = {
  children: ReactNode;
};
export default function Main({ children }: Props) {
  return <main id="main" className={styles.main}>{children}</main>;
}
