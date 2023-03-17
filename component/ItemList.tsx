import { Button, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'




import ItemEditButton from 'component/ItemEditButton'


import Item from 'pages/type/item'
// Instrument is Declare global types.

type InstrumentListProps = {
  items: Item[]
  onDeleteItem: any
}

type InstrumentListItemProps = {
  itemNumber: number
  itemName: string
  detail: string
  preItemName: string
}

function ItemList(props: InstrumentListProps) {
  const { items, onDeleteItem } = props
  const [editShow, setEditShow] = useState(false)

  const [editItem, setEditItem] = useState({
    itemNumber: 0,
    itemName: '',
    detail: '',
    preItemName: '',
  })
  const handleClose = () => setEditShow(false);


//   const InStrumentDelete = (event: any) => {
//     onDeleteItem({itemNumber: itemNumber, name: itemName, detail: detail })
   
// }


  const onEditItem = (newItem: InstrumentListItemProps) => {
    setEditItem({
      itemNumber: newItem.itemNumber,
      itemName: newItem.itemName,
      detail: newItem.detail,
      preItemName: newItem.preItemName,
    })
  }

  console.log('check', editItem)
  console.log(editItem.itemNumber)
  console.log(editItem.itemName)
  console.log(editItem.detail)

  return (
    <Table striped bordered hover className="mt-3" data-testid="InstrumentList">
      <thead>
        <tr>
          <th>#</th>
          <th> todo item</th>

        </tr>
      </thead>

      {items.length > 0 && (
        <tbody>
          {items.map((item, index) => {
            const itemData: Item = {
              name: item.name,

            }

            if (
              index + 1 === editItem.itemNumber &&
              item.name === editItem.preItemName
            ) {
              item.name = editItem.itemName


              console.log('editcheck', editItem.itemName)
            }

            return (
              
              <tr>
                 <ItemEditButton itemNumber={index+1} itemName={itemData.name} show={editShow} onHide={handleClose} onEditItem={onEditItem} />
                <td>{index + 1}</td>
                <td>{itemData.name}</td>
                <Button
                  variant="info"
                  className="ms-2"
                  size="sm"
                  onClick={() => setEditShow(true)}
                >
                  edit
                </Button>
                <Button
                  variant="info"
                  className="ms-2"
                  size="sm"
                  onClick={()=> onDeleteItem({itemNumber: index+1, name: itemData.name })}
                >
                  delete
                </Button>
              </tr>
              

            )
          })}
        </tbody>
        
      )}

      
    </Table>
  )
}

export default ItemList