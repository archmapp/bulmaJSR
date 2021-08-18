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
											<label htmlFor="firstName">名前&nbsp;</label>
											<input
												// defaultValue="太郎"
												className="control"
												placeholder="Text input"
												{...register('firstName', { required: true })}
											/>
											{errors.firstName && <div>This field is required</div>}

											<label htmlFor="firstName2">名前&nbsp;</label>
											<div className="control">
												<input
													// defaultValue="太郎"
													class="input"
													placeholder="Text input"
													{...register('firstName2', { required: true })}
												/>
											</div>
											{errors.firstName && <div>This field is required</div>}

											<label htmlFor="email">メールアドレス&nbsp;</label>
											<input
												type="email"
												className="control"
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
												<p className="formError">
													メールアドレスを正しく入力して下さい
												</p>
											)}

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
