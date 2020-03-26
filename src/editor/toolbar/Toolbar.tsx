import Icon from "../../clarity/Icon";
import { makeMouseHandler } from "../MouseHandler";
import {
  formatBold,
  formatItalic,
  formatContentHeader,
  formatSectionHeader
} from "../format";
import React, { useState } from "react";
import { SlateEditor } from "../../common/slate";

interface IToolbarProps {
  editor: SlateEditor;
}

const Bold = (editor: SlateEditor) => (
  <button
    className={"btn btn-link"}
    onMouseDown={makeMouseHandler(formatBold, editor)}
  >
    <Icon shape={"bold"} />
  </button>
);

const Italic = (editor: SlateEditor) => (
  <button
    className={"btn btn-link"}
    onMouseDown={makeMouseHandler(formatItalic, editor)}
  >
    <Icon shape={"italic"} />
  </button>
);

const FontSize = (editor: SlateEditor) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`dropdown ${hover ? "open" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className={"dropdown-toggle btn btn-link"}>
        <Icon shape={"font-size"} />
        <Icon shape={"caret down"} size={12} />
      </button>
      <div className={"dropdown-menu"}>
        <div className={"dropdown-item"}>
          <h2 onMouseDown={makeMouseHandler(formatContentHeader, editor)}>
            Content Header
          </h2>
        </div>
        <div className={"dropdown-item"}>
          <h3 onMouseDown={makeMouseHandler(formatSectionHeader, editor)}>
            Section Header
          </h3>
        </div>
      </div>
    </div>
  );
};

const Toolbar = (props: IToolbarProps): JSX.Element => (
  <div>
    {Bold(props.editor)}
    {Italic(props.editor)}
    {FontSize(props.editor)}
  </div>
);

export default Toolbar;
