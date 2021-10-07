import React, { useState } from 'react';
import './App.css';
import Editor from './Components/Editor';
import Previewer from './Components/Previewer';
import ChangeCss from './ChangeCss';

export default (props) => {
  const [textareaInput, setTextareaInput] = useState(
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
  );

  const [editorBtnState, setEditorBtnState] = useState(true);
  const [previewerBtnState, setPreviewerBtnState] = useState(true);

  const handleEditorMax = (event) => {
    event.preventDefault();
    setPreviewerBtnState(!previewerBtnState);
    if (!previewerBtnState === false) {
      ChangeCss.changeEditorCss();
    } else {
      ChangeCss.keepEditorCss();
    }
  };

  const handlePreviewerMax = (event) => {
    event.preventDefault();
    setEditorBtnState(!editorBtnState);
    if (!editorBtnState === false) {
      ChangeCss.changePreviewerCss();
    } else {
      ChangeCss.keepPreviewerCss();
    }
  };

  const editorHeader = (
    <>
      <div id="title">Editor</div>
      <div onClick={handleEditorMax} id="editor-maxmize">
        ❐
      </div>
    </>
  );

  const previewerHeader = (
    <>
      <div id="title">Previewer</div>
      <div onClick={handlePreviewerMax} id="preview-maxmize">
        ❐
      </div>
    </>
  );

  const handleTextarea = (event) => {
    setTextareaInput(event.target.value);
  };

  return (
    <>
      {editorBtnState && (
        <Editor eHeader={editorHeader}>
          <textarea
            id="editor"
            onChange={handleTextarea}
            name="editor"
            value={textareaInput}
          ></textarea>
        </Editor>
      )}

      {previewerBtnState && (
        <Previewer
          display={textareaInput}
          pHeader={previewerHeader}
        ></Previewer>
      )}
    </>
  );
};
