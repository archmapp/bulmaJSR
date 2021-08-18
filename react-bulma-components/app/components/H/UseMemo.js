// https://reffect.co.jp/react/react-memo
// memoではコンポーネントに対して設定を行い、
// useCallbackでは関数に対して設定を行っていましたが
// useMemoでは値に対して設定をおこないます。

import React from 'react'
import { useState, useMemo, useCallback } from 'react'
import TodoList from './UseMemo/TodoList'

const UseMemo = () => {
	console.log('UseMemo')

	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([
		{
			id: '001234',
			todo: '0Learn vue.js',
			isCompleted: false,
		},
		{
			id: '101234',
			todo: '1Learn React',
			isCompleted: false,
		},
		{
			id: '201234',
			todo: '2Learn Laravel',
			isCompleted: false,
		},
	])

	console.log('todos.length', todos.length)
	// useMemoでは値に対して設定をおこないます。値を返す関数か?
	// useMemo(関数, [...])　関数の実行ではなく、関数の定義であることに注意
	const todosNotComplete = useMemo(
		() =>
			todos.filter((todo) => {
				console.log('todosNotComplete todo', todo.isCompleted, todo.todo)
				return todo.isCompleted === false
			}),
		[todos]
	)

	const inputTodo = (e) => {
		setTodo(e.target.value)
	}

	const addTodo = (e) => {
		e.preventDefault()
		setTodos((todos) => [
			...todos,
			{ id: new Date().getTime().toString(), todo: todo, isCompleted: false },
		])
		setTodo('')
	}

	const completeTodo = useCallback((id) => {
		console.log('completeTodo', id)
		// let newTodos = todos.map((todo, todoIndex) => {
		let newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isCompleted = !todo.isCompleted
			}
			return todo
		})
		setTodos(newTodos)
	}, [todos])

	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[Hooks]</div>
					</div>
					<div className="notification has-background-info-light is-bold mb-1">
						<div className="container">
							<h1 className="title is-3 has-text-info">
								UseMemo <span className="is-size-4"></span>
							</h1>
							<h2 className="subtitle is-5 has-text-white">
								<strong className="subtitle is-6 has-text-danger">
									UseMemo
								</strong>
								・
								<strong className="subtitle is-6 has-text-danger">
									UseMemo
								</strong>
							</h2>
						</div>
					</div>

					<div className="columns mt-5">
						<div className="column"></div>
						<div className="column is-8 content">
							<article className="message is-info">
								<div className="message-header">
									<p className="has-text-centered has-text-weight-bold">Memo</p>
								</div>
								<div
									className="message-body has-background-white-bis"
									style={{ borderBottom: 'inset 2px #aaaa88' }}
								>
									<div className="ml-3 mb-6">
										<ul>
											<li>
												参考ページ：
												<a
													href="https://archmapp2.github.io/bulmaJS/src/sub/js/shortBulma.html"
													className="has-tooltip-top has-tooltip-warning has-text-grey has-text-weight-bold is-size-5"
													data-tooltip="[CTRL]キーを押しながら、クリック"
												>
													UseMemo
												</a>
												&nbsp;もご覧ください
											</li>
										</ul>
									</div>
								</div>
							</article>
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>UseMemo</div>
								<div style={{ margin: '2em' }}>
									<form onSubmit={addTodo}>
										<input type="text" onChange={inputTodo} value={todo} />
									</form>
									{!todosNotComplete.length && 'すべて完了です。！'}
									<TodoList
										todos={todosNotComplete}
										completeTodo={completeTodo}
									/>
								</div>
							</div>
							<hr />
						</div>
						<div className="column"></div>
					</div>

					<div className="is-flex is-justify-content-center is-align-items-center">
						準備中！
					</div>
					<button
						className="button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3"
						onClick={() => $$.scrTT('#top')}
					>
						<i className="fa fa-arrow-circle-o-up"></i>&nbsp;&nbsp;トップ
					</button>
				</div>
			</section>
		</>
	)
}

export default UseMemo
