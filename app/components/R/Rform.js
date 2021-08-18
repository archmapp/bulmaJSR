import React from 'react'
import { useForm } from 'react-hook-form'

function Rform() {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
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

	const getRadioValue = (na) => {
		let ret = ''

		$$.na(na).forEach((elm) => {
			if (elm.checked) {
				ret = elm.value
			}
		})
		return ret
	}

	const Email = watch('email')

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
									<h2 className="subtitle is-5">Form のサンプル</h2>
								</div>
							</div>

							<div className="columns mt-3">
								<div className="column"></div>
								<div className="column is-8 content">
									<article className="message is-primary">
										<div className="message-header">
											<p className="is-size-4 p-3">react-hook-form</p>
										</div>
									</article>

									<div className="box">
										<form onSubmit={handleSubmit(onSubmit)}>
											<div className="field">
												<label htmlFor="firstName">名前&nbsp;</label>
												<div className="control">
													<input
														// defaultValue="太郎"
														className="input"
														type="text"
														placeholder="Text input"
														{...register('firstName')}
														{...register('firstName', { required: true })}
													/>
												</div>
												{errors.firstName && (
													<div className="e">This field is required</div>
												)}
											</div>

											<div className="field">
												<label htmlFor="email">メールアドレス&nbsp;</label>
												<div className="control">
													<input
														className="input"
														type="mail"
														placeholder="メールアドレスを入力"
														{...register('email', {
															required: true,
															pattern: {
																value:
																	/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
																message: 'メールアドレスの形式が不正です',
															},
															// value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
														})}
													/>
													{errors.email && (
														<p className="e">
															メールアドレスを正しく入力して下さい
														</p>
													)}
												</div>
											</div>

											<div className="field">
												<label className="label">Subject</label>
												<div className="control">
													<div className="select">
														<select {...register('subject')}>
															<option>Select dropdown</option>
															<option>Main</option>
															<option>With options</option>
														</select>
													</div>
													{errors.subject && (
														<div className="e">Please select</div>
													)}
												</div>
											</div>

											<div className="field">
												<label className="label">Message</label>
												<div className="control">
													<textarea
														className="textarea"
														placeholder="問い合わせ内容を入力"
														{...register('contact', {
															required: true,
															rows: 8,
															minLength: 1,
															maxLength: 300,
														})}
													></textarea>
												</div>
												{errors.contact && (
													<p className="e">
														問い合わせ内容を300文字以内で入力して下さい
													</p>
												)}
											</div>

											<div className="field">
												<span className="label">Check:</span>
												<div className="control">
													<label className="checkbox">
														<input
															type="checkbox"
															{...register('chk')}
															value="value1"
														/>
														&nbsp;I agree to the{' '}
														<a href="#">terms and conditions</a>
													</label>
												</div>
											</div>

											<div className="field">
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
											</div>

											<div className="field is-grouped">
												{/* <input type="submit" /> */}
												<div className="control" id="submit">
													<button className="button is-link mt-4">
														Submit
													</button>
												</div>
												<div className="control" id="reset">
													<button
														onClick={() => reset()}
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

export default Rform
