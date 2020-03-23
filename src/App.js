import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const APP_ID = 'a0c6a7e5';
    const APP_KEY = 'f31fa5c1d11aeca6903ac6564af282e6';

    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
