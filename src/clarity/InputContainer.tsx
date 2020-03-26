import React, { ReactNode } from "react";

interface IInputContainer {
  children?: ReactNode;
}

const InputContainer = (props: IInputContainer) =>
  React.createElement(
    "clr-input-container",
    {
      className: "clr-form-control"
    },
    props.children
  );

export default InputContainer;
