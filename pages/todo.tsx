import React, { useEffect,useState } from "react";
import InstrumentAddButton from "component/navbar";


import ItemSearchBox from "component/ItemSearchBox";
import ItemList from "component/ItemList";
import Title from "component/Title";
import Item from "pages/type/item";
import ItemAddModal from "component/ItemAddModal";
import getItem from "component/getItem";


function todoPage() {

  
  // interface Item  {
  //   name: string
    
  // }


  interface DeleteInstrument {
    itemNumber:number
    name: string
    
  }
  

  const allInstrument = [
    { name: 'violin' },
    { name: 'piano' },
    { name: 'guitar' },


  ]
  const [show, setShow] = useState(false)
  const [items, setItems] = useState<Item[]>(allInstrument)
  const [fillItems, setFillItems] = useState<Item[]>(allInstrument)
  const [deleteItem, setDeleteItem] = useState({
    itemNumber: 0,
    itemName: '',
    
  })



  const onAddNewItem = (newItem: Item) => {
    setItems([...items, { name: newItem.name}])
    setFillItems([...fillItems, { name: newItem.name }])
  }

  const handleAddModelClose = () => {
    setShow(false)
  }



  const onDeleteItem = async (Item: DeleteInstrument) => {
    console.log('before Inloop delete', deleteItem)

    await setDeleteItem({
      itemNumber: Item.itemNumber,
      itemName: Item.name,
     
    })
  }


  const handleSearch = (searchTerm: string) => {
    loadInstrument(searchTerm)
  }


  const handleNewButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event)
  }

  const check = (items: any) => {
    if (
      items.name !== deleteItem.itemName 
      
    ) {
      return items
    }
  }



  const loadInstrument = async (searchTerm: string = '') => {
    const { data } = await getItem({ searchTerm, items })

    setItems(data)
  }




  const fillDelete = () => {
    const result = items.filter(check)
    setItems(result)
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
    
    <InstrumentAddButton />
    <div className="px-4 py-2 d-flex flex-column">
    <Title title="Todo List" appendClassName="mb-2"></Title>
    <ItemSearchBox
          onClick={setShow}
          onSearch={handleSearch}
          onNewButtonClick={handleNewButtonClick}
        />
    <ItemList  items={items} onDeleteItem = {onDeleteItem}/>
    </div>

    <ItemAddModal
        show={show}
        onHide={handleAddModelClose}
        onAddItem={onAddNewItem}
      />

   </>
  )




}

export default todoPage;




