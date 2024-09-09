import styles from "./List.module.css";
import { ListItem } from "./ListItem";
import { ListItem1 } from "./ListItem1";
import { ListItem2 } from "./ListItem2";
import { ListItem3 } from "./ListItem3";

interface Props {}

export function List(props: Props) {
  return (
    <div className={styles.component}>
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem />
    </div>
  );
}
