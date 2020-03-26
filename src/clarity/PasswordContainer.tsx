import React, { ReactNode } from "react";

interface IPasswordContainer {
  children?: ReactNode;
}
const PasswordContainer = (props: IPasswordContainer) =>
  React.createElement(
    "clr-password-container",
    { className: "clr-form-control" },
    props.children
  );

export default PasswordContainer;
