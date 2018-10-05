import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

import { loadState, saveState } from './localStorage';

const persistesState = loadState();


const store = createStore(reducer, persistesState);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render((
    <Provider store={store}>
            <App />
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();

