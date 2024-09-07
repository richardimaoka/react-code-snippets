"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RippleEffectButton2.module.css";

interface Props {}

interface Clicked {
  x: number;
  y: number;
  timestamp: number;
}

export function RippleEffectButton2(props: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState<Clicked | null>(null);

  // Upon click, revert the clicked state to null after timeout
  useEffect(() => {
    if (clicked) {
      setTimeout(function () {
        setClicked(null);
      }, 300);
    }
  }, [clicked]);

  function onClick(e: React.MouseEvent<HTMLElement>) {
    if (ref.current && !clicked) {
      setClicked({
        x: e.pageX - ref.current?.offsetLeft,
        y: e.pageY - ref.current?.offsetTop,
        timestamp: Date.now(),
      });
    }
  }

  return (
    <button ref={ref} className={styles.component} onClick={onClick}>
      button
      {clicked && (
        <div
          className={styles.ripple}
          style={{ top: `${clicked.y}px`, left: `${clicked.x}px` }}
        />
      )}
    </button>
  );
}
