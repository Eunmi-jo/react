import React from ‘react‘;

function App() {
  const name = ‘뤼왝트‘;
  return <div>{name === ‘리액트‘ && <h1>리액트입니다.</h1>}</div>;
}
//AND연산자(&&)를 이용하여 레더링하기.
export default App;