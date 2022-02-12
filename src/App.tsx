import { useCallback, useEffect, useState } from 'react';
import './App.css';
import FilterData from './components/FilterData/FilterData';
import Loading from './components/Loading/Loading';
import OrderTable from './components/Table/OrderTable';
import useFetchData from './Hooks/useFetchData';
import { DataTable } from './types';


const App = () => {

  const [filterData, setFilterData] = useState<DataTable[]>([]);
  const dataTable = useFetchData()
  
  useEffect(() => {
    setFilterData(dataTable.data)
  }, [dataTable])
  
  const handleSetSearchData = useCallback((toSearch: string) : void=> {
    const filterData = dataTable.data.filter((record) => record.description.toLowerCase().includes(toSearch.toLowerCase()))
    setFilterData(filterData);
  },[filterData, setFilterData])

  return (
    <div className="wrapper">
      <h1>Order table</h1>
      <FilterData handleSetSearchData={handleSetSearchData} />
      { dataTable.status !== 'success' ? <Loading /> : <OrderTable data={ filterData } /> }
    </div>
  );
}

export default App;
