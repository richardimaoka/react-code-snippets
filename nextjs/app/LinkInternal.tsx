"use client";

import { usePathname } from "next/navigation";
import styles from "./LinkInternal.module.css";
import Link from "next/link";

interface Props {
  path: string;
  name: string;
}

export function LinkInternal(props: Props) {
  const pathname = usePathname();
  const current = pathname === props.path;

  return (
    <Link className={styles.component} href={props.path}>
      <span className={styles.name + (current ? " " + styles.current : "")}>
        {props.name}
      </span>
      {current && <div className={styles.line} />}
    </Link>
  );
}
