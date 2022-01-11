import React from 'react';
import './index.css';

export default (props) => {
  return (
    <div id="main">
      <div id="main-header">{props.eHeader}</div>
      {props.children}
    </div>
  );
};
