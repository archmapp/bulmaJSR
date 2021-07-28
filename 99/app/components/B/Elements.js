import React, { useEffect, useRef } from 'react'

function Elements() {
	
	useEffect(() => {
		$$.codeSA('.pre1')

		$$.qAll('.notification .delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.remove()
			})
		})

		$$.qAll('.tag.is-delete').forEach((o) => {
			$$.oe(o, () => {
				o.parentNode.parentNode.remove()
			})
		})

		// handleProgress()
	}, [])

	const handleProgress = () => {
		const el = $$.q('.progress')
		el.removeAttribute('value')
		setTimeout(() => el.setAttribute('value', '100'), 4100)
	}

  function CC({ __html }) {
		return <div dangerouslySetInnerHTML={{ __html }}></div>
	}

	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[Elements]</div>
						Button
						<article className="message is-primary my-3 py-5 pl-3" id="b-r">
							<div className="block">
								<button className="button is-primary is-loading block">
									Loading
								</button>
								<span className="ml-5">is-loading</span>
							</div>
							<div>
								<button
									className="button is-primary btn-loading has-tooltip-top has-tooltip-warning"
									data-tooltip="className='btn-loading'"
									onClick={() => $$.qcL_T('.btn-loading', 1500, 'is-loading')}
								>
									Click me
								</button>
								<span className="ml-5">1.5秒間：is-loading</span>
							</div>

							<div className="box mr-3 pr-2 mt-2">
								<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
									参考ソースコード
								</h2>

								<blockquote className="is-size-6">
									<pre className="pre1">
										<CC
											__html={`onClick={() => $$.qcL_T('<b>.btn-loading</b>', 1500, 'is-loading')}`}
										></CC>
										<br />
										・・・・・
									</pre>
								</blockquote>
							</div>
						</article>
						<article className="message is-primary my-5">
							<div className="message-header mt-5">
								<p>Notificationを一つずつ削除</p>
							</div>

							<div
								className="message-body has-background-white-bis"
								style={{ borderBottom: 'inset 2px #aaaa88' }}
							>
								<div>
									イベントリスナーを設定された削除ボタンを持つ、複数のNotificationを一つずつ削除
								</div>
								<div className="mt-4">
									<div>
										参考URL：&nbsp;
										<a
											href="https://archmapp2.github.io/bulmaJS/src/sub/js/notification$$.html"
											className="has-text-grey has-tooltip-top has-tooltip-warning has-text-grey"
											data-tooltip="[CTRL]キーを押しながら、クリック"
										>
											https://archmapp2.github.io.../notification$$.html
										</a>
									</div>
								</div>
							</div>

							<div className="notification has-background-danger-light my-1">
								<button className="delete"></button>
								Lorem ipsum A
							</div>

							<div className="notification lyellow mb-1">
								<button className="delete"></button>
								Lorem ipsum B
							</div>

							<div className="notification has-background-success-light mb-1">
								<button className="delete"></button>
								Lorem ipsum C
							</div>

							<div className="notification lgreen mb-1">
								<button className="delete"></button>
								Lorem ipsum D
							</div>

							<div className="box mr-3 pr-2 mt-2">
								<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
									参考ソースコード
								</h2>

								<blockquote className="is-size-6">
									<pre className="pre1">
										<CC
											__html={`useEffect(() => {
    $$.qAll('.notification .delete').forEach((o) => {
      $$.oe(o, () => {
        o.parentNode.remove()
      })
    })
})`}
										></CC>
										・・・・・
									</pre>
								</blockquote>
							</div>
						</article>
						<div className="is-size-5 has-text-weight-medium my-3">
							progress
						</div>
						<article className="message is-primary py-5 pl-3" id="b-r">
							<div className="block mx-6 is-flex">
								<progress
									className="progress is-warning has-tooltip-top has-tooltip-primary"
									data-tooltip="handleProgress"
									style={{ width: '50%' }}
									onClick={handleProgress}
									value="100"
									max="100"
								>
									100%
								</progress>
								<span className="has-text-weight-semibold ml-5">
									⇐　Click me!
								</span>
							</div>

							<div className="box mr-3 pr-2 mt-2">
								<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
									参考ソースコード
								</h2>

								<blockquote className="is-size-6">
									<pre className="pre1">
										<CC
											__html={`const <b>handleProgress</b> = () => {
    const el = $$.q('.progress')
    $$.oe(el, () => el.removeAttribute('value'))
    setTimeout(() => el.setAttribute('value', '100'), 4100)
  }`}
										></CC>
										・・・・・
									</pre>
								</blockquote>
							</div>
						</article>
						<article className="message is-info my-5">
							<div className="message-header mt-5">
								<p>Tagを一つずつ削除</p>
							</div>

							<div
								className="message-body has-background-white-bis"
								style={{ borderBottom: 'inset 2px #aaaa88' }}
							>
								<div>
									イベントリスナーを設定された削除ボタンを持つ、複数の{' '}
									<span className="has-text-weight-semibold">tag</span>{' '}
									を一つずつ削除
								</div>
							</div>

							<div className="field is-grouped is-grouped-multiline mt-5 ml-5">
								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Technology</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">CSS</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Flexbox</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Web Design</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Open Source</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Community</a>
										<a className="tag is-delete"></a>
									</div>
								</div>

								<div className="control">
									<div className="tags has-addons">
										<a className="tag is-link">Documentation</a>
										<a className="tag is-delete"></a>
									</div>
								</div>
							</div>

							<div className="box mr-3 pr-2 mt-2">
								<h2 className="is-size-6 has-background-white-ter mb-1 pl-4">
									参考ソースコード
								</h2>

								<blockquote className="is-size-6">
									<pre className="pre1">
										<CC
											__html={`useEffect(() => {
    $$.qAll('.tag.<b>is-</b>delete').forEach((o) => {
      $$.oe(o, () => {
        o.parentNode.parentNode.remove()
      })
    })
})`}
										></CC>
										・・・・・
									</pre>
								</blockquote>
							</div>
						</article>
						<button
							className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
							onClick={() => $$.scrTT('#top')}
						>
							<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Elements
