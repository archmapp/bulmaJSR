import React from 'react'

const Todo = ({ todo, completeTodo, index }) => {
	console.log('TodoCb')

	return (
		<li
			style={
				todo.isCompleted === true ? { textDecorationLine: 'line-through' } : {}
			}
		>
			{todo.todo}&nbsp;
			<button onClick={() => completeTodo(index)}>完了</button>
		</li>
	)
}

export default Todo
