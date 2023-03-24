import { Button, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Switch } from "antd"



import ItemEditButton from 'component/ItemEditButton'


import Item from 'pages/type/item'
// import Item from 'antd/es/list/Item'
// Instrument is Declare global types.

type InstrumentListProps = {
  items: Item[]
  onDeleteItem: any
}

type ItemListItemProps = {
  itemNumber: number
  itemName: string
  preItemName: string
  status: boolean
  tagInput: boolean
}

type save = {
  name: string
  status: boolean
  tagInput: boolean
}

function ItemList(props: InstrumentListProps) {
  const { items, onDeleteItem } = props
  const [editShow, setEditShow] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [namestatus, setNameStatus] = useState('')
  const [numstatus, setNumStatus] = useState(false)
  const [taginput, setTagInput] = useState(false)
  const [tagItem, setTagItem] = useState('')
  const [Default, setDefault] = useState({

    itemNumber: 0,
    itemName: '',
    status: false,
    tagInput: false,


  })

  const [cancelTag, setCancelTag] = useState({
    itemNumber: 0,
    itemName: '',
    status: false,
    tagInput: false,
  })



  const [editItem, setEditItem] = useState({
    itemNumber: 0,
    itemName: '',
    preItemName: '',
    status: false,
  })
  const handleClose = () => setEditShow(false);





  const saveStatus = (e: save) => {

    setNameStatus(e.name)
    setNumStatus(e.status)
    console.log("setNameStatus", e.name)


  }

  const changeEdit = (e:any) => {

    console.log(e.target.value)
    setTagItem(e.target.value)

  }



  const onEditItem = (newItem: ItemListItemProps) => {
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
              tagInput: item.tagInput,

            }

            if (
              index + 1 === editItem.itemNumber &&
              item.name === editItem.preItemName
            ) {
              item.name = editItem.itemName

              editItem.itemName = ''

            }


            if (item.name === namestatus) {

              item.status = numstatus ? false : true
            }

            if (item.name === cancelTag.itemName) {
              console.log("cancel",cancelTag.itemName)
              item.tagInput = false
            }


            if (item.name === Default.itemName) {
              console.log("edit ok",Default.itemName)
              item.tagInput = true
            }

           



            return (

              <tr>
                {(!item.tagInput) && (<>
                <td>{index + 1}</td>
                <td>{itemData.name}</td>
                <td>
                  <Button
                    variant="info"
                    className="ms-2"
                    size="sm"
                    onClick={(e: any) => {

                      e.preventDefault()
                      // setEditShow(true)
                      setDefault({
                        itemNumber: index + 1,
                        itemName: itemData.name,
                        status: itemData.status,
                        tagInput: itemData.tagInput,

                      })





                    }}
                  >
                    edit
                  </Button>
                  {/* < ItemEditButton itemNumber={Default.itemNumber} itemName={Default.itemName} show={editShow} onHide={handleClose} onEditItem={onEditItem} /> */}

                </td>

                <Button
                  variant="info"
                  className="ms-2"
                  size="sm"
                  onClick={() => onDeleteItem({ itemNumber: index + 1, name: itemData.name, status: itemData.status })}
                >
                  delete
                </Button>

                <Switch checked={item.status} onClick={() => { saveStatus({ name: item.name, status: item.status, tagInput: item.tagInput }) }} />

                </>)}


                {item.tagInput && (<>
                 
                  <input  defaultValue={item.name}   onChange={changeEdit}/>
                  <Button 
                  variant="info"
                  className="ms-2"
                  size="sm"
                  onClick={()=>{

                        setEditItem({

                          itemNumber: index+1,
                          itemName: tagItem,
                          preItemName: item.name,
                          status: item.status,


                        })

                       item.tagInput = false



                  }}  
                  
                  
                  >
                    ok
                  </Button>
                  <Button
                  variant="info"
                  className="ms-2"
                  size="sm"
                    onClick={(e: any) => {

                      setCancelTag({
                        itemNumber: index + 1,
                        itemName: itemData.name,
                        status: itemData.status,
                        tagInput: itemData.tagInput,

                      })

                      setDefault({
                        itemNumber: 0,
                        itemName: '',
                        status: false,
                        tagInput: false,


                      })


                    }
                    }
                  >
                    cancel
                  </Button>
                </>)}


              </tr>






            )
          })}
        </tbody>

      )}


    </Table>
  )
}

export default ItemList