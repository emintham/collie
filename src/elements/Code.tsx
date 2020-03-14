import React from "react";
import { RenderElementProps } from "slate-react";

type ICodeElementProps = RenderElementProps;

const Code = (props: ICodeElementProps) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default Code;
