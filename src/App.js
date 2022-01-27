import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';


function App({ callback }) {

  callback();
  
  const number = useSelector( (state) => state );


  const dispatch = useDispatch();
  console.log(number)

  return (
    
    <div className="App">
      <p>현재 숫자 : {number}</p>
      <button onClick={() => dispatch({type: 'inc'})}>INC</button>
      <button onClick={() => dispatch({type: 'dec'})}>DEC</button>

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
