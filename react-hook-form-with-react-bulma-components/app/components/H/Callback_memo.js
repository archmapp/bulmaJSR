// https://qiita.com/seira/items/8a170cc950241a8fdb23

import React, { useState } from 'react'
import Counter from './Callback_memo/Counter'
import Counter_memo from './Callback_memo/Counter_memo'
import Counter_useCallback from './Callback_memo/Counter_useCallback'

const Callback_memo = () => {
	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[Hooks]</div>
					</div>
					<div className="notification has-background-info-light is-bold mb-1">
						<div className="container">
							<h1 className="title is-3 has-text-info">
								Callback_memo <span className="is-size-4"></span>
							</h1>
							<h2 className="subtitle is-5 has-text-white">
								<strong className="subtitle is-6 has-text-danger">
									Callback_memo
								</strong>
								・
								<strong className="subtitle is-6 has-text-danger">
									Callback_memo
								</strong>
							</h2>
						</div>
					</div>

					<div className="columns mt-5">
						<div className="column"></div>
						<div className="column is-8 content">
							<article className="message is-info">
								<div className="message-header">
									<p className="has-text-centered has-text-weight-bold">Memo</p>
								</div>
								<div
									className="message-body has-background-white-bis"
									style={{ borderBottom: 'inset 2px #aaaa88' }}
								>
									<div className="ml-3 mb-6">
										<ul>
											<li>
												参考ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/js/shortBulma.html"
													className="has-tooltip-top has-tooltip-warning has-text-grey has-text-weight-bold is-size-5"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													Callback_memo
												</a>
												&nbsp;もご覧ください
											</li>
										</ul>
									</div>
								</div>
							</article>
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>Callback_memo</div>
								<div style={{ margin: '2em' }}>
									<Counter />
								</div>
							</div>
							<hr />
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>Counter_memo</div>
								<div style={{ margin: '2em' }}>
									<Counter_memo />
								</div>
							</div>
							<hr />
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>Counter_useCallback</div>
								<div style={{ margin: '2em' }}>
									<Counter_useCallback />
								</div>
							</div>
							<hr />
						</div>
						<div className="column"></div>
					</div>

					<div className="is-flex is-justify-content-center is-align-items-center">
						準備中！
					</div>
					<button
						className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
						onClick={() => $$.scrTT('#top')}
					>
						<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
					</button>
				</div>
			</section>
		</>
	)
}

export default Callback_memo
