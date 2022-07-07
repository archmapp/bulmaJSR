import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Aside from './Aside'

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
import Nreact2 from './N/Nreact2'
import About from './N/About'

// React
import Rform from './R/Rform'
import Eform from './R/Eform'
import Sform from './R/Sform'

// Hooks
import Memo from './H/Memo'
import UseMemo from './H/UseMemo'
import Callback_memo from './H/Callback_memo'
import CUseMemo from './H/CUseMemo'

function Main() {
	return (
		<>
			<main className="main">
				<div className="container">
					<div className="columns is-centered is-mobile is-gapless is-vcentered">
						<div className="column is-2 has-background-primary-light">
							<Aside />
						</div>
						<div className="column is-10 is-size-6 pt-0">
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
								{/* <Route path="/Nreact2" component={Nreact2} /> */}
								<Route path="/About" component={About} />

								<Route path="/Rform" component={Rform} />
								<Route path="/Eform" component={Eform} />
								<Route path="/Sform" component={Sform} />

								<Route path="/Memo" component={Memo} />
								<Route path="/UseMemo" component={UseMemo} />
								<Route path="/Callback_memo" component={Callback_memo} />
								<Route path="/CUseMemo" component={CUseMemo} />

								<Route component={Top} className="" />
							</Switch>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main
