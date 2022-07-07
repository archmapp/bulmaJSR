import React, { useEffect } from 'react'

// import SS1 from '../../utils/SS/SS1'
import contentsCard from './contents/contentsCard'
import DDmenu from './contents/DDmenu'

import Hero from '../utils/NreactHero'
import './Nreact.css'
import Tag from '../../css/bulma-utils/tag'
import TagM from '../../css/bulma-utils/tagM'

import Solar from '../../assets/svg/Solar'

function Nreact() {
	useEffect(() => {
		$$.qAll('.notification .delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.remove()
			})
		})

		$$.qAll('.tag.is-delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.parentNode.remove()
			})
		})

		$$.q('.card-content').innerHTML = contentsCard[0]

		$$.qAe('.dd2m a', (e) => {
			e.preventDefault()
			$$.q('.sel2').innerText = e.target.innerText
		})

		$$.qAll('#message .message .delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.parentNode.remove()
			})
		})

		$$.bulmaMenu('#burger2', '#nav-links2')

		// $$.bulmaMenu('#burger3', '#nav-links3')
	}, [])

	const handleProgress = () => {
		const el = $$.q('.progress')
		el.removeAttribute('value')
		setTimeout(() => el.setAttribute('value', '100'), 4100)
	}

	const cardF = (n, e) => {
		$$.q('.card-content').innerHTML = contentsCard[n]
		return
	}

	return (
		<>
			<article className="message is-primary pt-0 pb-5" id="b-r">
				<Hero />
				<div className="my-2 mx-6 px-2 pt-6">
					<ul>
						<li>
							<div className="is-inline-block mb-3">
								・
								<a href="https://www.archmapp.tech/">
									Webサイト【
									<span className="has-text-primary-dark is-size-5 has-text-weight-semibold">
										<span className="is-size-6">第二版</span>・Bulmaと共に！
									</span>
									】
								</a>
								&nbsp;を構築する過程で学んだ、React・Bulmaでの開発環境のサンプル２つです。
							</div>
						</li>
						<li>
							<div className="is-inline-block my-3">
								・自作の [
								<span className="has-text-primary-dark is-size-5 has-text-weight-semibold">
									shortJs.js
								</span>
								]ライブラリは
								npmに公開するのではなく、各ファイルごとでimportせずにグローバルに使えるようにしてみました。
							</div>
						</li>
						<li>
							<div className="is-inline-block my-3">
								・パッケージは冗長になりますが、将来使う可能性の高いものも加えたままです。
							</div>
						</li>
					</ul>
					<article className="panel is-info mt-6">
						<p className="panel-heading">開発環境１の紹介</p>

						<div className="panel-block is-flex is-flex-direction-column is-justify-content-center">
							<article className="message is-primary mb-0">
								<div className="message-header mt-3 pb-1">
									<p>開発環境１</p>
								</div>
								<div className="message-body has-background-white is-size-6 py-2 px-6">
									<ul style={{ listStyle: 'disc' }}>
										<li className="py-1 has-background-white">
											create-react-app実行後 ejectせず、webpackを使う。
										</li>
										<li className="py-1 has-background-white">
											そのため customize-cra, react-app-rewired をインストール
										</li>
										<li className="py-1 has-background-white">
											"自作の shortJS をグローバル$$変数に設定する"
											件を試してみる。
										</li>
										<li className="py-1 has-background-white">
											create-react-appは手軽に使えるので、今後この方法(customize-cra)で
											<br />
											どこまでカスタマイズできるか、 追求したい。
										</li>
									</ul>
								</div>
							</article>
						</div>
					</article>

					<article className="panel mt-6">
						<p className="panel-heading">github と デモページ</p>

						<div className="panel-block is-flex is-flex-direction-column is-justify-content-center">
							<div className="panel-block is-flex is-flex-direction-column is-justify-content-center">
								<article className="message is-warning mb-0">
									<div className="message-header mt-3 pb-1">
										<p>開発環境１</p>
									</div>
									<div className="message-body has-background-white is-size-6 py-2 px-6">
										<ul style={{ listStyle: 'disc' }}>
											<li className="flexAlign py-1 has-background-white">
												<span>githubページは、こちら：</span>
												<button
													className="button is-primary"
													onClick={() =>
														window.open(
															'https://github.com/archmapp/react_env1.git'
														)
													}
												>
													githubページ
												</button>
											</li>
											<li className="flexAlign py-1 has-background-white">
												<span>デモページが、こちら：　</span>
												<button
													className="button is-primary"
													onClick={() =>
														window.open(
															'https://archmapp.github.io/react_env1/'
														)
													}
												>
													デモ
												</button>
											</li>
										</ul>
									</div>
								</article>
							</div>
						</div>
					</article>
				</div>
			</article>{' '}
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-10 message">
							<b className="is-size-5">一服休憩</b>（MDN canvas）
							<article className="message is-primary my-3 py-5 pl-3" id="b-r">
								<div className="flexCenter">
									<Solar />
								</div>
							</article>
							<div className="message-header has-background-grey px-5 py-3 mb-4 is-size-5 has-text-weight-medium">
								以下は、Bulmaの利用例です。
							</div>
							<b className="is-size-5">button</b>
							<article
								className="notification has-background-primary-light is-primary my-3 py-5 pl-3"
								id="b-r"
							>
								{/* <article className="notification is-primary my-3 py-5 pl-3" id="b-r"> */}
								<div className="flexAlign">
									<button
										className="button is-primary btn-loading has-tooltip-top has-tooltip-warning"
										data-tooltip="className='btn-loading'"
										onClick={() => $$.qcL_T('.btn-loading', 1500, 'is-loading')}
									>
										Click me
									</button>
									<span className="ml-5">1.5秒間：is-loading</span>
								</div>
								<Tag
									hint="ヒント"
									msg=".is-loadingクラスのトグルによる on/off"
									warning="is-danger"
								></Tag>
								{/* <TagM
									hint="ヒント"
									msg=".is-loadingクラスのトグルによる on/off"
									warning="is-danger"
								></TagM> */}
							</article>
							<b className="is-size-5">notification</b>
							<article className="is-primary my-3 pb-4 pl-3" id="b-r">
								<div className="notification has-background-danger-light my-1 py-3">
									<button className="delete"></button>
									Lorem ipsum A
								</div>
								<div className="notification has-background-warning-light mb-1 py-3">
									<button className="delete"></button>
									Lorem ipsum B
								</div>
								<div className="notification has-background-info-light mb-1 py-3">
									<button className="delete"></button>
									Lorem ipsum C
								</div>
								<Tag
									hint="ヒント"
									msg=".deleteクラスのボタンを含む.notification要素の削除"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5">progress</b>
							<article className="message is-primary py-5 pl-3" id="b-r">
								<div className="block mx-6">
									<span className="has-text-weight-semibold ml-5">
										↓　Click me!
									</span>
									<progress
										className="progress is-warning has-tooltip-top has-tooltip-primary"
										data-tooltip="value属性"
										style={{ width: '80%' }}
										onClick={handleProgress}
										value="50"
										max="100"
									>
										100%
									</progress>
								</div>
								<Tag
									hint="ヒント"
									msg="progress要素の value属性の削除と設定(0~100)"
									warning="is-danger"
								></Tag>
							</article>
							field is-grouped &gt; control &gt;
							<b className="is-size-5">tags has-addons</b> &gt; tag is-delete
							<article className="message is-primary py-5 pl-3" id="b-r">
								<div className="field is-grouped is-grouped-multiline mt-3 ml-5">
									<div className="control">
										<div className="tags has-addons">
											<span className="tag is-link">Flexbox</span>
											<span className="tag is-delete"></span>
										</div>
									</div>

									<div className="control mx-3">
										<div className="tags has-addons">
											<span className="tag is-link">Web Design</span>
											<span className="tag is-delete"></span>
										</div>
									</div>

									<div className="control mx-3">
										<div className="tags has-addons">
											<span className="tag is-link">Open Source</span>
											<span className="tag is-delete"></span>
										</div>
									</div>
								</div>
								<Tag
									hint="ヒント"
									msg=".tag.is-deleteクラスの親の親の.control要素を削除"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5">card</b>
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
								<Tag
									hint="ヒント"
									msg=".card-content要素のinnerHTMLを下のボタンに応じて書き換える"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5">dropdown</b>
							<article className="message is-primary my-3 py-5 pl-3" id="b-r">
								<div className="block">
									<div className="columns is-centered">
										<div className="column is-6">
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

												<DDmenu />
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
								<Tag
									hint="ヒント"
									msg="クリックした項目のテキストを取得（e.target.innerText）"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5">message</b>
							<article className="message is-primary my-5">
								<div className="message-header mt-5">
									<p>messageを一つずつ削除</p>
								</div>

								<div className="columns is-centered">
									<div id="message" className="column is-8 pb-0">
										<div className="message is-info mt-5 mb-5">
											<div className="message-header">
												<p>Message header</p>
												<button className="delete" aria-label="Delete"></button>
											</div>
											<div className="message-body">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Pellentesque risus mi, tempus quis placerat ut,
													porta nec nulla.
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
													Vestibulum rhoncus ac ex sit amet fringilla. Nullam
													gravida purus diam, et dictum felis venenatis
													efficitur.
												</p>
											</div>
										</div>

										<div className="message is-primary my-5">
											<div className="message-header">
												<p>Message header</p>
												<button className="delete" aria-label="Delete"></button>
											</div>
											<div className="message-body">
												<p>
													tempus quis placerat ut, porta nec nulla. Vestibulum
													rhoncus ac ex sit amet fringilla. Nullam gravida purus
													diam,
												</p>
											</div>
										</div>
									</div>
								</div>
								<Tag
									hint="ヒント"
									msg="クリックしたis-deleteボタンの親の親の.message要素を削除"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5">modal</b>
							<article
								className="message is-primary mt-3 mb-6 py-5 pl-3"
								id="b-r"
							>
								<div className="columns">
									<div className="column is-2"></div>
									<div className="column is-6">
										<div className="block">
											<h2 className="subtitle has-text-weight-bold mb-2">
												Modal の利用
											</h2>
											<button
												className="button is-primary mt-2"
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
												<div className="modal-background" style={{opacity: .75}}></div>
												{/* <div className="modal-background" style={{backgroundColor: 'rgba(10, 10, 10, 0.2)'}}></div> */}
												<div
													className="modal-content"
													// style={{ zIndex: 10 }}
													onClick={(e) => {
														e.stopPropagation()
													}}
												>
													<div className="box is-size-5 has-text-centered py-6">
														Hello 💕 e.stopPropagation()
													</div>
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
								<Tag
									hint="ヒント"
									msg=".modalモーダル画面のクラス.is-activeの トグルによる on/off"
									warning="is-danger"
								></Tag>
							</article>
							<b className="is-size-5 mt-6">navbar</b>
							{/* <article className="message"> */}
							<nav
								className="navbar has-background-danger-light has-text-weight-medium is-size-6 has-shadow is-radiusless pb-2 pl-5"
								role="navigation"
								aria-label="Main navigation"
								id="nav2"
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
										className="navbar-menu has-background-danger-light is-pulled-right mr-2 mt-1"
										id="nav-links2"
									>
										<div className="navbar-end has-text-grey px-4">
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
							{/* </article> */}
							<article
								className="message has-background-danger-light my-3 py-5 pl-3"
								id="b-r"
							>
								<div className="columns is-centered">
									<div className="column is-10 message">
										<h2 className="message-header has-background-grey is-size-5 has-text-weight-bold ml-5 py-1">
											ハンバーガーメニューの操作
										</h2>
										<div
											className="message-body has-background-white-bis  has-text-centered"
											style={{ borderBottom: 'inset 2px #aaaa88' }}
										>
											<div>ハンバーガーを確認するには 画面を狭めてください</div>
										</div>{' '}
									</div>
								</div>
							</article>
							<button
								className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
								onClick={() => $$.scrTT('#top')}
							>
								<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Nreact
