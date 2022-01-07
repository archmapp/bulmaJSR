import React from 'react'
import { NavLink } from 'react-router-dom'

function Aside() {
	const aStyle = { color: 'Blue', fontWeight: 'bold' }

	const pageLoading = () => {
		$$.qcL_T('#selAside', 500)
	}

	return (
		<>
			<aside id="aside1" className="sidebar-left">
				<article className="panel is-info pb-2">
					<p
						className="panel-heading has-text-centered has-background-info-dark is-size-6"
						style={{ borderBottom: 'solid 1px' }}
					>
						メニュー
					</p>

					<nav className="is-flex is-flex-direction-column has-text-white mb-4">
						<NavLink
							exact
							to="/"
							className="pt-1 py-2 ml-3"
							activeStyle={aStyle}
						>
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
						<NavLink
							to="/Elements"
							className="pt-1 ml-3"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Elements
						</NavLink>
						<NavLink
							to="/Components"
							className="pt-1 ml-3"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Components
						</NavLink>
						<NavLink
							to="/Form"
							className="pt-1 ml-3"
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Form
						</NavLink>
						<NavLink
							to="/Layout"
							className="pt-1 ml-3"
							activeStyle={aStyle}
							onClick={pageLoading}
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
							className="mt-2 mb-0 mx-3 pl-1"
							// style={{ backgroundColor: '#a4c0e2' }}
							activeStyle={aStyle}
							onClick={pageLoading}
						>
							Extensions
						</NavLink>
						{/* bulma-pageloader/ in bulma-extensions.min.css */}
						<div
							id="selAside"
							className="pageloader is-info is-left-to-right"
							style={{ opacity: 0.3 }}
						>
							<span className="title has-text-black has-text-weight-bold is-size-5">
								ナビゲーティング ...
							</span>
						</div>
					</nav>

					<hr
						style={{
							width: '90%',
							backgroundColor: 'grey',
							margin: 'auto',
							marginTop: '0px',
							height: '1px',
						}}
					/>
					<div style={{ textAlign: 'center' }} className="my-2">
						<NavLink
							to="/About"
							className="navbar-item has-text-black-bis mx-3 py-1 has-tooltip-right has-tooltip-warning"
							data-tooltip="情報・サンプル集"
							onClick={pageLoading}
						>
							About&nbsp;
						</NavLink>
					</div>
					<div style={{ textAlign: 'center' }} className="my-2">
						<button
							className="button is-info is-outlined has-tooltip-right has-tooltip-warning"
							data-tooltip="活動・紹介へ"
							onClick={() => window.open("https://archmapp.github.io/about2/")}
						>
							About2
						</button>
					</div>
				</article>
			</aside>
		</>
	)
}

export default Aside
