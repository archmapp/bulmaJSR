// https://qiita.com/seira/items/8a170cc950241a8fdb23

import React, { useState, useCallback } from 'react'

//Titleコンポーネント(子)
const Title = React.memo(() => {
	console.log('Title component_useCallback')
	return <h2>Counter_useCallback Test vol.1</h2>
})

//Buttonコンポーネント(子)
const Button = React.memo(({ handleClick, value }) => {
	console.log('Button child component_useCallback', value)
	return (
		<button type="button" onClick={handleClick} className="mr-2">
			{value}
		</button>
	)
})

//Countコンポーネント(子)
const Count = React.memo(({ text, countState }) => {
	console.log('Count child component_useCallback', text)
	return (
		<p>
			{text}: {countState}
		</p>
	)
})
//
const Counter_useCallback = () => {
	const [firstCountState, setFirstCountState] = useState(0)
	const [secondCountState, setSecondCountState] = useState(10)

	const incrementFirstCounter = useCallback(
		() => setFirstCountState(firstCountState + 1),
		[firstCountState]
	)

	// useCallbackでメモ化されたコールバック関数は、React.memoでメモ化されたコンポーネントへ渡して利用することで初めて不要な再描画をスキップ出来るようになります。
	const incrementSecondCounter = useCallback(
		() => setSecondCountState(secondCountState + 10),
		[secondCountState]
	)

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

export default Counter_useCallback
