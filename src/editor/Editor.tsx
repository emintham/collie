import React, { useState, useMemo } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Node } from "slate";

interface IEditorProps {
  initialValue?: Node[];
}

const Editor = (props: IEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>(props.initialValue || []);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default Editor;
