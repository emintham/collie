import Button from "./Button";
import React from "react";

interface IIconProps {
  shape: string;
  size?: number;
  onMouseDown?: React.MouseEventHandler;
}

const Icon = (props: IIconProps): JSX.Element => {
  return (
    <Button flat={true} onMouseDown={props.onMouseDown}>
      {React.createElement("clr-icon", {
        shape: props.shape,
        size: String(props.size || 20)
      })}
    </Button>
  );
};

export default Icon;
