import React, { useState, useEffect, useRef } from 'react'
import png from '../../assets/img/tiles800x400.png'

function Layout() {
	const scrollToTop = () =>
		$$.Id('top').scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})

		useEffect(() => {
		let img = new Image()
		img.src = png

    if ($$.Id('img-tiles').children.length===0) $$.Id('img-tiles').appendChild(img)
		// document.getElementById('img-tiles').appendChild(img)
	}, [])
	return (
		<>
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-10">
							<div>
								<div className="is-size-4 has-text-weight-medium mb-2">
									[Layout]
								</div>
								Tiles
								<article className="message is-primary my-3 py-5 pl-3" id="b-r">
									<div className="columns is-centered">
										<div className="column is-10">
											<div className="block">
												<h2 className="subtitle has-text-weight-bold has-text-grey mt-1">
													タイルをランダムに作成します。
												</h2>
												<div className="has-text-weight-bold mb-2"></div>
												<ul className="mb-2">
													<li className="ml-3 mt-5 mb-1">
														<a
															href="https://archmapp2.github.io/bulmaJS/src/sub/js/tilesLayout$$.html"
															className="has-tooltip-top has-tooltip-warning has-text-grey"
															data-tooltip="[CTRL]キーを押しながら、クリック"
														>
															Tiles の自動生成
														</a>
														{/* <div>
															<figure className="className is-5by3">
																<img src="../../assets/img/tiles800x400.png" />
															</figure>
														</div> */}
														<h2 className="subtitle has-text-weight-bold has-text-grey mt-6">
															サンプル画像
														</h2>
														<div id="img-tiles"></div>
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

export default Layout
