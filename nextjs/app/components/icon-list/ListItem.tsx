import { IconComponent, IconName } from "./icons/icons";
import styles from "./ListItem.module.css";

interface Props {
  iconName: IconName;
}

export function ListItem(props: Props) {
  return (
    <div className={styles.component}>
      <IconComponent name={props.iconName} />
      <span>animal</span>
    </div>
  );
}
