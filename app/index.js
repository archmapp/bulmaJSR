import './styles/index.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom'

import App from './App';

// https://wanago.io/2021/04/19/hashrouter-browserrouter-react/
// Hash router vs Browser router
// webpackの設定に関係ありか？
ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	$$.Id('root')
)
