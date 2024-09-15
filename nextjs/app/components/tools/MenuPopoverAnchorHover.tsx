"use client";

import { useRef, useState } from "react";
import styles from "./MenuPopoverAnchorHover.module.css";
import { MenuPanel } from "./MenuPanel";

interface Props {}

export function MenuPopoverAnchorHover(props: Props) {
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
    <div className={styles.component}>
      <div
        className={styles.anchor}
        onMouseOver={onAnchor}
        onMouseLeave={leaveAnchor}
      >
        Hover to menu
      </div>
      <div
        popover={"auto"}
        ref={ref}
        className={styles.menu}
        onMouseOver={onMenu}
        onMouseLeave={leaveMenu}
      >
        <MenuPanel />
      </div>
    </div>
  );
}
