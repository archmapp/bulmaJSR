import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Overview from './B/Overview'
import Customize from './B/Customize'
import Concepts from './B/Concepts'
import Variables from './B/Variables'
import Columns from './B/Columns'
import Elements from './B/Elements'
import Components from './B/Components'
import Form from './B/Form'
import Layout from './B/Layout'
import Helpers from './B/Helpers'

function Aside() {
	const aStyle = { color: 'Red' }

	return (
		<>
			<aside id="aside1" className="sidebar-left">
				<article className="panel is-info pb-2">
					<p
						className="panel-heading has-text-centered has-background-info-dark mb-2"
						style={{ borderBottom: 'solid 1px' }}
					>
						Bulma
					</p>

					<nav className="has-text-grey-lighter is-flex is-flex-direction-column mb-4">
						<NavLink
							to="/"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Top
						</NavLink>
						<NavLink
							to="/Overview"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Overview
						</NavLink>
						<NavLink
							to="/Customize"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Customize
						</NavLink>
						<NavLink
							to="/Concepts"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Concepts
						</NavLink>
						<NavLink
							to="/Variables"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Variables
						</NavLink>
						<NavLink
							to="/Columns"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Columns
						</NavLink>
						<NavLink
							to="/Elements"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Elements
						</NavLink>
						<NavLink
							to="/Components"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Components
						</NavLink>
						<NavLink
							to="/Form"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Form
						</NavLink>
						<NavLink
							to="/Layout"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Layout
						</NavLink>
						<NavLink
							to="/Helpers"
							className="has-text-grey-lighter pt-1 ml-3"
							activeStyle={aStyle}
						>
							Helpers
						</NavLink>
					</nav>

					<hr
						style={{ width: '80%', backgroundColor: 'white', margin: 'auto' }}
					/>
					<div style={{ textAlign: 'center' }} className="my-2">
						<a
							href="https://archmapp2.github.io/bulmaJS/"
							style={{ color: 'rgb(255, 196, 0)' }}
						>
							bulmaJSR
						</a>
						<span className="has-text-white-ter">へ</span>
					</div>
					{/* <hr
						style={{ width: '80%', backgroundColor: 'white', margin: 'auto' }}
					/> */}
				</article>
			</aside>
		</>
	)
}

export default Aside
