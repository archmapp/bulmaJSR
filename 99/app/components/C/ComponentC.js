import React, { useContext } from 'react'
import { UseContextUseState } from '../N/Nreact'

const ComponentC = () => {
	// const count = useContext(UserCount)
	const { count, countUseState, setCountUseState } = useContext(UseContextUseState)

	return (
		<>
			<div>
				<p>Componet C</p>
				<p>{count}</p>
			</div>
			<div>
				<p>Componet C UseState</p>
				<p>{countUseState}</p>
				<button onClick={() => setCountUseState(countUseState + 1)}>+</button>
			</div>
		</>
	)
}

export default ComponentC
