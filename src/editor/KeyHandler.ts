import { SlateEditor } from "../common/slate";
import React from "react";
import { formatBold, formatCode, formatItalic } from "./format";

const KeyHandler = (editor: SlateEditor) => {
  return (event: React.KeyboardEvent) => {
    if (!event.ctrlKey) {
      return;
    }

    switch (event.key) {
      case "`": {
        event.preventDefault();
        formatCode(editor);
        break;
      }
      case "b": {
        event.preventDefault();
        formatBold(editor);
        break;
      }
      case "i": {
        event.preventDefault();
        formatItalic(editor);
        break;
      }
    }
  };
};

export default KeyHandler;
