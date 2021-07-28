import React, {memo} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, completeTodo }) => {
	console.log('UseMemo TodoList')

	return (
		<ul>
			{todos.map((todo, index) => (
				<Todo
					todo={todo}
					completeTodo={completeTodo}
					key={index}
				/>
			))}
		</ul>
	)
}

export default memo(TodoList)
