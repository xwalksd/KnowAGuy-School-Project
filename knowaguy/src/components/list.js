import { React, useState } from 'react'
import { handyMen } from '../handymen';
import Button  from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export function List(props) {
  
    const handleAdd = (event,id) => {
        
        props.setList(current => [...current, filteredData[id]]);
        console.log(props.yourList);

    };
    //create a new array by filtering the original array
    const filteredData = handyMen.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            if(props.currentSkill !== ''){
                return el.skills.some((x) => x.includes(props.currentSkill))
            }

        }
        //return the item which contains the user input
        else {
            return  (el.first_name.toLowerCase().includes(props.input) || el.last_name.toLowerCase().includes(props.input) || el.phone_number.toLowerCase().includes(props.input));
        }
    })
    const handleClick = (event) => {
        console.log(event.target.value);
    }
    const listItems =  filteredData.map((handyman,id) => { 
        return <div className="container result">
        <div  className="border">
            <ul>
                <li key={id} className="result fname">
                    {handyman.first_name}
                </li>
                <li key={id} className="result lname">
                    {handyman.last_name}
                </li>
                <li key={id} className="result phone">
                    <b>Phone Number: </b>
                    {handyman.phone_number}
                </li>
                <li key={id} className="result rate">
                    <b>Rate: $</b>
                    {handyman.pay_rate}
                </li>
                <li className='result'>
                   <Button onClick={(event) => handleAdd(event,id)} size="sm" variant="outline-secondary" className="result">Add to List</Button>

                </li>
                
                <ul className="skill-list">
                   {handyman.skills.map(handyman =>
                       
                           <li className="result skill">{handyman}</li>
                   )}

               </ul>

            

            </ul>
        </div>
    </div>
    });
    return(
        <div>
            
            {listItems}

        </div>


        
       
    )
}

