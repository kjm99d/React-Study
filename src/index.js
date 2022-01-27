import * as ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

const number = 10;
function reducer(state = number, action ) {

if (action.type === 'inc') {
  state++;
  return state;
} else if (action.type == 'dec') {
  state--;
  return state;
}

return state;

}

const store = createStore(reducer);
console.log(store)

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(
   <Provider store={store}>
    <App callback={() => console.log("renderered")} />
   </Provider>
   );