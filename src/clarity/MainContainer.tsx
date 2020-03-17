import React, { ReactNode } from "react";

interface IMainContainerProps {
  children?: ReactNode;
}

const MainContainer = (props: IMainContainerProps): JSX.Element => {
  return <div className={"main-container"}>{props.children}</div>;
};

export default MainContainer;
