import styles from "./Header.module.css";
import { LinkInternal } from "./LinkInternal";

interface Props {}

export function Header(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.logo}>logo</div>
      <div /* empty space in CSS grid */ />
      <LinkInternal path="/item1" name={"item1"} />
      <LinkInternal path="/item2" name={"item2"} />
    </div>
  );
}
