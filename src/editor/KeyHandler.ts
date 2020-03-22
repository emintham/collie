import { SlateEditor } from "../common/slate";
import React from "react";
import { formatBold, formatItalic } from "./format";
import { modKeyPressed } from "../common/keyboard";

const KeyHandler = (editor: SlateEditor) => (event: React.KeyboardEvent) => {
  if (!modKeyPressed) {
    return;
  }

  switch (event.key) {
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

export default KeyHandler;
