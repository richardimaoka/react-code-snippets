import styles from "./MenuPanel.module.css";
import { useRef, useState } from "react";

export function MenuPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOnAnchor, setOnAnchor] = useState(false);
  const [isOnMenu, setOnMenu] = useState(false);

  function onAnchor() {
    setOnAnchor(true);
  }

  function leaveAnchor() {
    setOnAnchor(false);
  }

  function onMenu() {
    setOnMenu(true);
  }

  function leaveMenu() {
    setOnMenu(false);
  }

  if (isOnAnchor || isOnMenu) {
    ref.current?.showPopover();
  } else {
    ref.current?.hidePopover();
  }

  return (
    <div>
      <ul className={styles.component}>
        <li className={styles.item}>Adobe Fontsから追加</li>
        <li
          className={styles.anchor + " " + styles.item}
          onMouseOver={onAnchor}
          onMouseLeave={leaveAnchor}
        >
          フォント
        </li>
        <li className={styles.item}>最近使用したフォント</li>
        <li className={styles.item}>サイズ</li>
      </ul>
      <div
        ref={ref}
        className={styles.menu}
        onMouseOver={onMenu}
        onMouseLeave={leaveMenu}
        popover="auto"
      >
        menu
      </div>
    </div>
  );
}
