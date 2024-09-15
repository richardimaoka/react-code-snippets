import { Article } from "./components/article/Article";
import { MenuPopoverAnchorHover } from "./components/tools/MenuPopoverAnchorHover";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <MenuPopoverAnchorHover />
    </div>
  );
}
