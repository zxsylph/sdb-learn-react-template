import { Button, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Switch } from "antd"



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
  preItemName: string
  status: boolean
}

type save = {
  name:string
  status:boolean
}

function ItemList(props: InstrumentListProps) {
  const { items, onDeleteItem } = props
  const [editShow, setEditShow] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [namestatus, setNameStatus] = useState('')
  const [numstatus, setNumStatus] = useState(false)
  const [Default, setDefault] = useState({

    itemNumber: 0,
    itemName: '',
    status: false,


  })

  const [editItem, setEditItem] = useState({
    itemNumber: 0,
    itemName: '',
    preItemName: '',
    status: false,
  })
  const handleClose = () => setEditShow(false);


  //   const InStrumentDelete = (event: any) => {
  //     onDeleteItem({itemNumber: itemNumber, name: itemName, detail: detail })

  // }


  const saveStatus = (e: save) => {
   
    setNameStatus(e.name)
    setNumStatus(e.status)
    console.log("setNameStatus",e.name )


  }



  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)

  }



  const onEditItem = (newItem: InstrumentListItemProps) => {
    setEditItem({
      itemNumber: newItem.itemNumber,
      itemName: newItem.itemName,
      preItemName: newItem.preItemName,
      status: newItem.status,
    })
  }



  return (
    <Table striped bordered hover className="mt-3" >
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
              status: item.status,

            }

            if (
              index + 1 === editItem.itemNumber &&
              item.name === editItem.preItemName
            ) {
              item.name = editItem.itemName

              editItem.itemName = ''
              console.log("name", item.name)
              console.log("pre", editItem.preItemName)
              console.log('editcheck', editItem.itemName)
            }


            if (item.name === namestatus) {

              item.status = numstatus ? false : true
            }


            return (

              <tr>

                <td>{index + 1}</td>
                <td>{itemData.name}</td>
                <td>
                  <Button
                    variant="info"
                    className="ms-2"
                    size="sm"
                    onClick={(e: any) => {

                      e.preventDefault()
                      setEditShow(true)
                      setDefault({
                        itemNumber: index + 1,
                        itemName: itemData.name,
                        status: itemData.status,

                      })



                    }}
                  >
                    edit
                  </Button>
                  < ItemEditButton itemNumber={Default.itemNumber} itemName={Default.itemName} show={editShow} onHide={handleClose} onEditItem={onEditItem} />
                </td>

                <Button
                  variant="info"
                  className="ms-2"
                  size="sm"
                  onClick={() => onDeleteItem({ itemNumber: index + 1, name: itemData.name, status: itemData.status })}
                >
                  delete
                </Button>

                <Switch checked={item.status} onClick={() => { saveStatus({name: item.name,status:item.status}) }} />


              </tr>


            )
          })}
        </tbody>

      )}


    </Table>
  )
}

export default ItemList