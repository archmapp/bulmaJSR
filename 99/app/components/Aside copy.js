import React from 'react'
import {
	NavLink,
	useLocation,
} from 'react-router-dom'
import Overview from './B/Overview'

function Aside() {
	return (
		<>
			<aside id="aside1" className="sidebar-left">
				<article className="panel is-info">
					<p className="panel-heading has-text-centered mb-2">
						Bulma<span className="is-size-6"></span>
					</p>

					<div
						className="field is-flex is-flex-direction-column has-text-grey-lighter"
						id="rGroupEx"
					>
						<NavLink to="/Overview">Overview</NavLink>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd1_1"
								name="question1"
								value="Overview"
							/>
							<label htmlFor="rd1_1">Overview</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd2"
								name="question1"
								value="Customize"
							/>
							<label htmlFor="rd2">Customize</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd3"
								name="question1"
								value="Concepts"
							/>
							<label htmlFor="rd3">Concepts</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd4"
								name="question1"
								value="Variables"
							/>
							<label htmlFor="rd4">Variables</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd5"
								name="question1"
								value="Columns"
							/>
							<label htmlFor="rd5">Columns</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd6"
								name="question1"
								value="Elements"
							/>
							<label htmlFor="rd6">Elements</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd6"
								name="question1"
								value="Components"
							/>
							<label htmlFor="rd6">Components</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd6"
								name="question1"
								value="Form"
							/>
							<label htmlFor="rd6">Form</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd6"
								name="question1"
								value="Layout"
							/>
							<label htmlFor="rd6">Layout</label>
						</div>
						<div className="py-2 pl-2">
							<input
								type="radio"
								className="is-checkradio"
								id="rd6"
								name="question1"
								value="Helpers"
							/>
							<label htmlFor="rd6">Helpers</label>
						</div>
					</div>

					{/* <hr style="width: 80%; background-color: white; margin: auto" /> */}
					<div style={{ textAlign: 'center' }} className="my-2">
						<a
							href="https://archmapp2.github.io/bulmaJS/"
							style={{ color: 'rgb(255, 196, 0)' }}
						>
							bulmaJSR
						</a>
						<span className="has-text-white-ter">へ</span>
					</div>
					{/* <hr style="width: 80%; background-color: white; margin: auto" /> */}
				</article>
			</aside>
		</>
	)
}

export default Aside
