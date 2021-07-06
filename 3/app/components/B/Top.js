const bulmaToast = require('../../js/bulma-toast.min.js')
import png from '../../assets/img/FLEXBOX練習帳800x400.png'
// import bulmaToast from '../../js/bulma-toast.min.js'

import React, { useState, useEffect, useRef } from 'react'

import Hero from '../Hero'

function Top() {
	const [slide, setSlide] = useState(50)

	useEffect(() => {
		let img = new Image()
		img.src = png

		if ($$.Id('img-quickview').children.length === 0)
			$$.Id('img-quickview').appendChild(img)
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
							<div>
								<h1 className="title">Extensions</h1>
								<div className="is-size-5 has-text-weight-medium my-3">
									Badge
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6 is-flex">
										<div className="buttons">
											<nav className="level is-mobile">
												<div className="level-item">
													<button
														className="button is-primary has-badge-primary mr-5"
														data-badge="1"
														onClick={(e) => e.target.dataset.badge++}
													>
														Primary
													</button>
												</div>
												<div className="level-item">
													<button
														className="button is-danger has-badge-danger has-badge-large has-badge-bottom"
														data-badge="15"
														onClick={(e) => e.target.dataset.badge--}
													>
														Danger
													</button>
												</div>
												<div className="level-item">
													<span className="has-text-weight-semibold ml-5">
														⇐　Click me!
													</span>
												</div>
											</nav>
										</div>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`className="button is-primary <b>has-badge-primary</b>"<br /><b>data-badge</b>="1"<br />onClick={(e) => e.target.dataset.<b>badge</b>++}<br /> ...<br /><br />onClick={(e) => e.target.dataset.<b>badge</b>--}
  `}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>{' '}
								<div className="is-size-5 has-text-weight-medium my-3">
									Toast
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6">
										<h2 className="subtitle has-text-weight-bold">
											短いメッセージを指定箇所にポップ
										</h2>
										<div className="ml-3 mb-6">
											<li>
												参考ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/js/toast$$.html"
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													Toastメッセージの表示
												</a>
											</li>
										</div>
										<nav className="level is-mobile">
											<div className="level-item">
												<button className="button is-info" id="toastTopLeft">
													左上
												</button>
											</div>
											<div className="level-item">
												<button
													className="button is-success"
													id="toastTopCenter"
												>
													中央上
												</button>
											</div>
											<div className="level-item">
												<button
													className="button is-warning"
													id="toastTopRight"
												>
													右上
												</button>
											</div>
										</nav>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`const bulmaToast = require('../../js/<b>bulma-toast.min.js</b>')
<br /> ...<br /><br />useEffect(() => {
    // 左上
    $$.oe($$.Id('toastTopLeft'), () => {
      bulmaToast.<b>toast</b>({
        message: 'Top Left',
        position: 'top-left',
        type: 'is-info',
      })
    })
  `}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								<div className="is-size-5 has-text-weight-medium my-3">
									Slider
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6 is-flex">
										<input
											type="range"
											className="slider is-fullwidth is-success is-large  has-badge-large has-badge-success"
											data-badge={slide}
											step="1"
											min="0"
											max="100"
											value={slide}
											onChange={(e) => {
												setSlide(e.target.value)
											}}
										/>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`const [slide, setSlide] = useState(50)<br /> ...<br /><br />&lt;input
  type="range"
  className="slider is-fullwidth is-success is-large  <b>has-badge-large has-badge-success</b>"
  <b>data-badge</b>={slide}
  step="1"
  min="0"
  max="100"
  value={slide}
  onChange={(e) => {
    setSlide(e.target.value)
  }}
/>
  `}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								<div className="is-size-5 has-text-weight-medium my-3">
									Quickview
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6">
										<h2 className="subtitle has-text-weight-bold">
											Quickviewを使ってメッセージを表示
										</h2>
										<div className="ml-3 mb-6">
											<li>
												参考ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/js/quickview$$.html"
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													quickview 表示
												</a>
											</li>
											<li className="mt-6">
												参考ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/flex/Diagram.html"
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													<span className="has-text-weight-medium has-text-warning-dark">
														<strong>FLEXBOX 練習帳</strong>
													</span>
												</a>
												<h2 className="subtitle has-text-weight-bold has-text-grey mt-4">
													サンプル画像
												</h2>
												<div id="img-quickview"></div>
											</li>
										</div>
									</div>
								</article>
								<div className="is-size-5 has-text-weight-medium my-3">
									Calendar
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6">
										<h2 className="subtitle has-text-weight-bold">
											工期の計算 カレンダー
										</h2>
										<div className="ml-3 mb-6">
											<li className="mt-6">
												参考ページ：
												<a
													href="https://archmapp.github.io/iarch-kouki/"
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													<span className="has-text-weight-medium has-text-warning-dark">
														<strong>カレンダーの利用</strong>
													</span>
												</a>
											</li>
											<li className="mt-6">
												githubページ：
												<a
													href="https://github.com/archmapp/iarch-kouki.git"
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													<span className="has-text-weight-medium has-text-warning-dark">
														<strong>カレンダーの利用 github</strong>
													</span>
												</a>
											</li>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Top
