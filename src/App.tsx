import React from "react";
import Editor from "./editor/Editor";
import MainContainer from "./clarity/MainContainer";
import ContentContainer from "./clarity/ContentContainer";
import Card from "./clarity/Card";

const App = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text." }]
    }
  ];
  const title = "Collaborate";

  return (
    <MainContainer>
      <ContentContainer>
        <Card>
          <Editor initialValue={initialValue} />
        </Card>
      </ContentContainer>
    </MainContainer>
  );
};

export default App;
