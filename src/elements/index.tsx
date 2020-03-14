import { RenderElementProps } from "slate-react";
import Code from "./Code";
import Paragraph from "./Paragraph";
import React from "react";

export const renderElement = (props: RenderElementProps): JSX.Element => {
  if (props.element.type === "code") {
    return <Code {...props} />;
  } else {
    return <Paragraph {...props} />;
  }
};
