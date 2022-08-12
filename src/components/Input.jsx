import React, {useState} from "react";

function Input() {
	const [value, setValue] = useState('Text from input displays here');

	return (
		<div>
			<h1>{value}</h1>
			<input 
			style={{width: 300}}
			type="text"
			value={value}
			onChange={e => setValue(e.target.value)}
			/>
		</div>
	)
}
export default Input;