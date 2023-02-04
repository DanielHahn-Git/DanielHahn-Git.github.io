"use strict";

//import CodeMirror from "@uiw/codemirror";
import CodeEditor from "@uiw/react-textarea-code-editor";
//import MarkdownPreview from "@uiw/react-markdown-preview";
//import MarkdownEditor from '@uiw/react-markdown-editor';
const { useState } = React;
const { marked } = marked;

marked.setOptions({
  breaks: true
});
//import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
//import { languages } from "@codemirror/language";
//import { javascript } from '@codemirror/lang-javascript';
//import CodeEditor, { SelectionText } from "@uiw/react-textarea-code-editor";
//extensions={[markdown({ base: markdownLanguage })]}

 /*var editor = CodeMirror.fromTextArea(document.getElementById("txt"), {
   styleActiveLine: true,
   lineNumbers: true,
   matchBrackets: true
 });
*/

function App() {
  const [code, setCode] = useState("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n");
  console.log(" render app");
  return (
    <div className="app">
      {/*<Editor code={code} setCode={setCode} />*/} 
      {/* <MarkEditor code={code} setCode={setCode} /> */}
      <Editor code={code} setCode={setCode} />
      <PrevHTML code={code} />
      {/*  <SimpleTxtArea code={code} setCode={setCode} /> */}
      {/* <MarkdownPreview source={code} /> */}
    </div>
  );
}



/* ----------------------------------- */



/* ----------------------------------- */


function Editor({ code, setCode }) {
  /*   function handleChange(e) {
    console.log(e.target.value + '  Editor');
    setCode(e.target.value);
  }
  */
  return (
    <CodeEditor
    id="editor"
    value={code}
    onChange={(e) => {
      setCode(e.target.value),
      console.log(e.target.value + "  Editor");
    }}
    language="md"
    placeholder="Please enter markdown code."
    style={{
      fontSize: 15,
      fontFamily:
      "ui-monospace,SFMono-Regular,SF Mono,Liberation Mono,monospace",
    }}
    />
  );
}



/* ----------------------------------- */


/* ----------------------------------- */

function PrevHTML({ code }) {
  const parse = () => {
    let par = marked(code);
    console.log(par);
    return { __html: par };
  };
  console.log("render prev");
  return (
      <div id="preview" className="prev" dangerouslySetInnerHTML={parse()} />
  );
}


/* ----------------------------------- */


/* ----------------------------------- */


const element = <App />;
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(element);
