// https://reffect.co.jp/react/react-usecontext-understanding

import React, { useState, useRef } from 'react'
import ComponentA from '../C/ComponentA'

function Nreact() {
	const count = 100
	const [countUseState, setCountUseState] = useState(100)
	const valueUseState = {
		count,
		countUseState,
		setCountUseState
	}

	return (
		<>
			<section className="section">
				<div className="container">
					<div>
						<div className="is-size-4 has-text-weight-medium">[React]</div>
						Nreact
					</div>
					<div className="is-flex is-justify-content-center is-align-items-center">
						<div>useRef</div>
						<AppuseRef />
						<AppuseRefValue />
					</div>
					<hr />

					<div className="is-flex is-justify-content-center is-align-items-center">
						<div>useReducer</div>
						<Counter />
						<CounterActions />
						<CounterObject />
					</div>
					<hr />

					<div className="is-flex is-justify-content-center is-align-items-center">
						<div>useContext</div>
						<div style={{ margin: '2em', textAlign: 'center' }}>
							<h1>Learn useContext</h1>
							{/* <UserCount.Provider value={100}>
								<ComponentA />
							</UserCount.Provider> */}
						</div>
						<div style={{ margin: '2em', textAlign: 'center' }}>
							<h1>Learn useContextUseState</h1>
							<UseContextUseState.Provider value={valueUseState}>
								<ComponentA />
							</UseContextUseState.Provider>
						</div>
					</div>
					<hr />

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

	function AppuseRef() {
		const inputEl = useRef(null)
		const [name, setName] = useState('')
		const handleOnChange = (e) => {
			setName(e.target.value)
			console.log($$.Id('inputEl').value)
			console.log($$.Id('inputEl') === inputEl.current)
			console.log(inputEl.current.getBoundingClientRect())
		}
		const handleOnClick = () => $$.Id('inputEl').focus()
		// const handleOnClick = () => inputEl.current.focus()

		return (
			<div style={{ margin: '2em' }}>
				<input
					id="inputEl"
					ref={inputEl}
					type="text"
					value={name}
					onChange={handleOnChange}
				/>
				<p>名前：{name}</p>
				<button onClick={handleOnClick}>フォーカスを当てる</button>
			</div>
		)
	}
}

function AppuseRefValue() {
	const [count, setCount] = useState(0)
	const countRef = useRef(0)
	const handleOnClick = () => setCount(count + 1)
	const handleOnClick2 = () => countRef.current++

	console.log('再描写')

	return (
		<div style={{ margin: '2em' }}>
			<div>{count}</div>
			<button onClick={handleOnClick}>Countアップ</button>
			<div>{countRef.current}</div>
			<button onClick={handleOnClick2}>Count2アップ</button>
		</div>
	)
}

import { useReducer } from 'react'

const initialState = {
	count: 0,
}

// (state, action) => newState
const reducer = (state, action) => {
	if (action === 'INCREMENT') {
		return { count: state.count + 1 }
	} else {
		return { count: state.count - 1 }
	}
}

// const [state, dispatch] = useReducer(reducer, initialState);
function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div style={{ margin: '2em' }}>
			<h1>Counter</h1>
			<h2>カウント: {state.count}</h2>
			{/* state内の値を更新するためにはdispatchを利用します。またdispatchに入れる引数にはreducerで設定したactionを指定する必要があります。 */}
			<button onClick={() => dispatch('INCREMENT')}>+</button>
			<button onClick={() => dispatch('DECREMENT')}>-</button>
		</div>
	)
}

const initialStateActions = {
	count: 2,
}

const reducerActions = (state, action) => {
	switch (action) {
		case 'INCREMENT':
			return { count: state.count + 1 }
		case 'DECREMENT':
			return { count: state.count - 1 }
		case 'DOUBLE_INCRE':
			return { count: state.count * 2 }
		case 'RESET':
			return { count: 0 }
		default:
			return state
	}
}

function CounterActions() {
	const [state, dispatch] = useReducer(reducerActions, initialStateActions)

	return (
		<div style={{ margin: '2em' }}>
			<h1>Counter Actions</h1>
			<h2>カウント: {state.count}</h2>
			<button onClick={() => dispatch('INCREMENT')}>+</button>
			<button onClick={() => dispatch('DECREMENT')}>-</button>
			<button onClick={() => dispatch('DOUBLE_INCRE')}>++</button>
			<button onClick={() => dispatch('RESET')}>0</button>
		</div>
	)
}

const initialStateObject = {
	count: 2,
}

const reducerObject = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.payload }
		case 'DECREMENT':
			return { count: state.count - action.payload }
		default:
			return state
	}
}

function CounterObject() {
	const [state, dispatch] = useReducer(reducerObject, initialStateObject)

	return (
		<div style={{ margin: '2em' }}>
			<h1>Counter Object</h1>
			<h2>カウント: {state.count}</h2>
			<button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
				+
			</button>
			<button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>
				-
			</button>
		</div>
	)
}

export const UserCount = React.createContext()

export const UseContextUseState = React.createContext()

export default Nreact
