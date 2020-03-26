import React from "react";

interface IIconProps {
  shape: string;
  size?: number;
}

const Icon = (props: IIconProps): JSX.Element =>
  React.createElement("clr-icon", {
    shape: props.shape,
    size: String(props.size || 20)
  });

export default Icon;
