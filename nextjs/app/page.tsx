import { useState } from "react";
import styles from "./page.module.css";
import { MenuPopover } from "./components/tools/MenuPopover";

export default function Page() {
  return (
    <div className={styles.component}>
      <MenuPopover />
    </div>
  );
}
