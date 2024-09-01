import { IconFavorite } from "../icons/IconFavorite";
import styles from "./IconButton.module.css";

interface Props {
  text: string;
}

export function IconButton(props: Props) {
  return (
    <button className={styles.component}>
      <IconFavorite />
      {props.text}
    </button>
  );
}
