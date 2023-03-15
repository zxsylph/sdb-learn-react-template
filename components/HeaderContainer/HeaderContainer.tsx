import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

interface HeaderContainerProps {
	count: number
}

function HeaderContainer(props: HeaderContainerProps) {
	const { count } = props

	return (
		<Container>
			<Row>
				<Col>Header {count}</Col>
			</Row>
		</Container>
	)
}

export default HeaderContainer
