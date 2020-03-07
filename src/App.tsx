import React, { useState, useMemo } from "react";
import "./App.css";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Node } from "slate";

const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>([
    {
      type: "paragraph",
      children: [{ text: "A line of text." }]
    }
  ]);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable />
    </Slate>
  );
};

export default App;
