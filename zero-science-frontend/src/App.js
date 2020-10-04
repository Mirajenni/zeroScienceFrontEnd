import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Link to="/mundo">click aqui para ir pra /mundo</Link>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p2>o começo de tudo carai....</p2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
