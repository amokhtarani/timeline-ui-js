import React, { useState, useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { ApiProvider } from './APIs';
import { useNavigate, useLocation } from 'react-router-dom';
import { Utils } from '../utils/Utils';


const TimelineEntity = ({timeline}) => {
  let [person, setPerson] = useState([]);
  let [event, setEvent] = useState([]);
  let navigate = useNavigate();
  
  const years = timeline.year + "( " + 
  Utils.gregorianYearToPersianYear(timeline.year) + " )"+ 
    "( " + Utils.gregorianYearToArabicYear(timeline.year) + " )";

    const   handleEventClick = (e) => {
      e.preventDefault();
      ApiProvider.getEventById(timeline.id)
          .then(response=> {
      //       console.log('Response: ' + JSON.stringify(response));
     //     setEvent(response[0]);
         navigate(`/EventForm/${timeline.id}`, {state:{data:JSON.stringify(response[0])}});
        });
     }; 


    const   handlePersonClick = (e) => {
      e.preventDefault();
      ApiProvider.getPersonById(timeline.id)
          .then(response=> {
 //            console.log('Response: ' + JSON.stringify(response));
      //    setPerson(response[0]);
         navigate(`/PersonForm/${timeline.id}`, {state:{data:JSON.stringify(response[0])}});
        });
     }; 
 const formToUpdate = timeline.type === 'person' ?  `/PersonForm/${timeline.id}` : `/EventForm/${timeline.id}`;
 
 const handleClick = (e) => {
  if (timeline.type === "person")  handlePersonClick(e);
  if (timeline.type === 'event')  handleEventClick(e);
 }

   return (
    <div>
       <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
          {years} 
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator> 
           <TimelineContent>
           <Link to={formToUpdate} onClick={handleClick}> {timeline.title} </Link> 
           </TimelineContent>
        </TimelineItem>
      </Timeline>
     
    </div>
  )
}

export default TimelineEntity
