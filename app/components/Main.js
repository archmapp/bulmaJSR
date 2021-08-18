import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Top from './B/Top'
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
import Extensions from './B/Extensions'
// Nav
import NshortJS from './N/NshortJS'
import Nreact from './N/Nreact'
import About from './N/About'

// React
import Rform from './R/Rform'

// Hooks
import Memo from './H/Memo'
import UseMemo from './H/UseMemo'
import Callback_memo from './H/Callback_memo'
import CUseMemo from './H/CUseMemo'

function Main() {
	return (
		<>
			<main className="pt-0 is-flex-grow-1">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-size-6 pt-0">
							{/* <SlideRoutes location={location} duration={500} className="mb-1"> */}
							<Switch>
								<Route path="/" exact component={Top} className="active mt-1" />
								<Route path="/Overview" component={Overview} />
								<Route path="/Customize" component={Customize} />
								<Route path="/Concepts" component={Concepts} />
								<Route path="/Variables" component={Variables} />
								<Route path="/Columns" component={Columns} />
								<Route path="/Elements" component={Elements} />
								<Route path="/Components" component={Components} />
								<Route path="/Form" component={Form} />
								<Route path="/Layout" component={Layout} />
								<Route path="/Helpers" component={Helpers} />
								<Route path="/Extensions" component={Extensions} />

								<Route path="/NshortJS" component={NshortJS} />
								<Route path="/Nreact" component={Nreact} />
								<Route path="/About" component={About} />

								<Route path="/Rform" component={Rform} />
								
								<Route path="/Memo" component={Memo} />
								<Route path="/UseMemo" component={UseMemo} />
								<Route path="/Callback_memo" component={Callback_memo} />
								<Route path="/CUseMemo" component={CUseMemo} />
								
								<Route component={Top} className="" />
							</Switch>
							{/* </SlideRoutes> */}
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main
