import React from 'react'

function Title(props: TitleProp) {
	const { title, appendClassName = 'pt-2' } = props

	return (
		<>
			<div
				className={`d-flex flex-row justify-content-center align-item-center ${appendClassName}`}
			>
				<h2>{title}</h2>
			</div>
		</>
	)
}

export default Title

interface TitleProp {
	title: string
	appendClassName?: string
}
