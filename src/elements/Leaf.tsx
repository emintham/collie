import React, { ReactElement } from "react";
import { RenderLeafProps } from "slate-react";

const Leaf = (props: RenderLeafProps): ReactElement => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal"
      }}
    >
      {props.children}
    </span>
  );
};

export const renderLeaf = (props: RenderLeafProps): JSX.Element => {
  return <Leaf {...props} />;
};

export default Leaf;
