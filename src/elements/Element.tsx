import React from "react";
import { RenderElementProps } from "slate-react";

export const renderElement = (props: RenderElementProps): JSX.Element => {
  switch (props.element.type) {
    case "code":
      return <code {...props} />;
    case "h2":
      // eslint-disable-next-line
      return <h2 {...props} />;
    case "h3":
      // eslint-disable-next-line
      return <h3 {...props} />;
    default:
      return <p {...props} />;
  }
};
