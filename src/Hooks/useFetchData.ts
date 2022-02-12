import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { getData } from '../features/dataTableSlice';
import { DataTableState } from '../types';

const useFetchData = (): DataTableState => {
  const dispatch = useAppDispatch();
  const dataTable = useAppSelector(state => state.dataTable);

   useEffect(() => {
    dispatch(getData());
   }, [])
  
  return dataTable
}

export default useFetchData

