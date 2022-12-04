import React from "react";
import { handyMen } from "../handymen";
import { Dashboard } from "./dashboard";
import Button  from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { userList } from "../userlist";



export function MainMenu(){
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = (event) => {
        setIsActive(current => !current);
    }
    const handleAdd = (event,index) => {
       userList.push(handyMen[index]);
       userList.forEach(element => {
        console.log(element);

       });
    }
    return(
        <>
            <section  className="search">
                <h1 style={{display: isActive ? 'none': 'block'}} >How Can We Help?</h1>
                <div style={{marginTop: isActive ? '2%': ''}} className="input-group input-group-lg mb-3">
                    <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    <button onClick={handleClick} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </section>
            
           <section style={{display: isActive ? 'block': 'none'}}className="results">
                    <div className="container filter bg-light">
                        <h4>Filter By</h4>
                        <div className="row justify-content-center">
                        <div className="col-lg-6 col-6 skill">
                            <DropdownButton variant="outline-secondary" id="skill-dropdown" title="Skill">
                                <Dropdown.Item href="#/action-1">Drywall Installer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Electrician</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Landscaper</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Plumber</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tile Installer</Dropdown.Item>

                            </DropdownButton>
                        </div>
                        <div className="col-lg-6 col-6 rate">
                            <DropdownButton variant="outline-secondary" id="rate-dropdown" title="Rate">
                                <Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Descending</Dropdown.Item>
                            </DropdownButton>
                        </div>

                        </div>
                        
                    </div>
                      {handyMen.map((handyman,id) =>
                        <div className="container result">
                            <div className="border">
                            <ul>
                                <li className="result fname">
                                    {handyman.first_name}
                                </li>
                                <li className="result lname">
                                    {handyman.last_name}
                                </li>
                                <li className="result phone">
                                    <b>Phone Number: </b>
                                    {handyman.phone_number}
                                </li>
                                <li className="result rate">
                                    <b>Rate: $</b>
                                    {handyman.pay_rate}
                                </li>
                                <Button onClick={(event)=>handleAdd(event,id)} size="sm" variant="outline-secondary"className="result">Add to List</Button>

                                    <ul className="skill-list">
                                        {handyman.skills.map(handyman =>
                                            
                                                <li className="result skill">{handyman}</li>
                                        )}
                                    </ul>

                                
                                
                                
                                
                                
                            </ul>
                        </div>
                        </div>
                    )}
                
           </section>
           <Dashboard data={isActive} newArr={userList}/>
        </>
        
    );
    

}
