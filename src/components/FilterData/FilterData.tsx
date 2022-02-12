import { useState, ChangeEvent, useEffect } from 'react'
import './FilterData.css';
interface FilterDataProperties{
  handleSetSearchData: (toSearch: string) => void
}

const FilterData = ({handleSetSearchData}:FilterDataProperties) => {

  const [searchInput, setSearchInput] = useState<string>('')

  useEffect(() => {
    handleSetSearchData(searchInput)
  }, [searchInput]);

  const handleChange = (event:ChangeEvent<HTMLInputElement> ) => {
    setSearchInput(event.target.value);
  }

  return <input type="text" value={searchInput} placeholder='Find order by description...' onChange={handleChange} />
}

export default FilterData