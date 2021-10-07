import React from 'react';
import './Editor.css';

export default (props) => {
  return (
    <div id="main">
      <div id="main-header">{props.eHeader}</div>
      <label for="editor"></label>
      {props.children}
    </div>
  );
};
