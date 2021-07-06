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
import Extensions from './B/Helpers'

function Aside() {
	const aStyle = { color: 'Blue', fontWeight: 'bold' }

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

					<nav className="is-flex is-flex-direction-column has-text-white mb-4">
						<NavLink exact to="/" className="pt-1 ml-3" activeStyle={aStyle}>
							トップ
						</NavLink>
						{/* <NavLink to="/Overview" className=" pt-1 ml-3" activeStyle={aStyle}>
							Overview
						</NavLink> */}
						{/* <NavLink
							to="/Customize"
							className=" pt-1 ml-3"
							activeStyle={aStyle}
						>
							Customize
						</NavLink>
						<NavLink
							to="/Concepts"
							className="pt-1 ml-3"
							activeStyle={aStyle}
						>
							Concepts
						</NavLink>
						<NavLink
							to="/Variables"
							className="pt-1 ml-3"
							activeStyle={aStyle}
						>
							Variables
						</NavLink>
						<NavLink
							to="/Columns"
							className="pt-1 ml-3"
							activeStyle={aStyle}
						>
							Columns
						</NavLink> */}
						<NavLink to="/Elements" className="pt-1 ml-3" activeStyle={aStyle}>
							Elements
						</NavLink>
						<NavLink
							to="/Components"
							className="pt-1 ml-3"
							activeStyle={aStyle}
						>
							Components
						</NavLink>
						<NavLink to="/Form" className="pt-1 ml-3" activeStyle={aStyle}>
							Form
						</NavLink>
						<NavLink
							to="/Layout"
							className="pt-1 ml-3"
							activeStyle={aStyle}
						>
							Layout
						</NavLink>

						{/* <NavLink to="/Helpers" className="pt-1 ml-3" activeStyle={aStyle}>
							Helpers
						</NavLink> */}
						{/* <hr
							style={{ width: '80%', backgroundColor: 'white', margin: 'auto' }}
						/> */}
						<NavLink
							to="/Extensions"
							className="mt-2 mx-3 pl-1 has-background-warning-light"
							activeStyle={aStyle}
						>
							Extensions
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
