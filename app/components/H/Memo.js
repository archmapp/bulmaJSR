// https://reffect.co.jp/react/react-memo
// memoではコンポーネントに対して設定を行い、
// useCallbackでは関数に対して設定を行っていましたが
// useMemoでは値に対して設定をおこないます。

import React from 'react'
import { useState, useCallback } from 'react'
import TodoList from './Memo/TodoList'
import TodoListCb from './Callback/TodoListCb'

const Memo = () => {
	console.log('Memo')

	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([
		{
			todo: 'Learn vue.js',
			isCompleted: false,
		},
		{
			todo: 'Learn React',
			isCompleted: false,
		},
		{
			todo: 'Learn Laravel',
			isCompleted: false,
		},
	])

	const inputTodo = (e) => {
		setTodo(e.target.value)
	}

	const addTodo = (e) => {
		e.preventDefault()
		setTodos((todos) => [...todos, { todo: todo, isCompleted: false }])
		setTodo('')
	}

	const completeTodo = (index) => {
		console.log('Todo', index)
		let newTodos = todos.map((todo, todoIndex) => {
			if (todoIndex === index) {
				todo.isCompleted = !todo.isCompleted
			}
			return todo
		})
		setTodos(newTodos)
	}

	// useCallback

	const [todoC, setTodoC] = useState('')
	const [todosC, setTodosC] = useState([
		{
			todo: 'CLearn vue.js',
			isCompleted: false,
		},
		{
			todo: 'CLearn React',
			isCompleted: false,
		},
		{
			todo: 'CLearn Laravel',
			isCompleted: false,
		},
	])

	const inputTodoC = (e) => {
		setTodoC(e.target.value)
	}

	const addTodoC = (e) => {
		e.preventDefault()
		setTodosC((todosC) => [...todosC, { todo: todoC, isCompleted: false }])
		setTodoC('')
	}

	// Memo更新時に、completeTodoCのキャッシュを利用して、新たにcompleteTodoCを作成しない。
	const completeTodoC = useCallback(
		(index) => {
			console.log('completeTodoC:', index)
			let newTodos = todosC.map((todo, todoIndex) => {
				if (todoIndex === index) {
					todo.isCompleted = !todo.isCompleted
				}
				return todo
			})
			setTodosC(newTodos)
		},
		[todosC]
	)

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
								Memo <span className="is-size-4">ライブラリ</span>
							</h1>
							<h2 className="subtitle is-5 has-text-white">
								<strong className="subtitle is-6 has-text-danger">Memo</strong>
								・
								<strong className="subtitle is-6 has-text-danger">Memo</strong>
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
													Memo
												</a>
												&nbsp;もご覧ください
											</li>
										</ul>
									</div>
								</div>
							</article>
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>Memo</div>
								<div style={{ margin: '2em' }}>
									<form onSubmit={addTodo}>
										<input type="text" onChange={inputTodo} value={todo} />
									</form>
									<TodoList todos={todos} completeTodo={completeTodo} />
								</div>
							</div>
							<hr />

							{/* useCallback */}
							<div className="is-flex is-justify-content-center is-align-items-center">
								<div>useCallback</div>
								<div style={{ margin: '2em' }}>
									<form onSubmit={addTodoC}>
										<input type="text" onChange={inputTodoC} value={todoC} />
									</form>
									<TodoListCb todos={todosC} completeTodo={completeTodoC} />
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

export default Memo
