import React from 'react'

import Tag from '../../css/bulma-utils/tag'
import Hero from './Hero'

import Q3 from '../../assets/QRcode/QR_ippatu111.png'
import Q2 from '../../assets/QRcode/QR_ninja50.png'
import Q1 from '../../assets/QRcode/QR_sansuu50.png'

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
							・{' '}
							<span className="is-size-7 has-text-black has-text-weight-medium">
								お知らせ：
							</span>
							　
							<span
								className="iken has-tooltip-top has-tooltip-danger has-text-info is-size-4 is-size-5-mobile"
								data-tooltip="予定価格とモデルから、素早く一般工事費を推定するWEBアプリ"
								style={{ cursor: 'auto' }}>
								i入札(建築編)
							</span>
							【 入札アプリ（建築編）】
							<span className="has-text-weight-semibold has-text-info">
								終了
							</span>
							<Tag
								hint="Angular"
								msg="meanスタックの採用"
								warning="is-danger"></Tag>
							<h2
								className="is-size-6 has-text-centered mt-3"
								style={{ lineHeight: '1.7rem' }}>
								<span className="has-text-weight-semibold has-text-info">
									入札アプリ（建築編）
								</span>
								は、2022/02/02 を持ちまして
								<br />
								<span className="has-text-weight-semibold">
									<span className="has-text-weight-semibold has-text-info">
										管理・提供
									</span>
								</span>
								&nbsp;を終了することになりました。
							</h2>
							<h2 className="is-size-6 has-text-centered mt-3">
								ご利用ありがとうございました。
							</h2>
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
									<p className="f-size">更新日：2022/11/07</p>
								</div>
							</div>
						</div>
					</article>

					<article className="panel is-warning">
						<p className="panel-heading">第三版・Bulmaと共に！　開発予定</p>

						<div className="panel-block is-flex is-justify-content-center">
							<div className="box notification has-background-white-ter pt-3 pb-0  px-1 mt-3 mx-2">
								<h3 className="subtitle is-size-5 px-0 mb-3">
									<div className="has-text-centered is-size-6-mobile f-size">
										<p className="f-size-ss" style={{ lineHeight: '2.0rem' }}>
											webpackでの環境構築は取りやめて、
											<span className="f-size-ss-none">次回から</span>
											<br />
											<span className="has-text-danger has-text-weight-semibold">
												Next.js
											</span>{' '}
											に挑戦しようと考えています。
										</p>
									</div>
									<div className="box notification has-background-white-ter pt-2 pb-1 px-0 my-2">
										<div className="subtitle is-size-6 mb-3">
											<div className="has-text-centered is-size-6-mobile f-size-ss pb-0">
												<p className="f-size-ss">Vite Next.js Remix.js</p>
											</div>
										</div>
									</div>
								</h3>
							</div>
						</div>
					</article>

					<article className="panel is-info mt-6">
						<p className="panel-heading">
							WEBアプリ
							<span className="tag is-danger is-large mx-1">
								小学生用ゲーム
							</span>
							の紹介
						</p>

						<div
							className="panel-block is-flex is-flex-direction-column is-justify-content-center"
							style={{ minWidth: '400px' }}>
							<article className="message is-primary mb-0">
								<div className="message-header mt-3 pb-1">
									<p>リンク先</p>
								</div>
								<div className="message-body is-size-6 py-2 px-0">
									<table
										className="table is-hoverable is-size-7-mobile"
										style={{ minWidth: '400px' }}>
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
													<a href="https://flashcard2.netlify.app">一発勝負</a>
												</th>
												<td className="td_boxes">記憶ゲーム</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://archtictactoe.netlify.app">
														ティック・タック・トゥ
													</a>
												</th>
												<td className="td_boxes">三目並べ</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://space-game2.netlify.app">
														いん石を狙え
													</a>
												</th>
												<td className="td_boxes">宇宙の旅</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://nyan-gules.vercel.app/">
														にゃんにゃん動画
													</a>
												</th>
												<td className="td_boxes has-text-danger">
													初めてのNext.js
												</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://isnt-archmapp-awesome.netlify.app/">
														にゃんにゃん動画
													</a>
												</th>
												<td className="td_boxes">旧版</td>
											</tr>
											<tr>
												<th className="has-text-right">
													<a href="https://nextjs-pokemon-kappa.vercel.app/">
														ポケモン画像一覧
													</a>
												</th>
												<td className="td_boxes has-text-danger">Next.js 版</td>
											</tr>
										</tbody>
									</table>
								</div>
								<article className="message is-warning has-text-centered">
									<div className="message-body mt-3">
										~~~<strong>年配の方も楽しめるかも</strong>~~~
										<br />
										<div className="mt-2 mb-4">
											パソコン・タブレット・スマホ も OK！
										</div>
										<div className="f-size is-flex is-justify-content-space-around has-background-info-light px-2">
											<figure>
												<figcaption>さんすう入門</figcaption>
												<img src={Q1} alt="URL: QR_sansuu50.png" />
											</figure>
											<figure className="f-sizeQ2">
												<figcaption>しんけいすいじゃく</figcaption>
												<img src={Q2} alt="URL: QR_ninja50.png" />
											</figure>
											<figure className="f430_Q3">
												<figcaption>一発勝負 </figcaption>
												<img src={Q3} alt="URL: QR_ippatu111.png" />
											</figure>
										</div>
									</div>
									<hr />
									<div className="is-inline-block my-2">
										・【
										<span className="has-text-danger is-size-5 has-text-weight-semibold">
											<span className="is-size-5">PWA</span>
										</span>
										】<span className="is-size-6">対応版&nbsp;は、</span>
										<a href="https://archmapp77.github.io/archmapp77-quickview/">
											【
											<span className="has-text-primary is-size-6">こちら</span>
											】
										</a>
									</div>
								</article>

								<div
									className="
									box
									has-background-danger-light has-text-primary-dark
									is-size-4
									py-3
									mx-0
									my-4
								"
									style={{ lineHeight: '2rem', display: 'block' }}>
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
												}>
												FLEXBOX 練習帳
											</button>
										</div>
										<div className="box notification has-background-white-ter py-3 my-3 mx-2">
											<div className="subtitle is-size-6 mb-3">
												<div className="has-text-centered is-size-6-mobile f-size-s">
													<p className="f-size-s pt-2">
														Flexboxの知識を増やしていきます。
													</p>
												</div>
											</div>
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
