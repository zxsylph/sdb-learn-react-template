import Item from "pages/type/item"

const allInstrument = [
  { name: 'violin', detail: 'lorem ipsum' },
  { name: 'piano', detail: 'lorem ipsum' },
  { name: 'guitar', detail: 'lorem ipsum' },
]

const getItem = async (
  param: GetInstrumentParam
): Promise<GetInstrumentResponse> => {
  const url = '/v1/instrument'
  const params = {
    ...param,
  }

  //   const response = await axios.get(url, params)
  //   return response.data
  const { searchTerm = '', items } = param
  //test data search and items
  console.log(searchTerm, items)

  const list = items.filter((item) => {
    if (!searchTerm) {
      return true
    }

    return item.name.includes(searchTerm) 
  })
  return {
    data: list,
  }
}

export default getItem

interface GetInstrumentResponse {
  data: Item[]
}

interface GetInstrumentParam {
  searchTerm: string
  items: Item[]
}
