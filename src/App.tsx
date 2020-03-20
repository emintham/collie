import React from "react";
import Editor from "./editor/Editor";
import MainContainer from "./clarity/MainContainer";
import ContentContainer from "./clarity/ContentContainer";

const App = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text. ABC" }]
    }
  ];

  return (
    <MainContainer>
      <ContentContainer>
        <Editor initialValue={initialValue} />
      </ContentContainer>
    </MainContainer>
  );
};

export default App;
