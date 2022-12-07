import React from "react";
import { handyMen } from "../handymen";


export function Dashboard(props){
        
        
    const [isActive, setIsActive] = React.useState(false);
    
  
    const listItems = props.yourList.map((handyman,id) => {
        return  <div className="card list-profiles">
        <div className="card-header">
            <div className="row">
                <div className="col-6 profile-name">
                    <h6>
                        <b>{handyman.first_name} {handyman.last_name}</b>
                    </h6>

                </div>
                <div className="col-6 remove-button">
                    <button onClick={() => handleRemove(id) } type="button" className="btn btn-outline-danger btn-sm">Remove</button>

                </div>
                <div className="card-body">
                    <div className="row innercard">
                        <div className="col-6">
                            <h7 className="card-subtitle mb-2 text-muted">Phone Number</h7>
                            <h6 className="card-title">{handyman.phone_number}</h6>
                            <div className="rate">
                                <h7 className="card-subtitle mb-2 text-muted">Rate</h7>
                                <h7 className="card-subtitle fw-bold"> {handyman.pay_rate}</h7>
                            </div>
                        </div>
                        <div className="col-6 skills">
                            <ul className="skill-list my-list">
                                {handyman.skills.map(handyman =>

                                    <li className="result skill my-list">{handyman}</li>
                                )}
                            </ul>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
    });
   
    const handleClick = (event) => {
        setIsActive(current => !current);
    }
    function handleRemove(id){
        const newList = props.yourList.filter((h) => h.id !== props.yourList[id].id);
        props.setList(newList);
        console.log(newList);
    
        
        
    }
    return (
        <>
       
        <div className="container dashboard" >

            <div className="row parent">
                <div  className="col-sm-12 col-lg-10 handyman-list bg-light">
                    <header><h2 className="list-title-desktop">Your List</h2></header>

                    <div  className="row list-layout">
                        <div className="col-lg-12 col-sm-12 list-layout">
                            
                                           {listItems}


                                        
                                    
                                
                                
                            
                        </div>

                       
                    </div>
                </div>
                

            </div>
        </div>
        </>
    );
}