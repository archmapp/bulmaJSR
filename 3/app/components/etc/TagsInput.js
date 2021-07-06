// import * as $$. from '../js/shortJS'
import '../../../node_modules/bulma-extensions/bulma-tagsinput/dist/css/bulma-tagsinput.min.css'
import bulmaTagsinput from '../../../node_modules/bulma-extensions/bulma-tagsinput/dist/js/bulma-tagsinput.js'
// import '../../../node_modules/bulma-extensions/bulma-tagsinput/dist/js/bulma-tagsinput.min.js'

import React, { useState, useEffect, useRef } from 'react'

import Hero from '../Hero'

function Top() {
	const [tags, setTags] = useState('タグ 1,タグ 2,タグ 3')

	useEffect(() => {
		console.log(bulmaTagsinput)
		bulmaTagsinput.attach()
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
											<button
												className="button is-primary has-badge-primary mr-5"
												data-badge="1"
												onClick={(e) => e.target.dataset.badge++}
											>
												Primary
											</button>
											<button
												className="button is-danger has-badge-danger has-badge-large has-badge-bottom-right"
												data-badge="15"
												onClick={(e) => e.target.dataset.badge--}
											>
												Danger
											</button>
										</div>
										<span className="has-text-weight-semibold ml-5">
											⇐　Click me!
										</span>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`data-badge="1"<br /> ...<br /><br />onClick={(e) => e.target.dataset.badge++}<br />onClick={(e) => e.target.dataset.badge--}
  `}
												></CC>
												・・・・・
											</pre>
										</blockquote>
									</div>
								</article>{' '}
								<div className="is-size-5 has-text-weight-medium my-3">
									TagsInput
								</div>
								<article className="message is-warning py-5 pl-3" id="b-r">
									<div className="block mx-6">
										<div className="mb-6">
											<input
												type="tags"
												className="input"
												placeholder="... タグの追加"
												value="Tag 1,Tag 2,Tag 3"
												onChange={(e) => null}
											/>
										</div>
										<div className="mb-5">
											<input
												type="tags"
												className="input"
												id="tags"
												placeholder="... タグの追加"
												value={tags}
												onChange={(e) =>
													setTags((prev) => `"${prev}", "${e.target.value}"`)
												}
											/>
										</div>
										<button
											className="button is-warning ml-5"
											onClick={() => {
                        const n = $$.q('#tags').nextElementSibling
												console.log($$.q('#tags').innerHTML)
                        // n.innerHTML = n.lastElementSibling.innerHTML
                        // $$.q('#tags').nextElementSibling.innerHTML=''
											}}
											// onClick={() => ($$.Id('tags').value = '')}
										>
											全てのタグの削除
										</button>
									</div>

									<div className="box mr-3 pr-2 mt-2">
										<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
											参考ソースコード
										</h2>

										<blockquote className="is-size-6">
											<pre className="pre1">
												<CC
													__html={`data-badge="1"<br /> ...<br /><br />onClick={(e) => e.target.dataset.badge++}<br />onClick={(e) => e.target.dataset.badge--}
  `}
												></CC>
												・・・・・
											</pre>
										</blockquote>
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
