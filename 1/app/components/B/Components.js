import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const contents = [
	`1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	`2. Ut tristique dolor a turpis laoreet posuere.`,
	`3. Lorem Lorem Lorem Lorem Lorem Lorem Lorem`,
]

function Components() {
	const [n, setN] = useState(0)
	let m

	const scrollToTop = () =>
		$$.Id('top').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})

	useEffect(() => {
		$$.bulmaMenu2('#burger2', '#nav-links2')
	}, [])

	useEffect(() => {
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

	const cardF = (n, e) => {
		console.log(e)
		$$.q('.card-content').innerHTML = contents[n]
		return
	}

	function creM(__html) {
		return {
			__html: __html,
		}
	}

	function CC({ __html }) {
		return <div dangerouslySetInnerHTML={creM(__html)} />
	}

	return (
		<>
			<section className="section">
				{console.log('return')}
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[Components]</div>
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
												<button
													className="button card-footer-item"
													onClick={(e) => cardF(0, e)}
												>
													調査
												</button>
												<button
													className="button card-footer-item"
													onClick={(e) => cardF(1, e)}
												>
													経過
												</button>
												<button
													className="button card-footer-item"
													onClick={(e) => cardF(2, e)}
												>
													報告
												</button>
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
  href="#!"
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
									<li className="ml-6">
										参考URL：
										<a
											href="https://archmapp2.github.io/bulmaJS/src/sub/js/dropdown$$.html"
											className="has-tooltip-top has-tooltip-warning has-text-grey"
											data-tooltip="[CTRL]キーを押しながら、クリック"
										>
											https://../bulmaJS/../dropdown$$.html
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
													<span>ドロップアップ</span>
													<span className="icon is-small">
														<i
															className="fa fa-angle-up"
															aria-hidden="true"
														></i>
													</span>
												</button>
											</div>

											<div className="dropdown-menu dd2m" role="menu">
												<div className="dropdown-content">
													<a href="#" className="dropdown-item" data-item="1">
														1.Design a custom database
													</a>

													<a href="#" className="dropdown-item" data-item="2">
														2.Take pictures of flowers
													</a>

													<a href="#" className="dropdown-item" data-item="3">
														3.Ride to a horse and write
													</a>

													<a href="#" className="dropdown-item" data-item="4">
														4.Go for a trip with bike
													</a>

													<a href="#" className="dropdown-item" data-item="5">
														5.Design a custom data
													</a>

													<a href="#" className="dropdown-item" data-item="6">
														6.Buy a sumsung headset
													</a>

													<a href="#" className="dropdown-item" data-item="7">
														7.Listen music for one hour
													</a>

													<a href="#" className="dropdown-item" data-item="8">
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
											<button className="delete" aria-label="Delete"></button>
										</div>
										<div className="message-body">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Pellentesque risus mi, tempus quis placerat ut, porta
												nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
												Nullam gravida purus diam, et dictum felis venenatis
												efficitur.
											</p>
										</div>
									</div>
									<div className="message is-info my-5">
										<div className="message-header">
											<p>Message header</p>
											<button className="delete" aria-label="Delete"></button>
										</div>
										<div className="message-body">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Pellentesque risus mi, tempus quis placerat ut, porta
												nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
												Nullam gravida purus diam, et dictum felis venenatis
												efficitur.
											</p>
										</div>
									</div>
									<div className="message is-warning my-5">
										<div className="message-header">
											<p>Message header</p>
											<button className="delete" aria-label="Delete"></button>
										</div>
										<div className="message-body">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Pellentesque risus mi, tempus quis placerat ut, porta
												nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
												Nullam gravida purus diam, et dictum felis venenatis
												efficitur.
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
													className="has-tooltip-top has-tooltip-warning has-text-grey"
													data-tooltip="[CTRL]キーを押しながら、クリック"
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
											onClick={() => $$.qcL('.modal', 'is-active', 'remove')}
										>
											{/* <div className="modal is-active"> */}
											<div className="modal-background"></div>
											<div className="modal-content">
												<div className="box">Hello</div>
											</div>
											<button
												className="modal-close is-large"
												onClick={() => $$.qcL('.modal', 'is-active', 'remove')}
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
							className="navbar is-primary has-text-grey-light has-text-weight-medium is-size-6 has-shadow is-radiusless pb-2 pl-5"
							role="navigation"
							aria-label="Main navigation"
							id="nav"
						>
							<div className="container">
								<div className="navbar-brand">
									<a
										href="#!"
										className="navbar-item mr-5 mt-2"
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
									className="navbar-menu is-primary is-pulled-right mr-2 mt-1"
									id="nav-links2"
								>
									<div className="navbar-end has-text-dark px-4">
										<a to="#!" className="navbar-item">
											Javascript
										</a>
										<a to="#!" className="navbar-item">
											Electron
										</a>
										<a to="#!" className="navbar-item">
											Angular
										</a>
										<a to="#!" className="navbar-item">
											React
										</a>
									</div>
								</div>
							</div>
						</nav>
						<article className="message is-primary my-3 py-5 pl-3" id="b-r">
							<div className="columns">
								<div className="column is-8 content">
									<h2 className="is-size-4 has-text-weight-bold ml-5">
										ハンバーガーメニューの操作
									</h2>
								</div>
							</div>

							<div className="box mr-3 pr-2 mt-1">
								<div className="ml-3 my-5">
									<li>
										実装ページ：
										<a
											href="https://archmapp2.github.io/bulmaJS/"
											className="has-tooltip-top has-tooltip-warning has-text-grey"
											data-tooltip="[CTRL]キーを押しながら、クリック"
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
  }, [])<br /> ...<br />export const bulmaMenu2 = (ss, ssT) => {
  // $$de( () => {... この中で使う } )
  qecL(ss, ssT)
  qe('body', (e) => {
    // bodyをクリックしてメニューを消す
    e.stopPropagation()
    if (q(ss).classList.contains('is-active')) {
      qcL(ss)
      qcL(ssT)
    }
  })
}

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
										<h2 className="subtitle has-text-weight-bold has-text-grey mt-1">
											Panel の利用
										</h2>
										<div className="has-text-weight-bold mb-2">
											実装ページ：
										</div>
										<ul
											className="has-tooltip-top has-tooltip-warning mb-2"
											data-tooltip="[CTRL]キーを押しながら、クリック"
										>
											<li className="ml-3 mb-1">
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/Wonder$$.html"
													className="has-text-grey"
												>
													素敵な人々
												</a>
											</li>

											<li className="ml-3 mb-1">
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/info/info$$.html"
													className="has-text-grey"
												>
													素敵な人々とWebサイト
												</a>
											</li>
											<li className="ml-3 mb-1">
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/each_lookup$$.html"
													className="has-text-grey"
												>
													[Handlebars] Table
												</a>
											</li>
											<li className="ml-3 mb-1">
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/Helpers$$.html"
													className="has-text-grey"
												>
													[Handlebars] 'media'によるリスト表示
												</a>
											</li>
											<li className="ml-3 mb-1">
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/partials$$.html"
													className="has-text-grey"
												>
													[Handlebars] ランディングぺージ
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</article>
						Tabs
						<article className="message is-primary my-3 py-5 pl-3" id="b-r">
							<div className="columns is-centered">
								<div className="column is-6 content">
									<div className="block">
										<h2 className="subtitle has-text-weight-bold">
											Tabs の利用
										</h2>
									</div>
									<div className="has-text-weight-bold mb-2">実装ページ：</div>

									<ul
										className="has-tooltip-top has-tooltip-warning mb-2"
										data-tooltip="[CTRL]キーを押しながら、クリック"
									>
										<li>
											<a
												href="https://archmapp2.github.io/bulmaJS/src/sub/js/tabs$$.html"
												className="has-text-grey mt-1"
											>
												タブメニューで画面の切換え
											</a>
										</li>

										<li>
											<a
												href="https://archmapp2.github.io/bulmaJS/src/sub/flex/Diagram.html"
												className="has-text-grey mt-1"
											>
												FLEXBOX 練習帳
											</a>
										</li>

										<li>
											<a
												href="https://archmapp2.github.io/bulmaJS/src/sub/hbs/partials$$.html"
												className="has-text-grey mt-1"
											>
												[Handlebars] ランディングぺージ
											</a>
										</li>
									</ul>
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
    $$bulmaTabs('.tabsX li', '#tab-content > div');
  }, [])`}
										></CC>
										・・・・・
									</pre>
								</blockquote>
							</div>
						</article>
						<button
							className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
							onClick={scrollToTop}
						>
							<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Components
Components
