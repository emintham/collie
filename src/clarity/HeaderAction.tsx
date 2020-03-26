import React, { ReactNode } from "react";

interface IHeaderActionProps {
  children?: ReactNode;
}

const HeaderAction = (props: IHeaderActionProps): JSX.Element => (
  <div className={"header-actions"}>{props.children}</div>
);

export default HeaderAction;
