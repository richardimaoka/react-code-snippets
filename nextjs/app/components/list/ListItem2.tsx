import { Icon2 } from "./Icon2";
import styles from "./ListItem.module.css";

interface Props {}

export function ListItem2(props: Props) {
  return (
    <div className={styles.component}>
      <Icon2 />
      <div className={styles.name}>External Link item</div>
    </div>
  );
}
