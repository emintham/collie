import React from "react";
import { SlateEditor } from "../common/slate";
import { FormatterFunc } from "./format";

type MouseHandlerFuncFactory = (
  formatterFunc: FormatterFunc,
  editor: SlateEditor
) => React.MouseEventHandler;

export const makeMouseHandler: MouseHandlerFuncFactory = (
  formatterFunc,
  editor
) => event => {
  event.preventDefault();
  formatterFunc(editor);
};
