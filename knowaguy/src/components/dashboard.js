import React from "react";
import { handyMen } from "../handymen";


export function Dashboard(props){
        
        const[state, setState] = React.useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:""
    })
    const [isActive, setIsActive] = React.useState(false);
    function handleChange(evt) {

        const value = evt.target.value;
      
        setState({
      
          ...state,
      
          [evt.target.name]: value
      
        });
      
      }
    function randomRate(){
        const min =  10.00;
        const max =  50.00;   
        return (Math.round(Math.random() * (max - min) + min * 100) / 100).toFixed(2) + 4;
    }
    function randomSkills(){
        const availableSkills = [
            "Tile Installer",
            "Electrician",
            "Drywall Installer",
            "Landscaper",
            "Plumber"
        ]
        const randomElement = availableSkills[Math.floor(Math.random() * availableSkills.length)];
        return randomElement;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handyMen.push({"first_name": event.target.firstName.value,"last_name": event.target.lastName.value,"phone_number": event.target.phoneNumber.value, "pay_rate": randomRate(),"skills":[randomSkills()]});
    }
    const handleClick = (event) => {
        setIsActive(current => !current);
    }
    return (
        <>
        <div className="d-grid col-6 mx-auto gap-2">
            <button onClick={handleClick} type="button" className="btn btn-lg btn-outline-secondary">{isActive ? 'Back To List': 'Add HandyMan' }</button>
        </div>
        <div className="container dashboard" style={{display: props.data ? 'none': 'block'}}>
        <hr></hr>

            <div className="row parent">
                <div style={{ display: isActive ? 'none' : 'block' 
          
        }} className="col-sm-12 col-lg-10 handyman-list bg-light">
                    <header><h2 className="list-title-desktop">Your List</h2></header>

                    <div className="row list-layout">
                        <div className="col-lg-12 col-sm-12 list-layout">
                            <div className="card list-profiles">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-6 profile-name">
                                            <h6>
                                                <b>John Doe</b>
                                            </h6>

                                        </div>
                                        <div className="col-6 remove-button">
                                            <button type="button" className="btn btn-outline-danger btn-sm">Remove</button>

                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row innercard">
                                        <div className="col-6">
                                            <h7 className="card-subtitle mb-2 text-muted">Phone Number</h7>
                                            <h6 className="card-title">(000)000-0000</h6>
                                            <div className="rate">
                                                <h7 className="card-subtitle mb-2 text-muted">Rate</h7>
                                                <h7 className="card-subtitle fw-bold"> 17.00</h7>
                                            </div>
                                        </div>
                                        <div className="col-6 skills">
                                            <h6 className="card-subtitle text-muted">Plumber</h6>
                                            <h6 className="card-subtitle text-muted">Electrician</h6>
                                            <h6 className="card-subtitle text-muted">Landscaper</h6>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
                <div style={{ display: isActive ? 'block' : '' 
          
        }} className="col-lg-2 col-sm-12 bg-light handyman-signup">
                            <header><h2 className="invite">Invite A New Guy</h2></header>
                            <form className="signup" onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input value={state.firstName} onChange={handleChange} name="firstName" className="form-control" id="firstName" type="text" aria-describedby="firstNameField" />
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input value={state.lastName} onChange={handleChange} type="text" name="lastName" className="form-control" id="lastName" aria-describedby="lastNameField" />
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input value={state.email} onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailField" name="email" />
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input value={state.phoneNumber} onChange={handleChange} type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumberField" name="phoneNumber" />
                                        <button type="submit" className="btn btn-lg btn-outline-secondary invite">Send Invite</button>


                                    </div>


                                </div>
                            </form>
                </div>

            </div>
        </div>
        </>
    );
}