import React from "react";
import Editor from "./editor/Editor";

const App = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text." }]
    }
  ];
  return <Editor initialValue={initialValue} />;
};

export default App;
