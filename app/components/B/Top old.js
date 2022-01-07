// import * as $$. from '../js/shortJS'

import React, { useState, useEffect, useRef } from 'react'

import Hero from '../Hero'
const contents = [
	`1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	`2. Ut tristique dolor a turpis laoreet posuere.`,
	`3. Lorem Lorem Lorem Lorem Lorem Lorem Lorem`,
]

function Top() {
	useEffect(() => {
		$$.bulmaMenu2('#burger2', '#nav-links2')
		// $$.ocL(link0.current, 'active', 'add')
		$$.codeSA('.pre1')

		$$.q('.card-content').innerHTML = contents[0]

		$$.qAe('.dd2m a', (e) => {
			e.preventDefault()
			$$.q('.sel2').innerText = e.target.innerText
		})

		$$.qAll('.message .delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.parentNode.remove()
			})
		})
	}, [])

	const handleLoading = () => {
		$$.qcL('.btn-loading', 'is-loading')
		setTimeout(() => {
			$$.qcL('.btn-loading', 'is-loading')
		}, 1500)
	}

	const handleProgress = () => {
		const el = $$.q('.progress')
		$$.oe(el, () => el.removeAttribute('value'))
		setTimeout(() => el.setAttribute('value', '100'), 4100)
	}

	function CodeComponent() {
		return <div dangerouslySetInnerHTML={createMarkup()} />
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

				<div className="box notification has-background-white-ter py-1">
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
						<div className="column is-8">
							<div>
								<div className="is-size-4 has-text-weight-medium mb-2">
									[Components]
								</div>
								Card
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns is-centered">
										<div className="column is-6 content">
											<div className="block">
												<h2 className="subtitle has-text-weight-bold">
													Card の利用
												</h2>
												<div className="card">
													<header className="card-header">
														<p className="card-header-title">Card タイトル</p>
													</header>
													<div className="card-content">1. Lorem ipsum.</div>
													<footer className="card-footer">
														<a
															href="#0"
															className="card-footer-item"
															onClick={() =>
																($$.q('.card-content').innerHTML = contents[0])
															}
														>
															調査
														</a>
														<a
															href="#0"
															className="card-footer-item"
															onClick={() =>
																($$.q('.card-content').innerHTML = contents[1])
															}
														>
															経過
														</a>
														<a
															href="#0"
															className="card-footer-item"
															onClick={() =>
																($$.q('.card-content').innerHTML = contents[2])
															}
														>
															報告
														</a>
													</footer>
												</div>
											</div>
										</div>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`&lt;a
  href="#0"
  className="card-footer-item"
  onClick={() =>
    ($$.q(
      '<b>.card-content</b>'
    ).innerHTML = contents[0]
  }
>
  調査
&lt;/a>`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								Dropdown
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="block">
										<h2 className="subtitle has-text-weight-bold">
											Dropdown の利用
										</h2>
										<div>
											<li>
												参考URL：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/js/dropdown$$.html"
													className="has-text-grey"
												>
													https://archmapp2.github.io/bulmaJS/src/sub/js/dropdown$$.html
												</a>
											</li>
										</div>
										<div className="columns is-centered">
											<div className="column is-6">
												<div className="notification has-background-success-warning my-4 py-2">
													<strong>is-hoverable, is-up</strong>
												</div>
												<div className="dropdown dd2 is-hoverable is-up">
													<div className="dropdown-trigger">
														<button
															className="button is-primary"
															aria-haspopup="true"
															aria-controls="dropdown-menu"
														>
															<span>Todos2</span>
															<span className="icon is-small">
																<i
																	className="fas fa-angle-down"
																	aria-hidden="true"
																></i>
															</span>
														</button>
													</div>

													<div className="dropdown-menu dd2m" role="menu">
														<div className="dropdown-content">
															<a
																href="#"
																className="dropdown-item"
																data-item="1"
															>
																1.Design a custom database
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="2"
															>
																2.Take pictures of flowers
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="3"
															>
																3.Ride to a horse and write
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="4"
															>
																4.Go for a trip with bike
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="5"
															>
																5.Design a custom data
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="6"
															>
																6.Buy a sumsung headset
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="7"
															>
																7.Listen music for one hour
															</a>

															<a
																href="#"
																className="dropdown-item"
																data-item="8"
															>
																8.Go for a morning walk
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="columns is-mobile is-centered">
											<div className="column is-6">
												<div className="sel2 notification has-background-warning mt-1 py-2">
													ここに表示
												</div>
											</div>
										</div>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`useEffect(() => {
    $$.qAe('.dd2m a', (e) => {
      e.preventDefault()
      $$.q('.sel2').innerText = e.target.innerText
    })
  }, [])`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								Message
								<article className="message is-primary my-5">
									<div className="message-header mt-5">
										<p>messageを一つずつ削除</p>
									</div>

									<div
										className="message-body has-background-white-bis"
										style={{ borderBottom: 'inset 2px #aaaa88' }}
									>
										<div>
											イベントリスナーを設定された削除ボタンを持つ、複数のMessageを一つずつ削除
										</div>
									</div>

									<div className="columns is-centered">
										<div className="column is-8 content">
											<div className="message is-success primary my-5">
												<div className="message-header">
													<p>Message header</p>
													<button
														className="delete"
														aria-label="Delete"
													></button>
												</div>
												<div className="message-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Pellentesque risus mi, tempus quis placerat
														ut, porta nec nulla. Vestibulum rhoncus ac ex sit
														amet fringilla. Nullam gravida purus diam, et dictum
														felis venenatis efficitur.
													</p>
												</div>
											</div>
											<div className="message is-info my-5">
												<div className="message-header">
													<p>Message header</p>
													<button
														className="delete"
														aria-label="Delete"
													></button>
												</div>
												<div className="message-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Pellentesque risus mi, tempus quis placerat
														ut, porta nec nulla. Vestibulum rhoncus ac ex sit
														amet fringilla. Nullam gravida purus diam, et dictum
														felis venenatis efficitur.
													</p>
												</div>
											</div>
											<div className="message is-warning my-5">
												<div className="message-header">
													<p>Message header</p>
													<button
														className="delete"
														aria-label="Delete"
													></button>
												</div>
												<div className="message-body">
													<p>
														Lorem ipsum dolor sit amet, consectetur adipiscing
														elit. Pellentesque risus mi, tempus quis placerat
														ut, porta nec nulla. Vestibulum rhoncus ac ex sit
														amet fringilla. Nullam gravida purus diam, et dictum
														felis venenatis efficitur.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`useEffect(() => {
    $$.qAll('.message .delete').forEach((o) => {
      $$.oe(o, () => {
        o.parentNode.parentNode.remove()
      })
    })
})`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								Modal
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns">
										<div className="column is-2"></div>
										<div className="column is-6">
											<div className="block">
												<h2 className="subtitle has-text-weight-bold">
													Modal の利用
												</h2>
												<div className="ml-3">
													<li>
														参考ページ：
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/js/modalCloud.html"
															className="has-text-grey"
														>
															https://..github.io/bulmaJS/../modalCloud.html
														</a>
													</li>
												</div>
												<button
													className="button is-primary mt-5"
													id="modalBtn"
													onClick={() => $$.qcL('.modal', 'is-active', 'add')}
												>
													モーダルを開く
												</button>
												<div
													className="modal"
													onClick={() =>
														$$.qcL('.modal', 'is-active', 'remove')
													}
												>
													{/* <div className="modal is-active"> */}
													<div className="modal-background"></div>
													<div className="modal-content">
														<div className="box">Hello</div>
													</div>
													<button
														className="modal-close is-large"
														onClick={() =>
															$$.qcL('.modal', 'is-active', 'remove')
														}
														aria-label="close"
													></button>
												</div>
											</div>
										</div>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`onClick={() => $$.qcL('.modal', '<b>is-active</b>', 'add')}<br />onClick={() => $$.qcL('.modal', '<b>is-active</b>', 'remove')}`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								Navbar
								<nav
									className="navbar is-primary has-text-grey-light has-text-weight-medium is-size-6 has-shadow pl-2"
									role="navigation"
									aria-label="Main navigation"
									id="nav"
								>
									<div className="container">
										<div className="navbar-brand">
											<a
												href="#!"
												className="navbar-item mr-5"
												title="Top page"
											>
												BulmaProject
											</a>
											<div
												id="burger2"
												className="navbar-burger"
												data-target="navbarMenu"
											>
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>

										<div
											className="navbar-menu is-primary is-pulled-right mr-2"
											id="nav-links2"
										>
											<div className="navbar-end has-text-dark px-4">
												<a href="#!" className="navbar-item">
													Javascript
												</a>
												<a href="#!" className="navbar-item">
													Electron
												</a>
												<a href="#!" className="navbar-item">
													Angular
												</a>
												<a href="#!" className="navbar-item">
													React
												</a>
												<a href="#!" className="navbar-item">
													FLEXBOX
												</a>
											</div>
										</div>
									</div>
								</nav>
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns is-centered">
										<div className="column is-6 content"></div>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<div className="ml-3 mb-5">
											<li>
												実装ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/"
													className="has-text-grey"
												>
													https://archmapp2.github.io/bulmaJS/
												</a>
											</li>
										</div>
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`useEffect(() => {
    $$.bulmaMenu2('#burger2', '#nav-links2')
  }, [])
`}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>
								Panel
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns">
										<div className="column is-2"></div>
										<div className="column is-6">
											<div className="block">
												<h2 className="subtitle has-text-weight-bold">
													Panel の利用
												</h2>
												<div className="has-text-weight-bold mb-2">
													実装ページ：
												</div>
												<div className="ml-3 mb-1">
													<li>
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/Wonder$$.html"
															className="has-text-grey"
														>
															素敵な人々
														</a>
													</li>
												</div>
												<div className="ml-3 mb-1">
													<li>
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/info/info$$.html"
															className="has-text-grey"
														>
															素敵な人々とWebサイト
														</a>
													</li>
												</div>
												<div className="ml-3">
													<li>
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/each_lookup$$.html"
															className="has-text-grey"
														>
															[Handlebars] Table
														</a>
													</li>
												</div>
												<div className="ml-3">
													<li>
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/Helpers$$.html"
															className="has-text-grey"
														>
															[Handlebars] 'media'によるリスト表示
														</a>
													</li>
												</div>
												<div className="ml-3">
													<li>
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/partials$$.html"
															className="has-text-grey"
														>
															[Handlebars] ランディングぺージ
														</a>
													</li>
												</div>
											</div>
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
