import React from "react";
import { RenderElementProps } from "slate-react";

type IParagraphProps = RenderElementProps;

const Paragraph = (props: IParagraphProps): JSX.Element => (
  <p {...props.attributes}>{props.children}</p>
);

export default Paragraph;
