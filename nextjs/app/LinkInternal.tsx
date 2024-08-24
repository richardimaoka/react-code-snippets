import Link from "next/link";
import styles from "./LinkInternal.module.css";

interface Props {
  path: string;
  name: string;
}

export function LinkInternal(props: Props) {
  return (
    <Link className={styles.component} href={props.path}>
      {props.name}
    </Link>
  );
}
