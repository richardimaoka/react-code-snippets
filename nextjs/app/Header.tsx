import styles from "./Header.module.css";

import { MenuButtonStack } from "./MenuButtonStack";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>logo</div>
      <div /* empty space in CSS grid */ />
      <MenuButtonStack />
    </div>
  );
}
