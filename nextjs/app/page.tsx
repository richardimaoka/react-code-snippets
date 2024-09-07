import { Button } from "./components/buttons/Button";
import { RippleEffectButton1 } from "./components/buttons/RippleEffectButton1";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <RippleEffectButton1 />
    </div>
  );
}
