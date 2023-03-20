import React from 'react'

import Input from './Input'
import { InputProp } from './Input'

function TextInput(props: InputProp) {
	const { type, ...restProps } = props
	return (
		<>
			<Input type="text" {...restProps}></Input>
		</>
	)
}

export default TextInput
