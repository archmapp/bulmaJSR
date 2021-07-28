import React, {memo} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, completeTodo }) => {
	console.log('TodoList')

	return (
		<ul>
			{todos.map((todo, index) => (
				<Todo
					todo={todo}
					completeTodo={completeTodo}
					index={index}
					key={index}
				/>
			))}
		</ul>
	)
}

export default memo(TodoList)
