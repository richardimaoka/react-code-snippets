import { ListItem } from "./components/icon-list/ListItem";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <ListItem iconName={"favorite"} />
    </div>
  );
}
