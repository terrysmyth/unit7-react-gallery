import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './context/';
import './css/index.css';

import App from './components/App';

ReactDOM.render(
	// USing  Provider over entire app to share state easily
	<Provider>
    	<App />
    </Provider>,
  document.getElementById('root')
);

