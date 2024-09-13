import { Article } from "./components/article/Article";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Article />
    </div>
  );
}
