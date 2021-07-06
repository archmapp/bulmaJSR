import React from 'react'

function Form() {
	const scrollToTop = () =>
		$$.Id('top').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})

		return (
		<>
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-8">
							<div>
								<div className="is-size-4 has-text-weight-medium mb-2">
									[Form]
								</div>
								Form
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns">
										<div className="column is-2"></div>
										<div className="column is-6">
											<div className="block">
												<h2 className="subtitle has-text-weight-bold has-text-grey mt-1">
													Form の利用
												</h2>
												<div className="has-text-weight-bold mb-2"></div>
												<ul className="mb-2">
													<li className="ml-3 mb-1">
														<a
															href="https://priceless-joliot-51a189.netlify.app/"
															className="has-tooltip-top has-tooltip-warning has-text-grey"
															data-tooltip="[CTRL]キーを押しながら、クリック"
														>
															Todo リスト
														</a>
														<h1 className="subtitle mt-3">
															・codesandbox
															<small className="is-size-5"> で開く</small>
														</h1>
														<div>
															<div className="is-size-5">
																<button
																	type="button"
																	className="
                                  button has-text-light  has-background-success-dark is-medium mb-5"
																	style={{
																		lineHeight: '2rem',
																		display: 'inline-block',
																	}}
																	onClick={() =>
																		window.open(
																			'https://codesandbox.io/embed/todo-list-6vfjt?fontsize=14&hidenavigation=1&theme=dark'
																		)
																	}
																>
																	React Todo リスト
																</button>
															</div>
														</div>
													</li>
													<hr />
													<li className="ml-3 mt-5 mb-1">
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/js/form$$.html?"
															className="has-tooltip-top has-tooltip-warning has-text-grey"
															data-tooltip="[CTRL]キーを押しながら、クリック"
														>
															Form のサンプル
														</a>
														<h2 className="subtitle has-text-weight-bold has-text-grey mt-2">
															・bulmaswatch の利用
														</h2>
													</li>
												</ul>
											</div>
										</div>
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
					</div>
				</div>
			</section>
		</>
	)
}

export default Form
