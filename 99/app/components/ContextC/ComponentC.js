import React from 'react'
import { useCountContext } from '../context/CountContext'

const ComponentC = () => {
	const { count, setCount, countDown } = useCountContext()

  return (
		<div>
			<br />
			<br />
			<p>Componet C ContextComponent</p>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={countDown}>-</button>
		</div>
	)
}

export default ComponentC
