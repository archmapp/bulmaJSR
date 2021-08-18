import React from 'react'
import { useForm } from 'react-hook-form'

function Rform() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
	} // your form submit function which will invoke after successful validation

	// console.log('watching...', watch('example')) // you can watch individual input by pass the name of the input

	const onSubmit = (data) => {
		e.preventDefault()
		dispData2()
	}

	const dispData2 = () => {
		console.log(data)
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
										<form  onSubmit={handleSubmit(onSubmit)}>
											<input
												defaultValue="太郎"
												{...register('firstName', { required: true })}
											/>
											{errors.firstName && <span>This field is required</span>}

											{/* <div className="field">
												<label className="label">Name</label>
												<div className="control has-icons-left">
													<input
														className="input"
														id="name"
														type="text"
														placeholder="Text input"
													/>
													<span className="icon is-small is-left">
														<i className="fas fa-user"></i>
													</span>
												</div>
											</div>

											<div className="field">
												<label className="label">Email</label>
												<div className="control has-icons-left has-icons-right">
													<input
														className="input is-danger"
														id="email"
														type="email"
														placeholder="Email input"
													/>
													<span className="icon is-small is-left">
														<i className="fas fa-envelope"></i>
													</span>
												</div>
											</div>

											<div className="field">
												<label className="label">Subject</label>
												<div className="control">
													<div className="select">
														<select id="sel">
															<option>Select dropdown</option>
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
														id="msg"
														placeholder="Textarea"
													></textarea>
												</div>
											</div>

											<div className="field">
												<input
													type="checkbox"
													className="is-checkradio"
													id="chkEx"
													name="chkEx"
													value="value1Ex"
												/>
												<label htmlFor="chkEx">
													I agree to the <a href="#">terms and conditions</a>
												</label>
											</div>

											<div
												className="field is-flex is-flex-direction-column"
												id="rGroupEx"
											>
												<input
													type="radio"
													className="is-checkradio"
													id="rd1"
													name="question2"
													value="rad_value1Ex"
												/>
												<label htmlFor="rd1">Yes</label>
												<input
													type="radio"
													className="is-checkradio"
													id="rd2"
													name="question2"
													value="rad_value2Ex"
												/>
												<label htmlFor="rd2">No</label>
											</div> */}

											<div className="field is-grouped">
												<input type="submit" />

												{/* <div className="control" id="submit">
													<button className="button is-link mt-4">
														Submit
													</button>
												</div>
												<div className="control" id="reset">
													<button className="button is-link is-light mt-4">
														Reset
													</button>
												</div> */}
											</div>
										</form>
									</div>

									<article className="panel">
										<p className="panel-heading mb-1">送信データの情報</p>

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
