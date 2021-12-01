import './styles/index.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'

import App from './App';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	$$.Id('root')
)
