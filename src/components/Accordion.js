import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {useLocation} from "react-router-dom";

const Accordion = ({ title, content, item}) => {

  const [isActive, setIsActive] = useState(false);  
  let navigate = useNavigate();
  const location = useLocation();
  const params = JSON.parse(content)._id;
  const formToUpdate = item === 'person' ?  `/PersonForm/${params}` : `/EventForm/${params}`;

  const   handleClick = (e) => {
    e.preventDefault();
    navigate(formToUpdate, {state:{data:content}});
  }; 
  const body = JSON.parse(content);
  const heading = body.title ? body.title : body.eventTitle;
  const dates = body.dateOfEvent ? body.dateOfEvent : body.dateOfBirth + ' - ' + body.dateOfDeath;
  
  return (
    
    <div className="accordion-item">
      
        <Link to={formToUpdate} onClick={handleClick}> Edit </Link>   
        
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title} </div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{heading}<br />
      {dates} <br /> {body.description} 
      <br /> {body.comments}
      
      </div>}
    </div>
    
  );
};

export default Accordion;
