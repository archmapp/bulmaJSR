import React, { useState } from 'react'

//Titleコンポーネント(子)
const Title = React.memo(() => {
	console.log('Title component_memo')
	return <h2>Counter_memo Test vol.1</h2>
})

//Buttonコンポーネント(子)
const Button = React.memo(({ handleClick, value }) => {
	console.log('Button child component_memo', value)
	return (
		<button type="button" onClick={handleClick} className="mr-2">
			{value}
		</button>
	)
})

//Countコンポーネント(子)
const Count = React.memo(({ text, countState }) => {
	console.log('Count child component_memo', text)
	return (
		<p>
			{text}: {countState}
		</p>
	)
})
//
const Counter_memo = () => {
	const [firstCountState, setFirstCountState] = useState(0)
	const [secondCountState, setSecondCountState] = useState(10)

	//+ 1 ボタンのstateセット用関数
	const incrementFirstCounter = () => setFirstCountState(firstCountState + 1)

	//+ 10 ボタンのstateセット用関数
	const incrementSecondCounter = () =>
		setSecondCountState(secondCountState + 10)

	//子コンポーネントを呼び出す
	return (
		<>
			<Title />
			<Count text="+ 1&nbsp;&nbsp; ボタン" countState={firstCountState} />
			<Count text="+ 10 ボタン" countState={secondCountState} />
			<Button handleClick={incrementFirstCounter} value={'+1 ボタン'} />
			<Button handleClick={incrementSecondCounter} value={'+10 ボタン'} />
		</>
	)
}

export default Counter_memo
