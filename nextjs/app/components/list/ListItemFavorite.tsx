import { IconFavorite } from "../icons/IconFavorite";
import styles from "./ListItemFavorite.module.css";

interface Props {}

export function ListItemFavorite(props: Props) {
  return (
    <div className={styles.component}>
      <IconFavorite />
      <div className={styles.name}>Favorite item</div>
    </div>
  );
}
