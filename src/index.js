import * as ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

const user_id = "미로그인";
function reducer(state = user_id, action ) {

if (action.type === 'GET') {
  user_id = state;
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