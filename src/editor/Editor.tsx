import React, { useState, useMemo, useCallback } from "react";
import { AriaAttributes, DOMAttributes } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor, Node } from "slate";
import { renderElement } from "../elements";
import { renderLeaf } from "../elements/Leaf";
import KeyHandler from "./KeyHandler";
import Card, { CardBlock } from "../clarity/Card";
import Toolbar from "./toolbar/Toolbar";

interface IEditorProps {
  initialValue?: Node[];
}

declare module "react" {
  // Extend React html attributes

  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    size?: string;
  }
}

const Editor = (props: IEditorProps) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>(props.initialValue || []);

  return (
    <Card>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <CardBlock>
          <Toolbar editor={editor} />
          <hr size={"1"} />
          <Editable
            renderElement={useCallback(renderElement, [])}
            renderLeaf={useCallback(renderLeaf, [])}
            onKeyDown={KeyHandler(editor)}
          />
        </CardBlock>
      </Slate>
    </Card>
  );
};

export default Editor;
