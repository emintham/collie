import { SlateEditor } from "../common/slate";
import React from "react";
import { FormatterFunc } from "./format";

export const makeMouseHandler = (
  formatterFunc: FormatterFunc,
  editor: SlateEditor
) => (event: React.MouseEvent) => {
  event.preventDefault();
  formatterFunc(editor);
};
