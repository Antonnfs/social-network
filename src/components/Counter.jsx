import React, {useState} from "react";

function Counter() {
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}
	function decrement() {
		setCount(count - 1)
	}
	return (
		<div>
			<button onClick={increment}>+</button>
			<h1 style={{display: 'inline', padding: 20 }}>{count}</h1>
			<button onClick={decrement}>-</button>
		</div>
	)
}
export default Counter;