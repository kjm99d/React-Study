import * as ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App callback={() => {
  console.log("React Started !");
}} />);

