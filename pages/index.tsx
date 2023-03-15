import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import HeaderContainer from 'components/HeaderContainer/HeaderContainer'
import BodyContainer from 'components/BodyContainer/BodyContainer'
import FooterContainer from 'components/FooterContainer/FooterContainer'

function IndexPage() {
	const [count, setCount] = useState(0)

	const handleAddCountClick = () => {
		setCount((prevCount) => {
			return prevCount + 1
		})
	}

	return (
		<Container>
			<Row>
				<Col>
					<HeaderContainer count={count}></HeaderContainer>
					<BodyContainer
						onAddCountClick={handleAddCountClick}
						onSetCountClick={setCount}
					></BodyContainer>
					<FooterContainer count={count}></FooterContainer>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button data-testid="add-count-button" onClick={handleAddCountClick}>
						add count
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default IndexPage
