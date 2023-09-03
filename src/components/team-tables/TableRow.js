import React from 'react'

const TableRow = ({ rowData }) => {
  return (
    <tr>
        {
            rowData.map((data,index) => (
                <td key={index}>
                    {data}
                </td>
            ))
        }
    </tr>
  )
}

export default TableRow
