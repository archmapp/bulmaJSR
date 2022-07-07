import React, { useEffect } from 'react'

import Nav from './components/Nav'
import Main from './components/Main'

import { Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products'
import MainHeader from './components2/MainHeader'

function App() {
	useEffect(() => {}, [])

	return (
		<>
			<Nav />

			<div>
				<MainHeader />
				<main>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products">
						<Products />
					</Route>
				</main>
			</div>
			<Main />
		</>
	)
}

export default App
