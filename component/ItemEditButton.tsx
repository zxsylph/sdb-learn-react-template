import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'




type InstrumetEditButtonProps = {
  itemNumber: number
  itemName: string
  show: boolean
  onHide: () => void
  onEditItem: any
}


type InstrumentEditItem = {
  itemNumber: number,
  itemName: string,
  preItemName: string
}



function ItemEditButton(props: InstrumetEditButtonProps) {
  const { itemNumber, itemName, show, onHide, onEditItem } = props

  const [editName, setEditName] = useState('')
 
  const InStrumentname = (event: any) => {
    setEditName(event.target.value)
    console.log('editName', editName)
  }


  const AddInstrument = (event: any) => {
    event.preventDefault()
    console.log("save")
    console.log("namechange", editName)
  

    onHide()
  }

  const EditInstrument = (event: any) => {
    // add instrument to database then rerender
    // ...
    event.preventDefault()
    const editItem: InstrumentEditItem = {
      itemNumber: itemNumber,
      itemName: editName,
      preItemName:itemName

    }

    onEditItem(editItem)

    onHide()
  }




  return (
    <Modal  fullscreen={""} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item : {itemName}</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          EditInstrument(e)
        }}
      >
        <Modal.Body>
          <div className="form-group">
            <label>Instrument name</label>
            <input
              className="form-control"
              id="Instrumentname"
              placeholder="Enter instrument"
              required
              onChange={InStrumentname}
            />
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="success">
            Save
          </Button>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
export default ItemEditButton