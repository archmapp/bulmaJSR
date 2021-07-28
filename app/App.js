import React, { useEffect } from 'react'

import Nav from './components/Nav'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {

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
