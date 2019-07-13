import React from 'react';
import ProgrammerList from './ProgrammerLIst';
import './Programmer.css';
import 'tachyons';
const Programmer = (props) =>{
    const programmerArraylist = [
        {
            id: 1,
            name :'Mehedi',
            work : 'Fullstack'

        },
        {
            id: 2,
            name :'Nazmul',
            work : 'Backend'

        },
        {
            id: 3,
            name :'Imran',
            work : 'Frontend'

        },
        {
            id: 4,
            name :'Asraful',
            work : 'MongoDB'

        }
    ]

     const arraycard = programmerArraylist.map( (programmerCard, i) =>{

        return <ProgrammerList
            
            id =   { programmerArraylist[i].id }
            name = { programmerArraylist[i].name }
            work = {  programmerArraylist[i].work }
            
        />
            
     })
    return (
        <div className="mainpage">
            
            <h1>Welcome to our website</h1>

            {arraycard}
            <br/>
            
            <button>Contact To Hire</button>

        </div>
    )
}
export default Programmer;