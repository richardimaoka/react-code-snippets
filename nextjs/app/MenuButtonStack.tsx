import styles from "./MenuButtonStack.module.css";
import { LinkInternal } from "./LinkInternal";

interface Props {}

export function MenuButtonStack(props: Props) {
  return (
    <div className={styles.component}>
      <LinkInternal path="/item1" name={"item1"} />
      <LinkInternal path="/item2" name={"item2"} />
      <LinkInternal path="/item3" name={"item3"} />
    </div>
  );
}
