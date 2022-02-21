import React from 'react';
import { useState, useEffect, Redirect } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import AddPerson from './components/AddPerson'
import AddEvent from './components/AddEvent'
import Search from './components/Search'
import Home from './components/Home'
import TimelineEntities from './components/TimelineEntities'
import { ApiProvider } from './components/APIs'
import PersonForm from './components/PersonForm'
import EventForm from './components/EventForm'


const App = () => {
  const serverName = process.env.REACT_APP_SERVER_URL;
    let [timelines,  setTimelines] = useState([]); 
    const [loading, setLoading] = useState(false);
 
useEffect(() => {
  const fetchTimeline = async () => {
    const timelinesFromServer = await ApiProvider.getTimeline()
    setTimelines(timelinesFromServer)
  }
  fetchTimeline();
}, [])

useEffect(() => {
  const addEvent = async () => {
    const resp = await ApiProvider.saveEvent()
//    console.log(resp);
  addEvent();
}}, [])



if (loading) {
  return <p>Data is loading...</p>;
}


//search for person or event
const getItem = async (params) => {
  if(params.name) return ApiProvider.getPersons(params);
  if(params.title) return ApiProvider.getEvents(params);
}

  return (
    <Router>     
        <Header
        title="Timeline"
        />
        <div className='container'>
        <Routes>
          <Route path='/home' element={<Home />} />          
          <Route path='/timeline' element={<TimelineEntities  timelines={timelines}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/addPerson' element={<AddPerson onAdd={ApiProvider.savePerson}/>} />
          <Route path='/addEvent' element={<AddEvent  onAdd={ApiProvider.saveEvent}/>} />
          <Route path='/search' element={<Search onSearch={ getItem} />}  />
          <Route path='/personForm/:id' element={<PersonForm onAdd={ApiProvider.updatePerson}/>}  />
          <Route path='/eventForm/:id' element={<EventForm onAdd={ApiProvider.updateEvent}/>}  />
         </Routes>
        <Outlet />
        </div>
        <Footer />    
    </Router>
  )
}

export default App;
