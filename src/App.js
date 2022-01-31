import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';


async function GetUserID() {

  var state = "s";

  const options = {
    url : "http://127.0.0.1:7000/msg",
    method : "GET",
  }

  const res = await axios(options);
  
  return res.data.user_id;
  
}

function App({ callback }) {

  callback();
  
  const user_id = useSelector( (state) => state );
  const dispatch = useDispatch();
  const [name, SetName] = useState("미입력")
  

  return (
    
    <div className="App">
      <p>사용자명 : {name}</p>
      <button onClick={async () => { 
        const res = await GetUserID();
        SetName(res);

        //dispatch({type: 'GET'}); 
      } }>
          
          Get Server Data</button>

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
