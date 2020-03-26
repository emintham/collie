import React from "react";
import { RenderLeafProps } from "slate-react";

export const renderLeaf = (props: RenderLeafProps): JSX.Element => {
  let { children } = props;

  if (props.leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (props.leaf.italic) {
    children = <em>{children}</em>;
  }

  if (props.leaf.underline) {
    children = <u>{children}</u>;
  }

  if (props.leaf.strikethrough) {
    children = <del>{children}</del>;
  }

  return <span {...props.attributes}>{children}</span>;
};
