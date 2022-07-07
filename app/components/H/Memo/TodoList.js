import React, {memo} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, completeTodo }) => {
	console.log('TodoList')

	return (
		<ul>
			{todos.map((todo, i) => (
				<Todo
					todo={todo}
					completeTodo={completeTodo}
					index={i}
					key={i}
				/>
			))}
		</ul>
	)
}

export default memo(TodoList)
