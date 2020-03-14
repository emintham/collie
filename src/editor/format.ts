import { Editor as Helper, Transforms, Text } from "slate";
import { SlateEditor } from "../common/slate";

export const FormatBold = (event: React.KeyboardEvent, editor: SlateEditor) => {
  const [match] = Helper.nodes(editor, {
    match: n => n.bold === true
  });

  Transforms.setNodes(
    editor,
    { bold: !match },
    { match: n => Text.isText(n), split: true }
  );
};

export const FormatItalic = (
  event: React.KeyboardEvent,
  editor: SlateEditor
) => {
  const [match] = Helper.nodes(editor, {
    match: n => n.italic === true
  });

  Transforms.setNodes(
    editor,
    { italic: !match },
    { match: n => Text.isText(n), split: true }
  );
};

export const FormatCode = (event: React.KeyboardEvent, editor: SlateEditor) => {
  const [match] = Helper.nodes(editor, {
    match: n => n.type === "code"
  });

  Transforms.setNodes(
    editor,
    { type: match ? "paragraph" : "code" },
    { match: n => Helper.isBlock(editor, n) }
  );
};
