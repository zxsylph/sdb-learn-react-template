import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

interface FooterContainerProps {
	count: number
}

function FooterContainer(props: FooterContainerProps) {
	const { count } = props
	return (
		<Container>
			<Row>
				<Col>Footer {count}</Col>
			</Row>
		</Container>
	)
}

export default FooterContainer
