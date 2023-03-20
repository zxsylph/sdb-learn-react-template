import React from 'react'
import Form from 'react-bootstrap/Form'
import { FormControlProps } from 'react-bootstrap/FormControl'

function Input(props: InputProp) {
	return (
		<>
			<Form.Control {...props} />
		</>
	)
}

export default Input

export interface InputProp extends FormControlProps {}
