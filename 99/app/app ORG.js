import './styles/main.scss'
import faviconBulma from './assets/img/faviconBulma.png'

import SlideRoutes from 'react-slide-routes'
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	useLocation,
} from 'react-router-dom'

import Main from './components/Main'
import About from './components/About'

function App() {
	const location = useLocation()
	const link0 = useRef(null)
	const test = useRef(null)

	useEffect(() => {
		$$.ocL(link0.current, 'active', 'add')
		// console.log('🚀 ~ file: app.js ~ line 20 ~ App ~ test', test.current)
		// $$.ocL(test.current, 'test', 'add')
		// $$.qcL('#slide-main', 'test2', 'add')
	}, [])

	// const currentStyle = {} // { color: 'Red' }
	return (
		<>
			<nav
				className="navbar is-primary has-text-grey-light has-text-weight-medium has-shadow"
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
							<a href="./src/sub/hbs/hbs.html" className="navbar-item">
								Handlebars
							</a>
							<a href="./src/sub/tron/tron.html" className="navbar-item">
								Electron
							</a>
							<a href="./src/sub/ang/ang.html" className="navbar-item">
								Angular
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

			<section className="section pt-0">
				<div className="container">
					<div className="columns">
						<div className="column"></div>
						<div className="column is-size-6 is-8">
							<div className="hero is-primary is-bold">
								<div className="hero-body">
									<div className="container">
										<h1 className="title">
											<Link to="/">第二版・Bulmaと共に！</Link>
										</h1>
										<h2 className="subtitle is-size-4 has-text-centered mt-2">
											javascriptを試してみよう。
										</h2>
										<h2 className="subtitle is-6 has-text-centered mt-2">
											~~ Bulmaホームページの流れに沿って ~~
										</h2>
										<h3 className="subtitle has-text-white is-5">
											using Bulma & React
										</h3>
									</div>
								</div>
							</div>
							<nav className="mt-2 mx-6 px-2 pt-1">
								<NavLink to="/" exact ref={link0}>
									たし算・ひき算・かけ算
								</NavLink>
								<NavLink to="/about">お知らせ</NavLink>
							</nav>{' '}
							<SlideRoutes location={location} duration={500} className="mb-1">
								<Route
									path="/"
									exact
									component={Main}
									className="active mt-1"
								/>

								<Route path="/about" component={About} />
								<Route component={Main} />
							</SlideRoutes>
						</div>

						<div className="column"></div>
					</div>
				</div>
			</section>
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
