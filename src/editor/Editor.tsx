import React, { useState, useMemo, useCallback } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Node } from "slate";
import { renderElement } from "../elements";
import { renderLeaf } from "../elements/Leaf";
import KeyHandler from "./KeyHandler";

interface IEditorProps {
  initialValue?: Node[];
}

const Editor = (props: IEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>(props.initialValue || []);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable
        renderElement={useCallback(renderElement, [])}
        renderLeaf={useCallback(renderLeaf, [])}
        onKeyDown={KeyHandler(editor)}
      />
    </Slate>
  );
};

export default Editor;
