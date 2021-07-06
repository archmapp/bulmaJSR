// import * as $$ from '../js/shortJS'

import React, { useState, useEffect, useRef } from 'react'

function Top() {

	return (
		<>
			<article className="message is-primary py-5" id="b-r">
				<div>
					<div className="field ml-3">
						<input
							type="checkbox"
							className="is-checkradio has-background-color is-info"
							id="add"
							name="add"
							value="+"
							checked={opes.includes('+')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="add">たし算</label>

						<input
							type="checkbox"
							className="is-checkradio has-background-color is-warning"
							id="sub"
							name="sub"
							value="-"
							checked={opes.includes('-')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="sub">ひき算</label>

						<input
							type="checkbox"
							className="is-checkradio has-background-color is-danger"
							id="mul"
							name="mul"
							value="x"
							checked={opes.includes('x')}
							onChange={handleOpeClick}
						/>
						<label htmlFor="mul">かけ算</label>
					</div>
					{/* <p>{opes}</p> */}

					{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
					<div
						className={
							'main-ui' +
							(mistakes == 3 || score >= MAX_COUNT ? ' blurred' : '')
						}
					>
						<div
							style={{ marginBottom: '0.7rem' }}
							className={'problem' + (showError ? ' animate-wrong' : '')}
						>
							{cProblem.n1}{' '}
							<span
								className={opes <= 0 ? 'has-text-danger' : 'has-text-black-ter'}
							>
								{cProblem.operator || '?'}
							</span>{' '}
							{cProblem.n2}
						</div>

						<form onSubmit={handleSubmit}>
							<div className="field has-addons has-addons-centered py-2">
								<div className="control">
									<input
										ref={answerField}
										value={userAnswer}
										onChange={(e) => setUserAnswer(e.target.value)}
										type="text"
										className="input input-sel"
										placeholder="答えの入力"
										autoComplete="off"
									/>
								</div>
								<div className="control">
									<button
										type="button"
										className="button btn-sel has-text-white has-background-primary-dark"
										onClick={handleSubmit}
									>
										OK　[ENTERキー]
									</button>
								</div>
							</div>
						</form>

						<p className="status">
							あと、{' '}
							<span
								className={
									'has-text-weight-bold is-inline-block' +
									(showScore ? ' animate-score' : '')
								}
							>
								{MAX_COUNT - score}
							</span>{' '}
							点 ゲット！（目標：{MAX_COUNT}点）
							<br />
							まちがいは、あと{' '}
							<span
								className={
									'has-text-weight-bold is-inline-block' +
									(showError ? ' animate-wrong' : '')
								}
							>
								{2 - mistakes}
							</span>{' '}
							回まで
						</p>

						<ProgressBar score={score} />
					</div>

					{/* overlay */}
					<div
						className={
							'overlay' +
							(mistakes == 3 || score >= MAX_COUNT ? ' overlay--visible' : '')
						}
					>
						<div className="overlay-inner has-background-danger-light box p-6">
							<div className="end-message mb-3">
								{score >= MAX_COUNT ? (
									<div className="notification is-info pt-3 pb-2">
										おめでとう！　 あなたの勝ちです。
									</div>
								) : (
									<div className="notification is-warning pt-3 pb-2">
										残念、あなたの負けです。
									</div>
								)}
							</div>
							<p className="mt-5">
								<span>{score}</span> 点 ゲット！（目標：{MAX_COUNT}点）
								<br />
								まちがいは、 <span>{mistakes}</span> 回
							</p>
							<button
								ref={resetButton}
								onClick={resetGame}
								className="reset-button mt-6"
							>
								もう一度
							</button>
						</div>
					</div>
				</div>
			</article>
		</>
	)
}

export default Top
