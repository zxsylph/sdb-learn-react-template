import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import TextInput from 'component/TextInput'
import Button from 'component/Button'


function ItemSearchBox(props: InstrumentSearchBoxProp) {
  const { onSearch, onClick, onNewButtonClick } = props

  // const onNewButtonClick = () => onClick(true);

  const handleButtonClick = (event: any) => {
    onClick(true);
    onNewButtonClick(event)

  }

  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
    
  }

  const handleSearchButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onSearch(searchTerm)
  }

  return (
    <>
      <div className="d-flex flex-row">
        <TextInput
          className="flex-grow"
          placeholder="Search Term"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></TextInput>
        <Button onClick={handleSearchButtonClick} className="ms-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
        <Button onClick={handleButtonClick} className="ms-2">
          New
        </Button>
      </div>
    </>
  )
}

export default ItemSearchBox

interface InstrumentSearchBoxProp {
  onClick: any
  onSearch: (searchTerm: string) => void
  onNewButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
