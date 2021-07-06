import './styles/main.scss'
import faviconBulma from './assets/img/faviconBulma.png'

import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

import Aside from './components/Aside'
import Main from './components/Main'

function App() {
	const location = useLocation()
	const link0 = useRef(null)

	// useEffect(() => {
	// 	// $$.ocL(link0.current, 'active', 'add')
	// }, [])

	// const currentStyle = {} // { color: 'Red' }
	return (
		<>
			<nav
				className="navbar is-primary has-text-grey-light has-text-weight-medium is-radiusless"
				role="navigation"
				aria-label="Main navigation"
				id="nav"
			>
				<div className="container">
					<div className="navbar-brand">
						<a href="index.html" className="navbar-item mr-5" title="Top page">
							BulmaProject
						</a>
						<div id="burger" className="navbar-burger" data-target="navbarMenu">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>

					<div
						className="navbar-menu is-primary is-pulled-right mr-2"
						id="nav-links"
					>
						<div className="navbar-start navbar-item">
							<a
								href="https://bulma.io/documentation/"
								target="_blank"
								rel="noopener noreferrer"
								className="button navbar-item is-primary is-fullwidth mt-1"
							>
								<span className="icon">
									{/* // src="./assets/img/bulma32.ico" */}
									<img src={faviconBulma} title="Bulma home!" alt="bulma" />
								</span>
								<span>Bulma</span>
							</a>
						</div>

						<div className="navbar-end has-text-dark px-4">
							<a href="./src/sub/js/js.html" className="navbar-item">
								Javascript
							</a>
							<a href="./src/sub/react/react.html" className="navbar-item">
								React
							</a>
							<a href="./src/sub/flex/flex.html" className="navbar-item">
								FLEXBOX
							</a>
						</div>
					</div>
				</div>
			</nav>

			<div className="is-flex mt-0">
				<Aside />
				<Main />
			</div>
		</>
	)
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	$$.Id('root')
)

if (module.hot) {
	module.hot.accept()
}
