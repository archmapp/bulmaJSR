import React, { useRef } from 'react'

function Eform() {
	const firstName = useRef('')
	const email = useRef('')
	const subject = useRef('')
	const txtA = useRef('')
	const chkEx = useRef('')

	const submitHandler = (e) => {
		e.preventDefault()
		console.log(firstName.current.value)
		console.log(email.current.value)
		console.log(subject.current.value)
		console.log(txtA.current.value)
		console.log('chkEx:', chkEx.current.checked ? chkEx.current.value : '')
		const chks = getCheckValues('chkG')
		const rad = getRadioValue('radEx')
		const data = {
			firstName: firstName.current.value,
			email: email.current.value,
			subject: subject.current.value,
			txtA: $$.escape_html(txtA.current.value),
			chkEx: chkEx.current.checked ? chkEx.current.value : '',
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

	const dispData = () => {
		let data = ''

		data += mkData('name', '#name')
		data += mkData('email', '#email')
		data += mkData('sel', '#sel')
		data += mkData('msg', '#msg')
		data += mkData(
			'chkEx',
			`${$$.Id('#chkEx').value}: ${$$.Id('#chkEx').checked}`
		)
		data += mkData('rGroupEx', getRadioValue('question2'))
		$$.q('.data').innerHTML = `<div class="">${data}</div>`
	}

	const mkData = (hd, sel) => {
		if (['chk', 'chkEx', 'rGroup', 'rGroupEx'].includes(hd)) {
			return `
          <span class="panel-block px-4">
            #${hd}: &nbsp;<strong>${sel}</strong>
          </span>
          `
		} else {
			return `
          <span class="panel-block px-4">
            #${hd}: &nbsp;<strong>${$$.q(sel).value}</strong>
          </span>
          `
		}
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
									<h2 className="subtitle is-5">React useRef</h2>
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
														name="firstName"
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
														type="email"
														placeholder="メールアドレスを入力"
														ref={email}
													/>
												</div>
											</div>
											<div className="field">
												<label className="label">Subject</label>
												<div className="control">
													<div className="select">
														<select ref={subject} required>
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
														ref={txtA}
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
													ref={chkEx}
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

export default Eform
