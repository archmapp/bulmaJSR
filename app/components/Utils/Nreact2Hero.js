import React from 'react'
// import { Link } from 'react-router-dom'

function Nreact2Hero() {
  return (
		<>
			<div className="hero is-primary is-bold">
				<div className="hero-body">
					<div className="container">
						<h1 className="title" style={{ letterSpacing: '0.05rem' }}>
							React<small className="is-size-4">と</small>Bulma
							<small className="is-size-4">で</small>開発環境
							<small className="is-size-4">の</small>構築
						</h1>
						<small className="is-size-6 ml-6">サンプル2：</small>
						<h2 className="subtitle is-size-4 has-text-centered mt-2">
							 <small className="is-size-5">最初から</small>{' '}
							webpack<small className="is-size-5">を利用して環境を構築する</small>
						</h2>
						<h2 className="subtitle is-size-5 has-text-centered mt-2">
							~~ ... を試してみよう。 ~~
						</h2>
						<h2 className="subtitle is-size-5 has-text-dark has-text-centered mt-2">
							~~ 自作の shortJS を$$変数に設定する ~~
						</h2>
						<h3 className="heroBottom subtitle has-text-white is-5">
							using [ Bulma & React ]
						</h3>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nreact2Hero
