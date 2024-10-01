import { IconFavorite } from "./IconFavorite";

export type IconName = "favorite";

interface Props {
  name: IconName;
}

export function IconComponent(props: Props): JSX.Element {
  switch (props.name) {
    case "favorite":
      return <IconFavorite />;
  }
}
