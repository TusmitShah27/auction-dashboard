import React ,{useState} from 'react'
// import { PlayerData } from './service/PlayerData';
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { MaleData } from '../service/MaleData';
import Subheader from '../components/Subheader';

const MaleAuction = () => {
   const naviagate = useNavigate()
    const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className='container'>

        <Subheader/>

        <div className="card" style={{margin:'2%'}} >  
            <DataTable 
            value={MaleData.getMaleData()} 
            tableStyle={{maxWidth:'100%',fontSize:'16px', fontWeight:'500',width:'100%',alignSelf:'center'}} 
            showGridlines
            paginator
            rows={10}
            rowsPerPageOptions={[5,10,15,20,25]}
            className='datatable'
            editMode='row'
            dataKey='id'
            selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} 
            onRowClick={(event)=>{
            naviagate(`/player-details/${event.data.Id}`)
          }}
            >
                <Column field='Id' header='ID' />
                <Column field='Player_Name' header='Player Name' />
                <Column field='Mobile_Number' header='Mobile Number' />
                <Column field='Location' header='Location' />
                <Column field='NPL1_NPL2' header='NPL1 / NPL2' />
                <Column field='Age' header='Age' />
                <Column field='Email_Id' header='Email-ID' />
                <Column field='Gender' header='Gender' />
                <Column field='Cricket_Type' header='Playing Type'  />
                <Column body={(rowData)=>{
                return(
                    
                        rowData.status ? <p>rowData.status</p>  : <p>Not Sold</p>
                    
                )
                }} header='Status'  />
                {/* <Column body={editButtonTemplate} headerStyle={{width:'10%',minWidth:'10rem'}} bodyStyle={{ textAlign: 'center' }}></Column> */}
            </DataTable>
          
        </div>
    </div>
  )
}

export default MaleAuction
