import React, { useState } from 'react'
import './playerInfo.css'
import Select from 'react-select';
import { useParams } from 'react-router-dom';

const PlayerInfo = () => {

    const playerId = useParams()
    console.log(playerId)
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
       <div className='listWrap'>
            <div className='playerImage'>
                <img src='./images/logo.jpeg' alt='photo'/>
            </div>
            <div className='playerInformation'>
                    <h2>Player Information</h2>
                    <div className='playerInformation-display'>
                        <table align='center' border="2px" width="100%"  cellSpacing="5">
                            <tr>
                                <td>Name of the Player</td>
                                <td>Tusmit Shah</td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td>7039738033</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Dombivli</td>
                            </tr>
                            <tr>
                                <td>Village</td>
                                <td>Bhojay</td>
                            </tr>
                            <tr>
                                <td>Played in NPL</td>
                                <td>NPL-2</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>23</td>
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
    </div>
  )
}

export default PlayerInfo
