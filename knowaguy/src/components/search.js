import React from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {List} from "./list"
import Button  from 'react-bootstrap/Button'

export function Search(props){
    const [currentSkill, setCurrentSkill] = React.useState("");
    const skillCategory= ["Drywall Installer", "Electrician", "Landscaper", "Plumber","Tile Installer"];
    const [inputText, setInputText] = React.useState("");
    const [isActive, setIsActive] = React.useState(false);
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };
    const [filterParam, setFilterParam] = React.useState(["All"]);

    const handleClick = (event) => {
        setIsActive(current => !current);
        
    }
    const handleDropDownClick = (event) => {
        setCurrentSkill(skillCategory[event.target.value]);

    }
   
  
   
    return(
        <>
           
            <section  className="search">
                <h1 style={{display: isActive ? 'none': 'block'}} >How Can We Help?</h1>
                <div style={{marginTop: isActive ? '2%': ''}} className="input-group input-group-lg mb-3">
                    <input onChange={inputHandler} type="text" className="form-control" placeholder="What are you looking for?" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </section>
            <div className="container filter bg-light">
                        <h4>Filter By</h4>
                        <div className="row justify-content-center">
                        <div className="col-lg-6 col-6 skill">
                            <DropdownButton variant="outline-secondary" id="skill-dropdown" title="Skill">
                    

                                <Button className="dropdown-button"value={0} name="DryWall" onClick={handleDropDownClick}>Drywall</Button>
                                <Button className="dropdown-button"value={1} name="Electrician" onClick={handleDropDownClick}>Electrician</Button>
                                <Button className="dropdown-button"value={2} name="Landscaper" onClick={handleDropDownClick}>Landscaper</Button>
                                <Button className="dropdown-button"value={3} name="Plumber" onClick={handleDropDownClick}>Plumber</Button>
                                <Button className="dropdown-button"value={4} name="Tile Installer" onClick={handleDropDownClick}>Tile Installer</Button>




                            </DropdownButton>
                        </div>
                        
                        </div>
                        
            </div>
            
           <section className="results">
                    
                   <List input={inputText} setList = {props.setList} yourList = {props.yourList} currentSkill = {currentSkill}/>
            
                
                
           </section>
            </>
        
    );
    

}