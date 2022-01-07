import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
		<>
			<div className="hero is-primary is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							<Link to="/">
								<small className="is-size-4">第二版</small>
								・Bulmaと共に！
							</Link>
						</h1>
						<h2 className="subtitle is-size-4 has-text-centered mt-2">
							javascriptを試してみよう。
						</h2>
						<h2 className="subtitle is-6 has-text-centered mt-2">
							~~ Bulmaホームページの流れに沿って ~~
						</h2>
						<h3 className="subtitle has-text-white is-5">
							using [ Bulma & React ]　ver.2
						</h3>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
