import styles from "./MenuPopoverAnchor.module.css";

interface Props {}

export function MenuPopoverAnchor(props: Props) {
  return (
    <div className={styles.component}>
      <button popoverTarget="menu">Open Menu</button>
      <ul id="menu" className={styles.menu} popover={"auto"}>
        <li className="item">.sss..</li>
        <li className="item">...sss</li>
      </ul>
    </div>
  );
}
