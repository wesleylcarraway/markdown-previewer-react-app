import React from 'react';
import './Previewer.css';

export default (props) => {
  const marked = require('marked');

  marked.use({
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  return (
    <div id="wrapper">
      <div id="preview-header">{props.pHeader}</div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.display) }}
      ></div>
    </div>
  );
};
