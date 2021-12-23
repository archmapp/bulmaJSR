import React from 'react'

import Hero from '../Utils/Hero'

function Top() {
	function CC({ __html }) {
		return <div dangerouslySetInnerHTML={{ __html }}></div>
	}

	return (
		<>
			<article className="message is-primary pt-6 pb-5" id="b-r">
				<Hero />
				<nav className="my-2 mx-6 px-2 pt-6">
					<ul>
						<li>
							<div className="is-inline-block mb-2">
								・【
								<span className="has-text-primary-dark is-size-5 has-text-weight-semibold">
									<span className="is-size-6">初回</span>・Bulmaと共に！
								</span>
								】&nbsp;は、
								<a href="https://archmapp2.github.io/bulmaJS/">【こちら】</a>
							</div>
							<p className="has-text-primary-dark is-size-5 has-text-weight-semibold has-text-centered">
								[ using Bulma ]&nbsp;
								<span className="has-text-dark is-size-6 has-text-centered">
									Let's try Javascript with Bulma
								</span>
							</p>
						</li>
						{/* <div className="my-2 mx-6 px-2 pt-4"> */}
						<li className="my-5 pt-4 pb-6">
							・ <span className="is-size-7 has-text-black">お知らせ：</span>　
							<span
								className="iken has-tooltip-top has-tooltip-danger has-text-info is-size-4 is-size-5-mobile"
								data-tooltip="予定価格とモデルから、素早く一般工事費を推定するWEBアプリ"
								style={{ cursor: 'auto' }}
							>
								i入札(建築編)
							</span>
							<a
								href="https://safe-peak-55766.herokuapp.com/"
								className="has-text-grey has-text-weight-semibold"
							>
								【 入札アプリ（建築編）】 は、
								<span className="has-text-weight-semibold has-text-info">
									移転
								</span>
							</a>
							しました。
						</li>
					</ul>

					<article className="panel is-primary">
						<p className="panel-heading">第二版・Bulmaと共に！</p>

						<div className="panel-block is-flex is-justify-content-center">
							<div className="box notification has-background-white-ter py-3 my-3 mx-2">
								<h3 className="subtitle is-size-5 mb-3">
									<div className="has-text-centered is-size-6-mobile f-size">
										<p className="f-size">公開日：2021/07/07</p>
									</div>
								</h3>
								<div className="subtitle has-text-centered is-size-6-mobile has-text-primary-dark has-text-weight-semibold">
									<p className="f-size">完了予定日：2021/12/25</p>
								</div>
							</div>
						</div>
					</article>

					<article className="panel is-info mt-6">
						<p className="panel-heading">WEBアプリの紹介</p>

						<div className="panel-block is-flex is-flex-direction-column is-justify-content-center">
							<article className="message is-primary mb-0">
								<div className="message-header mt-3 pb-1">
									<p>リンク先</p>
								</div>
								<div className="message-body is-size-6 py-2 px-0">
									<table className="table is-hoverable is-size-7-mobile">
										<tbody className="f-size">
											<tr>
												<th className="has-text-right">
													<a href="https://affectionate-wozniak-de01a2.netlify.app/">
														初めての【 けいさん 】
													</a>
												</th>
												<td className="td_flex-direction">だれでもできる</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://jolly-lamport-67e201.netlify.app">
														しんけいすいじゃく
													</a>
												</th>
												<td className="td_width">忍者トランプ</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://flashcard2.netlify.app">
														一発勝負 <span style={{ color: 'red' }}>❣</span>
													</a>
												</th>
												<td className="td_boxes">記憶ゲーム</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div
									className="
									box
									has-background-danger-light has-text-primary-dark
									is-size-4
									py-3
									mx-0
									my-2
								"
									style={{ lineHeight: '2rem', display: 'block' }}
								>
									<nav className="level">
										<div className="level-item">
											<button
												type="button"
												className="
												button
												has-text-light has-background-warning-dark
												is-medium
											"
												onClick={() =>
													window.open(
														'https://archmapp2.github.io/bulmaJS/src/sub/flex/Diagram.html'
													)
												}
											>
												FLEXBOX 練習帳
											</button>
										</div>
									</nav>
								</div>
							</article>
						</div>
					</article>
				</nav>
				<hr />
			</article>
			{/* 
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-10"></div>
					</div>
				</div>
			</section> */}
		</>
	)
}

export default Top
