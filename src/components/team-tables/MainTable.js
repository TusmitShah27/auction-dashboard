import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import './mainTable.css'


const MainTable = ( { columns,data } ) => {
  return (
   <div className='table-container'>
        <table>
            <TableHeader columns={columns} />
            <tbody>
                {
                    data.map((rowData,index) => (
                        <TableRow key={index} rowData={rowData} />
                    ))
                }
            </tbody>
        </table>
   </div>
  )
}

export default MainTable
