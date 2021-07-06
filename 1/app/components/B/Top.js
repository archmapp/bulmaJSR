const bulmaToast = require('../../js/bulma-toast.min.js')
import png from '../../assets/img/FLEXBOX練習帳800x400.png'
// import bulmaToast from '../../js/bulma-toast.min.js'

import React, { useState, useEffect, useRef } from 'react'

import Hero from '../Hero'

function Top() {
	const [slide, setSlide] = useState(50)

	useEffect(() => {
  }, [])

	function creM(__html) {
		return {
			__html: __html,
		}
	}

	function CC({ __html }) {
		return <div dangerouslySetInnerHTML={creM(__html)}></div>
	}

	return (
		<>
			<article className="message is-primary pt-6 pb-4" id="b-r">
				<Hero />
				<nav className="my-2 mx-6 px-2 pt-2">
					<li>
						<span className="has-text-primary-dark is-size-5 has-text-weight-semibold">
							初回・Bulmaと共に！
						</span>
						&nbsp;は、
						<a
							href="https://archmapp2.github.io/bulmaJS/"
							className="has-text-primary-dark"
						>
							【こちら】
						</a>
					</li>
				</nav>
				<div className="my-2 mx-6 px-2 pt-3">
					<li>
						お知らせ：　
						<span
							className="iken has-tooltip-top has-tooltip-danger has-text-info is-size-4"
							data-tooltip="予定価格とモデルから、素早く一般工事費を推定するWEBアプリ"
						>
							i入札（建築編）
						</span>
						<a
							href="https://safe-peak-55766.herokuapp.com/"
							className="has-text-grey has-text-weight-semibold"
						>
							【 入札アプリ（建築編）】
						</a>
						は、
						<span className="has-text-weight-semibold has-text-info">移転</span>
						しました。
					</li>
				</div>
				<hr />

				<div className="box notification has-background-white-ter py-1 mx-6">
					<h3 className="subtitle is-size-5">
						<div className="has-text-centered">
							<p>公開日：2021/07/07</p>
						</div>
					</h3>
					<div className="subtitle has-text-centered has-text-primary-dark has-text-weight-semibold">
						完了予定日：2021/11/25
					</div>
				</div>
			</article>

			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-10">
							
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Top
