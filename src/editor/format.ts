import { Editor as Helper, Transforms, Text } from "slate";
import { SlateEditor } from "../common/slate";

export type FormatterFunc = (editor: SlateEditor) => void;

export const formatBold: FormatterFunc = editor => {
  const [match] = Helper.nodes(editor, {
    match: n => n.bold === true
  });

  Transforms.setNodes(
    editor,
    { bold: !match },
    { match: n => Text.isText(n), split: true }
  );
};

export const formatItalic: FormatterFunc = editor => {
  const [match] = Helper.nodes(editor, {
    match: n => n.italic === true
  });

  Transforms.setNodes(
    editor,
    { italic: !match },
    { match: n => Text.isText(n), split: true }
  );
};

export const formatCode: FormatterFunc = editor => {
  const [match] = Helper.nodes(editor, {
    match: n => n.type === "code"
  });

  Transforms.setNodes(
    editor,
    { type: match ? "paragraph" : "code" },
    { match: n => Helper.isBlock(editor, n) }
  );
};

export const formatContentHeader: FormatterFunc = editor => {
  const [match] = Helper.nodes(editor, {
    match: n => n.type === "h2"
  });

  Transforms.setNodes(editor, { type: match ? "paragraph" : "h2" });
};

export const formatSectionHeader: FormatterFunc = editor => {
  const [match] = Helper.nodes(editor, {
    match: n => n.type === "h3"
  });

  Transforms.setNodes(editor, { type: match ? "paragraph" : "h3" });
};
