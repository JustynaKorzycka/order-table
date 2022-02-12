import React from 'react'
import { DataTable } from '../../types'
interface TableRecordProperties{
  record: DataTable
}

const TableRecord = ({ record }: TableRecordProperties) => {

  return (
    <tr>
      <td>{ record.work_order_id }</td>
      <td>{ record.description }</td>
      <td>{ record.received_date }</td>
      <td>{ record.assigned_to.length === 0 ? '----' : record.assigned_to.map((person, index) => <div key={ index }>
          { person.person_name } | { person.status }
        </div>) }</td>
      <td>{ record.status }</td>
      <td>{ record.priority }</td>
    </tr>
  )
}

export default TableRecord;