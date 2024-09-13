"use client";

import { useState } from "react";
import { Drawer } from "./components/layout/Drawer";
import styles from "./page.module.css";

export default function Page() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={styles.component}>
      main sub
      <button
        style={{ position: "absolute", right: 0 }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        button
      </button>
      <div>
        dd
        <Drawer open={openDrawer} />
      </div>
    </div>
  );
}
