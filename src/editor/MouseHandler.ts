import { SlateEditor } from "../common/slate";
import React from "react";

type FormatterFunc = (e: SlateEditor) => void;

export const makeMouseHandler = (
  formatterFunc: FormatterFunc,
  editor: SlateEditor
) => (event: React.MouseEvent) => {
  event.preventDefault();
  formatterFunc(editor);
};
