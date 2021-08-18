import React, {memo} from 'react'
import Todo from './Todo'

const TodoListCb = ({ todos, completeTodo }) => {
	console.log('TodoListCb')

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

// export default TodoListCb
export default memo(TodoListCb)
// props={ todos, completeTodo } のうち、completeTodoがuseCallbackでキャッシュされていると、todosが更新されない限り、このTodoListCbも更新されない。
