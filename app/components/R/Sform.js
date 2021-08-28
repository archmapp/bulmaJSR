import React from 'react'

function Sform() {
	const submitHandler = (e) => {
		e.preventDefault()
		console.log($$.Id('firstName').value)
		console.log($$.Id('email'))
		console.log($$.Id('subject'))
		console.log($$.Id('txtA'))
		console.log('chkEx:', $$.Id('chkEx').checked ? $$.Id('chkEx').value : '')
		const chks = getCheckValues('chkG')
		const rad = getRadioValue('radEx')

		const firstName = $$.Id('firstName').value
		const data = {
			firstName: $$.Id('firstName').value,
			email: $$.Id('email').value,
			subject: $$.Id('subject').value,
			txtA: $$.escape_html($$.Id('txtA').value),
			chkEx: $$.Id('chkEx').checked ? $$.Id('chkEx').value : '',
			chkG: chks,
			radEx: rad,
		}
		dispData2(data)
	} // your form submit function which will invoke after successful validation

	// console.log('watching...', watch('example')) // you can watch individual input by pass the name of the input

	const dispData2 = (data) => {
		$$.Id('disp-data').innerHTML = `<blockquote><pre>${JSON.stringify(
			data,
			null,
			'\t'
		)}</pre></blockquote>`
		// $$.Id('disp-data').innerHTML = <pre>{JSON.stringify(data, null, '\t')}</pre>
	}


	const getCheckValues = (na) => {
		let ret = []

		$$.na(na).forEach((elm) => {
			console.log(elm, elm.checked)
			if (elm.checked) {
				ret.push(elm.value)
			}
		})
		return ret
	}

	const getRadioValue = (na) => {
		let ret = ''

		$$.na(na).forEach((elm) => {
			console.log(elm, elm.checked)
			if (elm.checked) {
				ret = elm.value
			}
		})
		return ret
	}

	return (
		<div>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[React]</div>
					</div>

					<section className="section">
						<div className="container">
							<div className="notification is-bold mb-1">
								<div className="container">
									<h1 className="title">Form</h1>
									<h2 className="subtitle is-5">shortJS.js in React</h2>
								</div>
							</div>

							<div className="columns mt-3">
								<div className="column"></div>
								<div className="column is-8 content">
									<article className="message is-primary">
										<div className="message-header">
											<p className="is-size-4 p-3">Bulma Extensions</p>
										</div>
									</article>

									<div className="box">
										<form onSubmit={submitHandler} id="form">
											<div className="field">
												<label htmlFor="firstName" className="label">
													名前
												</label>
												<div className="control">
													<input
														// defaultValue="太郎"
														className="input"
														type="text"
														placeholder="（2文字以上）"
														id="firstName"
														required
														minLength="2"
													/>
												</div>
												{/* {errors.firstName && (
													<div className="e">This field is required</div>
												)} */}
											</div>
											<div className="field">
												<label htmlFor="email" className="label">
													メールアドレス
												</label>
												<div className="control">
													<input
														className="input"
														id="email"
														type="email"
														placeholder="メールアドレスを入力"
													/>
												</div>
											</div>
											<div className="field">
												<label className="label">Subject</label>
												<div className="control">
													<div className="select">
														<select id="subject" required>
															<option>Select dropdown</option>
															<option>Main</option>
															<option>With options</option>
														</select>
													</div>
												</div>
											</div>
											<div className="field">
												<label className="label">Message</label>
												<div className="control">
													<textarea
														className="textarea"
														placeholder="問い合わせ内容（20文字以内）"
														id="txtA"
														maxLength="20"
													></textarea>
												</div>
												{/* {errors.contact && (
													<p className="e">
														問い合わせ内容を20文字以内で入力して下さい
													</p>
												)} */}
											</div>

											<label className="label">Favorates</label>
											<div className="field">
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkG1"
													name="chkG"
													value="sports"
												/>
												<label htmlFor="chkG1">スポーツ</label>
											</div>
											<div className="field">
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkG2"
													name="chkG"
													value="reading"
												/>
												<label htmlFor="chkG2">読書</label>
											</div>
											<div className="field">
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkG3"
													name="chkG"
													value="music"
												/>
												<label htmlFor="chkG3">音楽</label>
											</div>
											<div className="field">
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkG4"
													name="chkG"
													value="travel"
												/>
												<label htmlFor="chkG4">旅行</label>
												<div
													className="is-divider mt-3 mb-0"
													data-content=""
												></div>
											</div>

											<div className="field">
												<label className="label">単一チェック</label>
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkEx"
													value="chkEx"
												/>
												<label htmlFor="chkEx">準備OK</label>
											</div>

											<div
												className="field is-flex is-flex-direction-column"
												id="rGroupEx"
											>
												<label className="label">Question</label>
												{/* dummy　揃える */}
												<input
													type="radio"
													className="is-checkradio"
													id="rd1"
													name="radEx"
													value="rad1"
												/>
												<label htmlFor="rd1">Yes</label>
												<input
													type="radio"
													className="is-checkradio"
													id="rd2"
													name="radEx"
													value="rad2"
												/>
												<label htmlFor="rd2">No</label>
											</div>

											{/* <div className="field">
												<span className="label">Question:</span>
												<div className="control" id="rGroup">
													<label className="radio">
														<input
															type="radio"
															{...register('question')}
															value="rad_value1"
														/>
														&nbsp;Yes
													</label>
													<label className="radio">
														<input
															type="radio"
															{...register('question')}
															value="rad_value2"
														/>
														&nbsp;No
													</label>
												</div>
											</div> */}
											<div className="field is-grouped">
												{/* <input type="submit" /> */}
												<div className="control" id="submit">
													<button
														type="submit"
														// onClick={submitHandler}
														className="button is-link mt-4"
													>
														Submit
													</button>
												</div>
												<div className="control" id="reset">
													<button
														onClick={() => $$.Id('form').reset()}
														className="button is-link is-light mt-4"
													>
														クリア
													</button>
													{/* make sure you don't pass event as argument. I will patch this issue with shallow clone to avoid this problem as well. */}
												</div>
											</div>
										</form>
									</div>

									<article className="panel">
										<p className="panel-heading mb-1">送信データの情報</p>

										<div id="disp-data"></div>
										<div className="data has-background-white-bis"></div>
									</article>
									<hr />
								</div>
								<div className="column"></div>
							</div>
						</div>
					</section>

					<button
						className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
						onClick={() => $$.scrTT('#top')}
					>
						<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
					</button>
				</div>
			</section>
		</div>
	)
}

export default Sform
