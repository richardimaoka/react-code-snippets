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
    // ref.current?.hidePopover();
  }

  return (
    <ul className={styles.component}>
      <li>Adobe Fontsから追加</li>
      <li
        className={styles.anchor}
        onMouseOver={onAnchor}
        onMouseLeave={leaveAnchor}
      >
        フォント
      </li>
      <div
        ref={ref}
        className={styles.menu}
        onMouseOver={onMenu}
        onMouseLeave={leaveMenu}
        popover="auto"
      >
        menu
      </div>
      <li>最近使用したフォント</li>
      <li>サイズ</li>
    </ul>
  );
}
