import { ListContainer } from "./components/list/ListContainer";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <ListContainer />
    </div>
  );
}
