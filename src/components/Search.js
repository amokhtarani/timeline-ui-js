import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ApiProvider } from './APIs';
import Accordion from './Accordion';

const Search = ({onSearch}) => {
    const serverName = process.env.REACT_APP_SERVER_URL;

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    let [persons, setPersons] = useState([]);
    let [events, setEvents] = useState([]);

     
    const onSubmitPerson =   (e) => {
        e.preventDefault()
        ApiProvider.getPersons(e.target[0].value)
        .then(response => {
     //       console.log(JSON.stringify(response));
         setPersons(response);
         });
         setName('');
    }

    const onSubmitEvent = (e) => {
        e.preventDefault()
        ApiProvider.getEvents(e.target[0].value)
        .then(response => {
    //        console.log(JSON.stringify(response));
         setEvents(response);
         });
        
     setTitle('');
    }
 
   
    return (
     
    <div>
            <div>
                <h1>Search</h1>
            <Link to='/home'>Go Back</Link>
            </div>
            
            <form className='add-form' onSubmit={onSubmitPerson}>
                <p>Search persons</p>
            <div className='form-control'>
            <label>By Name</label>
            <input
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <input type='submit' value='Search' className='btn btn-block' />
 
            </form>
            <>
            <div className="accordion">
                {persons.map(( person , index) => (                    
                    <Accordion key={index} title={person.name} content={JSON.stringify(person)} item="person" />
                     
                ))}
            </div>
            </>
            {/* <ShowPersonsModal persons={persons} />  */}
 
                 
            <p>Search events</p>
            <form className='add-form' onSubmit={onSubmitEvent}>
                
            <div className='form-control'>
            <label>By Title</label>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <input type='submit' value='Search' className='btn btn-block' />
             {/* <ShowEventModal events={events} /> */}
            </form> 
             <>
            <div className="accordion">
                {events.map(( event , index) => (                    
                    <Accordion key={index} title={event.eventTitle} content={JSON.stringify(event)} item="event" />                     
                ))}
            </div>
            </> 
 
    </div>
  )
}

export default Search
