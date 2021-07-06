import React from 'react'

function About() {
	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">
							[archmapp@i.softbank.jp]
						</div>
						About
						<div class="box">
							<h1 class="notification title has-background-info-dark has-text-white">
								title
							</h1>

							<ul class="panel">
								<li>
									<h1 class="panel-block subtitle has-background-info-light">
										team: アーキエムアップ
									</h1>
								</li>
								<li class="my-0 ml-5 pt-2">所在地：北九州市</li>
								<li class="ml-5 py-2">
									メール：
									<a href="mailto:archmapp@i.softbank.jp">
										mailto:archmapp@i.softbank.jp
									</a>
								</li>
							</ul>

							<ul class="panel">
								<li>
									<h1 class="panel-block subtitle has-background-info-light">
										入札アプリ （建築編）
									</h1>
								</li>
								<li class="iken has-text-weight-bold has-text-primary-dark my-0 ml-5 pt-2">
									i建築
								</li>
								<li class="ml-5 py-2">
									<a href="https://safe-peak-55766.herokuapp.com/api">
										URL：https://safe-peak-55766.herokuapp.com/api
									</a>
								</li>
							</ul>

							<ul class="panel">
								<li>
									<h1 class="panel-block subtitle has-background-info-light">
										全てに感謝！　💞💕
									</h1>
								</li>
								<li class="ml-5">所在地：北九州市</li>
								<li class="ml-5">
									メール：
									<a href="mailto:archmapp@i.softbank.jp">
										mailto:archmapp@i.softbank.jp
									</a>
								</li>
							</ul>
							<ul class="panel">
								<li>
									<h1 class="panel-block subtitle has-background-info-light">
										bold name
									</h1>
								</li>
								<li class="ml-5">年齢：age</li>
								<li class="ml-5">
									メール：
									<a href="mailto:email">email</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
