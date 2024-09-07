"use client";

import { useState } from "react";
import styles from "./SizeEffectButton.module.css";

interface Props {}

export function SizeEffectButton(props: Props) {
  type State = "down" | "up" | "normal";
  const [state, setState] = useState<State>("normal");

  function styleSwitch(s: State): string {
    switch (s) {
      case "down":
        return styles.component + " " + styles.buttonDown;
      case "up":
        return styles.component + " " + styles.buttonUp;
      case "normal":
        return styles.component;
    }
  }

  return (
    <button
      className={styleSwitch(state)}
      onMouseDown={() => {
        setState("down");
      }}
      onMouseUp={() => {
        setState("up");
      }}
      onAnimationEnd={() => {
        setState("normal");
      }}
      onMouseOut={() => {
        setState("normal");
      }}
    >
      button
    </button>
  );
}
