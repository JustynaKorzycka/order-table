import { DataTable } from '../../types'
import TableRecord from './TableRecord'
import './Table.css';
interface Props{
  data: DataTable[]
}

const OrderTable = ({ data }: Props) => {

  return (
    <div className='tableDiv'>
    <table className='orderTable'>
      <thead>
        <tr>
          <th>WO ID</th>
          <th>Description</th>
          <th>Received date</th>
          <th>Assigned to</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
          {data.map((record, index) => <TableRecord key={ index } record={ record } />)}
      </tbody>
      </table>
      {data.length === 0 && 'No match'}
      </div>
  )
}

export default OrderTable