import React from "react";
import { RenderElementProps } from "slate-react";

type IParagraphProps = RenderElementProps;

const Paragraph = (props: IParagraphProps) => {
  return <p {...props.attributes}>{props.children}</p>;
};

export default Paragraph;
