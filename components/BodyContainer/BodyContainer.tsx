import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap'

import { getData } from './genData'

interface BodyContainerProps {
	onAddCountClick: () => void
	onSetCountClick: (count: number) => void
}

function BodyContainer(props: BodyContainerProps) {
	const { onAddCountClick, onSetCountClick } = props
	const [list, setList] = useState<number[]>([])

	const handleAddOneToListClick = () => {
		setList((prevList) => {
			return [...prevList, +new Date()]
		})
	}

	const loadList = async () => {
		console.log('loadList')
		const newList = await getData()
		setList(newList)
	}

	useEffect(() => {
		console.log('useEffect')
		loadList()
	}, [])

	return (
		<Container>
			<Row>
				<Col>Body</Col>
			</Row>
			{list &&
				list.map((item) => {
					return (
						<Row key={item}>
							<Col>{item}</Col>
						</Row>
					)
				})}
			<Row>
				<Col>
					<Button
						data-testid="set-count-zero-button"
						onClick={handleAddOneToListClick}
					>
						add one to list
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default BodyContainer
