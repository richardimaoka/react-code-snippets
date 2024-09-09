import { Icon3 } from "./Icon3";
import styles from "./ListItem.module.css";

interface Props {}

export function ListItem3(props: Props) {
  return (
    <div className={styles.component}>
      <Icon3 />
      <div className={styles.name}>Cryptographic item</div>
    </div>
  );
}
