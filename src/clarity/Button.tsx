import React, { ReactNode } from "react";

interface IButtonProps {
  children?: ReactNode;
  flat: boolean;
  onMouseDown?: React.MouseEventHandler;
}

const Button = (props: IButtonProps): JSX.Element => {
  const flat = props.flat ? "btn-link" : "";

  return (
    <div className={`btn ${flat}`} onMouseDown={props.onMouseDown}>
      {props.children}
    </div>
  );
};

export default Button;
