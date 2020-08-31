import React from 'react';      //OR연산자 사용.
import './App.css';

function App() {
const name = undefined;
return name || '값이 undefined입니다.';
}

export default App;