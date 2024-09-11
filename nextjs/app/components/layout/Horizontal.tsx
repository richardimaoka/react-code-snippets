import styles from "./Horizontal.module.css";

interface Props {}

export function Horizontal(props: Props) {
  return (
    <div className={styles.component}>
      <div>1fr</div>
      {[1, 2, 3, 4].map((x) => (
        <div key={x}>{"auto"}</div>
      ))}
    </div>
  );
}
