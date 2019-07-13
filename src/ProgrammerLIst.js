import React from 'react';
import './Programmer.css'


const ProgrammerList = (props) =>{
    
    return(
        <div className ="avaterstyle ma4 bg-light-blue grow shawdow-4 dib pa3 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avater"	/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>

    </div>
    )

}
export default ProgrammerList;