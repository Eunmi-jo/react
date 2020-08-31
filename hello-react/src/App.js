import React from 'react';        //js값을 jsx 안에 레더링 한 경우.
 
function App() {
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}
 
export default App;