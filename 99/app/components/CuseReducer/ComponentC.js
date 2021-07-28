import React, { useContext } from 'react'
import { UseContextUseReducer } from '../N/Nreact'

const ComponentC = () => {
	// const count = useContext(UserCount)
	// const { countUseState, setCountUseState } = useContext(UseContextUseReducer)
	const { state, dispatch } = useContext(UseContextUseReducer)

	return (
		<>
			<div>
				<br /><br />
				<p>Componet C UseReducer</p>
				<p>{state.count}</p>
				<button onClick={() => dispatch('INCREMENT')}>+</button>
			</div>{' '}
		</>
	)
}

export default ComponentC
