import Icon from "../../clarity/Icon";
import { makeMouseHandler } from "../MouseHandler";
import { formatBold, formatItalic } from "../format";
import React from "react";
import { SlateEditor } from "../../common/slate";

interface IToolbarProps {
  editor: SlateEditor;
}

const Toolbar = (props: IToolbarProps): JSX.Element => (
  <div>
    <Icon
      shape={"bold"}
      onMouseDown={makeMouseHandler(formatBold, props.editor)}
    />
    <Icon
      shape={"italic"}
      onMouseDown={makeMouseHandler(formatItalic, props.editor)}
    />
  </div>
);

export default Toolbar;
