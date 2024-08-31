import { IconFavorite } from "../icons/IconFavorite";
import styles from "./ButtonFav.module.css";

interface Props {}

export function ButtonFav(props: Props) {
  return (
    <div className={styles.component}>
      <IconFavorite />
      <span className={styles.name}>fav</span>
    </div>
  );
}
