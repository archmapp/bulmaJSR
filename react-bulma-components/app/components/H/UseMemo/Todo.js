import React from 'react'

const Todo = ({ todo, completeTodo }) => {
	console.log('UseMemo Todo')

	return (
		<li
			style={
				todo.isCompleted === true ? { textDecorationLine: 'line-through' } : {}
			}
		>
			{todo.todo}&nbsp;
			<button onClick={() => completeTodo(todo.id)}>完了</button>
		</li>
	)
}

export default Todo
