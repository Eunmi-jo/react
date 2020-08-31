import React from 'react';
 
function App() {
  const name = '뤼왝트';
  return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;        
}         //null을 레더링하면 아무것도 보여 주지 않음.
 
export default App;