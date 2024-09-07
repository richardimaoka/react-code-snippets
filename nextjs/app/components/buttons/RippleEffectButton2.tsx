"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RippleEffectButton2.module.css";

interface Props {}

interface Click {
  x: number;
  y: number;
  timestamp: number;
}

export function RippleEffectButton2(props: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  // For consecutive clicks, it needs to be an array, instead of a single click
  const [clicks, setClicks] = useState<Click[]>([]);

  function removeClick(timestamp: number) {
    const updatedClicks = clicks.filter((c) => c.timestamp === timestamp);
    setClicks(updatedClicks);
  }

  function onClick(e: React.MouseEvent<HTMLElement>) {
    if (ref.current) {
      const now = Date.now();
      let updatedClicks = [...clicks];
      updatedClicks.push({
        x: e.pageX - ref.current?.offsetLeft,
        y: e.pageY - ref.current?.offsetTop,
        timestamp: now,
      });
      setClicks(updatedClicks);
      setTimeout(function () {
        removeClick(now);
      }, 1200);
    }
  }

  return (
    <button ref={ref} className={styles.component} onClick={onClick}>
      button
      {
        // For consecutive clicks, multiple elements, instead of a single element
        clicks.map((c) => (
          <div
            key={c.timestamp}
            className={styles.ripple}
            style={{ top: `${c.y}px`, left: `${c.x}px` }}
          />
        ))
      }
    </button>
  );
}
