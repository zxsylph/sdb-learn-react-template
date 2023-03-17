import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

import Item from 'pages/type/item'


function ItemAddModal(props: any) {
  const { show, onHide, onAddItem } = props
  const [forceRender, setForceRender] = useState(false)
  const forceRerender = () => setForceRender(!forceRender)

  const [name, setName] = useState('')
  

  const InStrumentname = (event: any) => {
    setName(event.target.value)
    console.log(name)
  }

  

  const AddInstrument = (event: any) => {
    // add instrument to database then rerender
    // ...
    event.preventDefault()
    const itemData: Item = {
      name: name,

    }

    onAddItem(itemData)

    forceRerender()
    onHide()
  }

  return (
    <Modal data-testid="InstrumentAddModal" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Instrument</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          AddInstrument(e)
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
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button type="submit" variant="success">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ItemAddModal

