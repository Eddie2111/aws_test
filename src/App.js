import logo from './logo.svg';
import './App.css';
//import axios from 'axios';

const caller = ()=>{
  const API_KEY = process.env.API_KEY;
  return API_KEY
}

const App = ()=> {
  console.log(caller());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
