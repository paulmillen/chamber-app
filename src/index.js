import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

import Index from './containers/Index';

import './index.css';

const rootElement = document.getElementById('root');

const rootComponents = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Index />
			</div>
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(rootComponents, rootElement);
