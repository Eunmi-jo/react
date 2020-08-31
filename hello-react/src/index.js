import React from 'react';
import ReactDOM from 'react-dom';       //ReactDOM : 컴포넌트를 페이지에 렌더링하는 역할.
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(                      //React.StrictMode : 리액트 프로젝트에서 리액트의 레거시 기능들을 사용하지 못하게 하는 기능.
  <React.StrictMode>                     
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
