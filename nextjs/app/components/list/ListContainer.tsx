import { List } from "./List";
import styles from "./ListContainer.module.css";

interface Props {}

export function ListContainer(props: Props) {
  return (
    <div className={styles.component}>
      <List />
    </div>
  );
}
