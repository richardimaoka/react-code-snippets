import { Icon } from "./Icon";
import styles from "./ListItem.module.css";

interface Props {}

export function ListItem(props: Props) {
  return (
    <div className={styles.component}>
      <Icon />
      <div className={styles.name}>Favorite item</div>
    </div>
  );
}
