import React, { useEffect, useState } from 'react'
import NavBarItem from 'component/navbar'

import ItemSearchBox from 'component/ItemSearchBox'
import ItemList from 'component/ItemList'
import Title from 'component/Title'
import Item from 'pages/type/item'
import ItemAddModal from 'component/ItemAddModal'
import getItem from 'component/getItem'

function todoPage() {
	interface DeleteInstrument {
		itemNumber: number
		name: string
		status: boolean
		tagInput: boolean
	}

	const allInstrument = [
		{ name: 'violin', status: false, tagInput: true },
		{ name: 'piano', status: false, tagInput: false },
		{ name: 'guitar', status: false, tagInput: false },
	]
	const [show, setShow] = useState(false)
	const [items, setItems] = useState<Item[]>(allInstrument)
	const [fillItems, setFillItems] = useState<Item[]>(allInstrument)
	const [filldata, setfilldata] = useState<Item[]>(allInstrument)
	const [status, setStatus] = useState(false)
	const [search, setSearch] = useState('')

	const [deleteItem, setDeleteItem] = useState({
		itemNumber: 0,
		itemName: '',
		status: false,
		tagInput: false,
	})

	const onAddNewItem = (newItem: Item) => {
		setItems([...items, { name: newItem.name, status: newItem.status, tagInput: newItem.tagInput }])
		setFillItems([...fillItems, { name: newItem.name, status: newItem.status, tagInput: newItem.tagInput }])
	}

	const handleAddModelClose = () => {
		setShow(false)
	}

	const onDeleteItem = async (Item: DeleteInstrument) => {
		console.log('before Inloop delete', deleteItem)

		await setDeleteItem({
			itemNumber: Item.itemNumber,
			itemName: Item.name,
			status: Item.status,
			tagInput: Item.tagInput,
		})
	}

	const handleSearch = (searchTerm: string) => {
		setSearch(searchTerm)
		loadInstrument(searchTerm)
	}

	const handleNewButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(event)
	}

	const check = (items: any) => {
		if (items.name !== deleteItem.itemName) {
			return items
		}
	}

	const loadInstrument = async (searchTerm: string = '') => {
		setStatus(true)

		const { data } = await getItem({ searchTerm, items })
		if (searchTerm === '' ) {
			setStatus(false)
		} else if (searchTerm !== '') setfilldata(data)
	}

	const fillDelete = () => {
		const result = items.filter(check)
		setItems(result)
		setfilldata(result)

		console.log('result', result)
	}

	useEffect(() => {
		loadInstrument()
	}, [])

	useEffect(() => {
		fillDelete()
	}, [deleteItem])

	return (
		<>
			<NavBarItem />
			<div className="px-4 py-2 d-flex flex-column">
				<Title title="Todo List" appendClassName="mb-2"></Title>
				<ItemSearchBox
					onClick={setShow}
					onSearch={handleSearch}
					onNewButtonClick={handleNewButtonClick}
				/>

				{
					<ItemList
						items={status === true ? filldata : items}
						onDeleteItem={onDeleteItem}
					/>
				}

				{/* {status === false && (<ItemList items={items} onDeleteItem={onDeleteItem} />)} */}
			</div>

			<ItemAddModal
				show={show}
				onHide={handleAddModelClose}
				onAddItem={onAddNewItem}
			/>
		</>
	)
}

export default todoPage
