import React, { useEffect, useState } from 'react'
import './playerInfo.css'
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { PlayerData } from '../../service/PlayerData';

const PlayerInfo = () => {

    const [playerDetails, setPlayerDetails] = useState([]);

    const { id } = useParams(); // Get the 'id' parameter from the URL as a string

    // Check if id is a valid integer
    const idAsInt = /^\d+$/.test(id) ? parseInt(id, 10) : null;
    
    if (idAsInt !== null) {
      // Conversion was successful, idAsInt now holds the integer value
      console.log("Count ->",idAsInt);
     
    } else {
      // Handle the case where 'id' is not a valid integer
      console.error("Invalid 'id' parameter");
    }

    useEffect(()=>{
    const data = PlayerData.getData()

    if (Array.isArray(data)) {
    // Check if data is an array
        if (data[idAsInt - 1]) {
        // Check if data[idAsInt - 1] exists
        setPlayerDetails([data[idAsInt - 1]]);
            console.log("Data", data[idAsInt - 1]);
        } 
        else {
            console.error("Player not found"); // Handle the case where player not found
            }
        } 
    else {
        console.error("Invalid data format"); // Handle the case where data is not an array
    }

    },[]);
    

    const options = [
        {
            label:"Team 1",
            value:"team-1"
        },
        {
            label:"Team 2",
            value:"team-2"
        },
        {
            label:"Team 3",
            value:"team-3"
        },
        
    ];

    const [value, setValue] = useState("");

    const [amount, setAmount] = useState("")

    const handleAmount = (text) =>{
        console.log("Amount", text);
        setAmount(text.target.value);
    }

    const handleChange = (event) =>{
        console.log("Value",event)
        setValue(event)         
    }


  return (
    <div>
    {
        playerDetails.map((player) => (

       <div className='listWrap'>
            <div className='playerImage'>
                <img src='./images/logo.jpeg' alt='My Logo'/>
            </div>
            <div className='playerInformation'>
                    <h2>Player Information</h2>
                    <div className='playerInformation-display'>
                   
           

                        <table align='center' border="2px" width="100%"  cellSpacing="5">
                            
                                <tr>
                                    <td>Name of the Player</td>
                                    <td>{player.Player_Name}</td>
                                </tr>                         
                                <tr>
                                    <td>Location</td>
                                    <td>{player.Location}</td>
                                </tr>
                                <tr>
                                    <td>Village</td>
                                    <td>{player.Village}</td>
                                </tr>
                                <tr>
                                    <td>Played in NPL</td>
                                    <td>{player.NPL1_NPL2}</td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>{player.Age}</td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td>{player.Mobile_Number}</td>
                                </tr>
                            </table>
                        
                 </div>

                    <div className='teamSelect'>
                    
                        <Select
                            options={options}
                            onChange={handleChange}
                            value={value}
                            placeholder="Select Team"
                            className='teamSelect-options'
                         />

                        <input type='number' name='price' placeholder='Enter Amount' onChange={(text) => handleAmount(text)}/>  
                        
                    </div>
                    <button className='btn'>
                    Sold
                    </button>

            </div>

          
       </div>

    ))
    };      
    </div>
  )
}

export default PlayerInfo
