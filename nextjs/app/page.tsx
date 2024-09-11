import { Horizontal } from "./components/layout/Horizontal";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <Horizontal />
    </div>
  );
}
