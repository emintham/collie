import { SlateEditor } from "../common/slate";
import React from "react";
import { FormatBold, FormatCode, FormatItalic } from "./format";

const KeyHandler = (editor: SlateEditor) => {
  return (event: React.KeyboardEvent) => {
    if (!event.ctrlKey) {
      return;
    }

    switch (event.key) {
      case "`": {
        event.preventDefault();
        FormatCode(event, editor);
        break;
      }
      case "b": {
        event.preventDefault();
        FormatBold(event, editor);
        break;
      }
      case "i": {
        event.preventDefault();
        FormatItalic(event, editor);
        break;
      }
    }
  };
};

export default KeyHandler;
