// https://qiita.com/seira/items/8a170cc950241a8fdb23

import React, { useState } from 'react'
import CUseMemo1 from './Callback_memo/CUseMemo1'

const CUseMemo = () => {
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
								CUseMemo <span className="is-size-4"></span>
							</h1>
							<h2 className="subtitle is-5 has-text-white">
								<strong className="subtitle is-6 has-text-danger">
									CUseMemo
								</strong>
								・
								<strong className="subtitle is-6 has-text-danger">
									CUseMemo
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
													CUseMemo
												</a>
												&nbsp;もご覧ください
											</li>
										</ul>
									</div>
								</div>
							</article>
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>CUseMemo</div>
								<div style={{ margin: '2em' }}>
									<CUseMemo1 />
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

export default CUseMemo
