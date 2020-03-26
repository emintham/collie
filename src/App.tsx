import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentContainer from "./clarity/ContentContainer";
import MainContainer from "./clarity/MainContainer";
import Editor from "./editor/Editor";
import Navbar from "./navbar/Navbar";

const App = () => {
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text. ABC" }]
    }
  ];

  return (
    <Router>
      <MainContainer>
        <Navbar />
        <ContentContainer>
          <Switch>
            <Route path="/editor">
              <Editor initialValue={initialValue} />
            </Route>
          </Switch>
        </ContentContainer>
      </MainContainer>
    </Router>
  );
};

export default App;
