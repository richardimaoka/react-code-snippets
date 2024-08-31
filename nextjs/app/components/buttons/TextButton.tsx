import styles from "./TextButton.module.css";

interface Props {
  children: string;
}

export function TextButton(props: Props) {
  return <button className={styles.component}>{props.children}</button>;
}
