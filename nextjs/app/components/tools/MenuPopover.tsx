import styles from "./MenuPopover.module.css";

interface Props {}

export function MenuPopover(props: Props) {
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
