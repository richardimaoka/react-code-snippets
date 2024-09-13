import styles from "./Article.module.css";

interface Props {}

export function Article(props: Props) {
  return (
    <div className={styles.component}>
      <h1>This is an article about the US presidential election in 2024</h1>
      <h2>A subtitle here</h2>
      <p>Kamala Harris vs, Donald Trumphhh</p>
      <h3>A sub sub title here</h3>
      <p>Kamala Harris vs, Donald Trumphhh</p>
      <p>Kamala Harris vs, Donald Trumphhh</p>
      <p>Kamala Harris vs, Donald Trumphhh</p>
    </div>
  );
}
