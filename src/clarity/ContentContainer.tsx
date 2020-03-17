import React, { ReactNode } from "react";

interface IContentContainerProps {
  children?: ReactNode;
}

const ContentContainer = (props: IContentContainerProps): JSX.Element => {
  return (
    <div className={"content-container"}>
      <div className={"content-area"}>{props.children}</div>
    </div>
  );
};

export default ContentContainer;
