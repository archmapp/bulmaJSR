// https://qiita.com/seira/items/42576765aecc9fa6b2f8

// https://qiita.com/seira/items/9e38204758030cd5442a
// React.memoはpropsの変更のみをチェック、コンポーネントが返した描画結果を記録してメモ化します。
// またReact.memoでコンポーネントをラップしていても、その実装内でuseStateやuseContext利用している場合、その変化に応じた再描画は発生します。
// React.memoは、メモ化したいコンポーネントをラップして使います。
// メモ化するコンポーネントは、親コンポーネントからpropsを受け取る子コンポーネントです。

import React, { useMemo, useState } from 'react'

const CUseMemo1 = () => {
	const [count01, setCount01] = useState(0)
	const [count02, setCount02] = useState(0)

	const result01 = () => setCount01(count01 + 1)
	const result02 = () => setCount02(count02 + 1)

	// const square = () => {
	//   let i = 0
	//   while (i < 2000000000) i++
	//   return 7 * 7
	//   // return count02 * count02
	// }

	const square = useMemo(() => {
		let i = 0
		while (i < 2000000000) i++
		// while (i < 200000000000) i++
		return 7 * 7
	// 	return count02 * count02
	}, [count02])

	return (
		<>
			<div>result01: {count01}</div>
			<div>result02: {count02}</div>
			{/* <div>square: {square()}</div> */}
			<div>square: {square}</div>
			<button onClick={result01} className="mr-2 mt-2">
				increment
			</button>
			<button onClick={result02}>increment</button>
		</>
	)
}

export default CUseMemo1
