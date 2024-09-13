"use client";

import { ReactElement, useState } from "react";
import styles from "./Drawer.module.css";

interface Props {
  open?: boolean;
}

export function Drawer(props: Props): ReactElement {
  type State = "SlideIn" | "SlideOut" | "Hidden";
  const [state, setState] = useState<State>("Hidden");

  // props.open is more like a "verb" rather than state
  // it means that the user triggered opening(true) or closing(false) the drawer
  if (props.open) {
    // state check to avoid inifinite loop
    if (state === "SlideOut") {
      // if in the middle of sliding out, and triggered open
      setState("SlideIn");
    } else if (state === "Hidden") {
      // if hidden, start sliding in the drawer
      setState("SlideIn");
    }
  } else {
    // state check to avoid inifinite loop
    if (state === "SlideIn") {
      // if in the middle of sliding in or slide-in animation finished, and triggered close
      setState("SlideOut");
    }
  }

  switch (state) {
    case "SlideIn":
      return <div className={styles.component + " " + styles.slidein}></div>;
    case "SlideOut":
      return (
        <div
          onAnimationEnd={() => {
            setState("Hidden");
          }}
          className={styles.component + " " + styles.slideout}
        ></div>
      );
    case "Hidden":
      return <></>;
  }
}
