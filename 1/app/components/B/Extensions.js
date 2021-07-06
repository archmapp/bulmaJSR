const bulmaToast = require('../../js/bulma-toast.min.js')
import png from '../../assets/img/FLEXBOX練習帳800x400.png'

import React, { useState, useEffect, useRef } from 'react'

function Extensions() {
  const exTop = useRef(null)

  const scrollToTop = () =>
    $$.Id('top').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  // exTop.current.scrollIntoView({})
  // exTop.current.scrollIntoView({ behavior })
  const [slide, setSlide] = useState(50)

  useEffect(() => {
    let img = new Image()
    img.src = png

    if ($$.Id('img-quickview').children.length === 0)
      $$.Id('img-quickview').appendChild(img)
  }, [])

  const pageLoading = () => {
    $$.qcL_T('#selExtensions', 2000)
  }

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
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-10">
							<div>
								<h1 className="title" ref={exTop}>
									Extensions
								</h1>
								<div className="is-size-5 has-text-weight-medium my-3">
									Badge
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6 is-flex">
										<div className="buttons">
											<nav className="level is-mobile">
												<div className="level-item">
													<button
														className="button is-primary has-badge-primary mr-5 mt-3"
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
												<button
													className="button is-info"
													id="toastTopLeft"
													onClick={() =>
														bulmaToast.toast({
															message: 'Top Left',
															position: 'top-left',
															type: 'is-info',
														})
													}
												>
													左上
												</button>
											</div>
											<div className="level-item">
												<button
													className="button is-success"
													id="toastTopCenter"
													onClick={() =>
														bulmaToast.toast({
															message: 'Top Center',
															position: 'top-center',
															type: 'is-success',
														})
													}
												>
													中央上
												</button>
											</div>
											<div className="level-item">
												<button
													className="button is-warning"
													id="toastTopRight"
													onClick={() =>
														bulmaToast.toast({
															message: 'Top Right',
															position: 'top-right',
															type: 'is-warning',
														})
													}
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
								<div className="is-size-5 has-text-weight-medium my-3">
									PageLoader
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6">
										<h2 className="subtitle has-text-weight-bold">
											当サイトで利用している&nbsp;
											<span className="has-text-info">ページローダー</span>
										</h2>

										<nav className="level is-mobile">
											<div className="level-item">
												<button
													className="button is-info px-5"
													onClick={pageLoading}
												>
													左から
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
													__html={`&lt;button
      className="button is-info px-3"
      onClick={pageLoading}
    >
      左から
    &lt;/button><br /> ...<br />const pageLoading = () => {
    $$.qcL_T('#selExtensions', 2000)
  }<br /> ...<br /><br />/* bulma-pageloader/ in bulma-extensions.min.css */
export const qcL_T = (sel, t = 1000) => {
  q(sel).classList['toggle']('is-active')
  setTimeout(() => q(sel).classList['toggle']('is-active'), t)
}<br />
`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								{/* bulma-pageloader/ in bulma-extensions.min.css */}
								<div
									id="selExtensions"
									className="pageloader is-info is-left-to-right"
									style={{ opacity: 0.5 }}
								>
									<span className="title has-text-black has-text-weight-bold is-size-5">
										ナビゲーティング ...
									</span>
								</div>
								<button
									className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
									onClick={scrollToTop}
								>
									<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Extensions
