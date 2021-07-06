import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import Nav from './components/Nav'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {
	const location = useLocation()
	const link0 = useRef(null)

	useEffect(() => {
	}, [])

	return (
		<>
			<Nav />

			<div className="is-flex mt-0">
				<Aside />
				<Main />
			</div>
		</>
	)
}

export default App
