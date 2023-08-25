import React from 'react'
import { PlayerData } from './service/PlayerData';
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column';
import { NavLink } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai'

const PlayersList = () => {

    // const columns = [
    //     { field: 'Id', header: 'ID' },
    //     { field: 'Player_Name', header: 'Player Name' },
    //     { field: 'Mobile_Number', header: 'Mobile Number' },
    //     { field: 'Location', header: 'Location' },
    //     { field: 'NPL1_NPL2', header: 'NPL1 / NPL2' },
    //     { field: 'Cricket_Type', header: 'Playing Type' },
    //     { field: 'Age', header: 'Age' },
    //     { field: 'Gender', header: 'Gender' },
    //     { field: 'Email_Id', header: 'Email-ID' },
        
    // ];

    const editButtonTemplate = (rowData) =>{
        const playersDetailsPath = `/player-details/${rowData.Id}`
        return(
            <NavLink to={playersDetailsPath}>
                <AiOutlineEdit className='icon'/>
            </NavLink>
        )
    }


  return (
    <div className="card" style={{margin:'2%'}} >  
        <DataTable 
        value={PlayerData.getData()} 
        tableStyle={{maxWidth:'100%',fontSize:'16px', fontWeight:'500',width:'100%',alignSelf:'center'}} 
        showGridlines
        paginator
        rows={10}
        rowsPerPageOptions={[5,10,15,20,25]}
        className='datatable'
        editMode='row'
       dataKey='id'
        >
            {/* {
                columns.map((col, index) => (
                    <Column key={col.field} field={col.field} header={col.header} sortable />
                
                ))
            } */}
            <Column field='Id' header='ID' />
            <Column field='Player_Name' header='Player Name' />
            <Column field='Mobile_Number' header='Mobile Number' />
            <Column field='Location' header='Location' />
            <Column field='NPL1_NPL2' header='NPL1 / NPL2' />
            <Column field='Age' header='Age' />
            <Column field='Email_Id' header='Email-ID' />
            <Column field='Gender' header='Gen
            der' />
            <Column field='Cricket_Type' header='Playing Type' />
            <Column body={editButtonTemplate} headerStyle={{width:'10%',minWidth:'10rem'}} bodyStyle={{ textAlign: 'center' }}></Column>
        </DataTable>
      
    </div>
  )
}

export default PlayersList
