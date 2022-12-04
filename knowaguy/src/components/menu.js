import React from "react";
import { handyMen } from "../handymen";
import { Dashboard } from "./dashboard";


export function MainMenu(){
    const [isActive, setIsActive] = React.useState(false);
    const handleClick = (event) => {
        setIsActive(current => !current);
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
                    </div>
                      {handyMen.map(handyman =>
                        <div className="container result">
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
                                <button className=" btn btn-md btn-outline result">Add to List</button>

                                    <ul className="skill-list">
                                        {handyman.skills.map(handyman =>
                                            
                                                <li className="result skill">{handyman}</li>
                                        )}
                                    </ul>

                                
                                
                                
                                
                                
                            </ul>
                        </div>
                    )}
                
           </section>
           <Dashboard data={isActive}/>
        </>
        
    );
    

}
