import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);

import rootReducer from '../redux/reducers/index';
import Index from './components/Index';

const App = () => (
	<Provider store={store}>
		<Index/>
	</Provider>
);

const wrapper = document.getElementById('react-app');
wrapper ? ReactDOM.render(<App />, wrapper) : null;