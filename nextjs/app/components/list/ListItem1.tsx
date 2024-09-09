import { Icon1 } from "./Icon1";
import styles from "./ListItem.module.css";

interface Props {}

export function ListItem1(props: Props) {
  return (
    <div className={styles.component}>
      <Icon1 />
      <div className={styles.name}>Star item</div>
    </div>
  );
}
