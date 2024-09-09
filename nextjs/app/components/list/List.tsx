import styles from "./List.module.css";
import { ListItem } from "./ListItem";

interface Props {}

export function List(props: Props) {
  return (
    <div className={styles.component}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
