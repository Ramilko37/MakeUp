import React from 'react';
import ReactDOM from 'react-dom';
import styled, {createGlobalStyle} from "styled-components";
import './index.css';
import App from './App';




const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
      <>
          <App />
      </>
  </React.StrictMode>,
  document.getElementById('root')
);

