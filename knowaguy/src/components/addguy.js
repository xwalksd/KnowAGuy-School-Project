import React from "react";

export function AddGuy(props){
    const[state, setState] = React.useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        pay_rate: "",
        skills:[]
    });
    function handleChange(event) {

        const value = event.value;
      
        setState({
      
          ...state,
      
          [event.name]: value
      
        });
      
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        props.yourList.push({"first_name": event.target.firstName.value,"last_name": event.target.lastName.value,"phone_number": event.target.phoneNumber.value, "pay_rate": event.target.payRate.value , "skills": [event.target.skillOne.value, event.target.skillTwo.value,event.target.skillThree.value]});
        console.log(props.yourList);
    }
    return( 
    
    <div  className="col-lg-12 col-sm-12 bg-light handyman-signup">
                            <header><h2 className="invite">Invite A New Guy</h2></header>
                            <form className="signup" onSubmit={handleSubmit}>
                                <div className="row ">
                                    <div className="col-lg-12">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <input defaultValue={state.firstName} onChange={handleChange} name="firstName" className="form-control" id="firstName" type="text" aria-describedby="firstNameField" />
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <input defaultValue={state.lastName} onChange={handleChange} type="text" name="lastName" className="form-control" id="lastName" aria-describedby="lastNameField" />
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input defaultValue={state.phoneNumber} onChange={handleChange} type="text" className="form-control" id="phoneNumber" aria-describedby="phoneNumberField" name="phoneNumber" />
                                        <label htmlFor="payRate" className="form-label">Pay Rate</label>
                                        <input defaultValue={state.pay_rate} onChange={handleChange} type="text" className="form-control" id="payRate" aria-describedby="patRateField" name="payRate" />
                                        <label htmlFor="skill" className="form-label">Skill One</label>
                                        <input defaultValue={state.skills[0]} onChange={handleChange} type="text" className="form-control" id="skillOne" aria-describedby="first-skill" name="skillOne" />
                                        <label htmlFor="skill" className="form-label">Skill Two</label>

                                        <input defaultValue={state.skills[1]} onChange={handleChange} type="text" className="form-control" id="skillTwo" aria-describedby="second-skill" name="skillTwo" />
                                        <label htmlFor="skill" className="form-label">Skill Three</label>

                                        <input defaultValue={state.skills[2]} onChange={handleChange} type="text" className="form-control" id="skillThree" aria-describedby="third-skill" name="skillThree" />

                                        
                                        <button type="submit" className="btn btn-lg btn-outline-secondary invite">Send Invite</button>
                                        


                                    </div>


                                </div>
                            </form>
                </div>
    );
}
