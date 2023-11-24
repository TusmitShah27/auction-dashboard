import React, { useEffect, useState } from 'react'
import './playerInfo.css'
// import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { PlayerData } from '../../service/PlayerData';
// import { MaleData } from '../../service/MaleData';



const PlayerInfoFemale = () => {

    // Player Details Fetched from the Json File Player Data --------------------

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
    // const data = MaleData.getMaleData()
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

    }, [idAsInt]);

    // ---------------------xxxxxxxxxxx---------------------------------------
    

    // Teams Select and Storing in the Teams Array
    // const [value, setValue] = useState(null);
    // const handleChange = (event) =>{
    //     console.log("Value",event)
    //     setValue(event)         
    // };

    // const [amount, setAmount] = useState(0);
    // const handleAmount = (event) => {
    //     const text = event.target.value; // Extract the input value from the event
    //     console.log("Amount", text);
    //     setAmount(text);
    //   };
      

    // const [teams, setTeams] = useState([
    //     {label:'Team 1',players:[], status:'Open'},
    //     {label:'Team 2',players:[], status:'Open'},
    // ]);

    // const addPlayerToTeam = (teamName, playerName, amount) => {
    //     console.log("Check",teamName,playerName,amount)
    //     const updatedTeams = teams.map((team) => (
    //         team.label === teamName
    //         ? 
    //         {
    //             label:team.label,
    //             players: [...team.players, { playerName, amount }],
    //             status: 'Updated',
    //          }
    //         : 
    //         team
    //     ));
    //     console.log("Player Details",updatedTeams)
    //     setTeams(updatedTeams);
    //     console.log("Set Team",teams);
    //   };

    // -------------xxxxxxxx--------xxxxxxxxx-----------------
  

    function extractDriveFileId(url) {
        const idMatch = url.match(/id=([^&]+)/);
        return idMatch ? idMatch[1] : ''; // Return the extracted ID or an empty string if not found
      }


  return (
    <div>
    {
        playerDetails.map((player) => (
    
       <div className='listWrap'>
            <div className='playerImage'>
            
            {
                player.Photo && ( 
                <img 
                src={`https://drive.google.com/uc?export=view&id=${extractDriveFileId(player.Photo)}`}
                alt='Drive Uploaded Pic'
                />   
         )}
            
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

                    {/* <div className='teamSelect'>
                    
                        <Select
                            options={ teams.map((team) => ({value:team.label,label:team.label}))}
                            onChange={handleChange}
                            value={value}
                            placeholder="Select Team"
                            className='teamSelect-options'
                         />

                        <input type='number' name='price' placeholder='Enter Amount' onChange={(text) => handleAmount(text)} value={amount}/>  
                        
                    </div>
                    <button className='btn' onClick={() => {
                        if(value){
                            console.log("Before adding player:", teams);
                            addPlayerToTeam(value.label, player.Player_Name, amount);
                            console.log("After adding player:", teams);
                        }
                        else{
                            alert("Please Select a team");
                            console.log("Please Select a team");
                        }     
                    }}>
                        Sold
                    </button> */}
                    

            </div>
   
       </div>

    ))
    };      
    </div>
  )

  
}



export default PlayerInfoFemale
