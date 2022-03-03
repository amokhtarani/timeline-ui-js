
import axios from 'axios'


   const serverName = process.env.REACT_APP_SERVER_URL;

   //fetch person
    async function getPersons(params)  {   
       const url = serverName + `api/persons?name=${params}`;
     const res = await axios.get(url);
    return res.data;
  };

  async function getPersonById(params)  {   
    const url = serverName + `api/persons?id=${params}`;
  const res = await axios.get(url);
 return res.data;
};

  //fetch event
   async function  getEvents (params) {
   const url = serverName + `api/events?eventTitle=${params}`;
    const res = await axios.get(url);
   return res.data;
 };

 async function getEventById(params)  {   
  const url = serverName + `api/events?id=${params}`;
const res = await axios.get(url);
return res.data;
};

   //fetch timeline
 async function getTimeline () {
   const url = serverName + 'api/timeline';
   const res = await axios.get(url);
   
    return res.data;
 }
 
 //add person
  async function savePerson (person) {
    console.log("Saving: " + JSON.stringify(person));
   const url = serverName + 'api/persons'
   const res = await axios(url,  {
     method:'POST',
     data: JSON.stringify(person),
     headers: {
      'Content-type': 'application/json',
     }
    });
   const data = await res.data;
    return data;
 }
 
 //update person
 async function updatePerson(person) {
   console.log(JSON.stringify(person));
   const id = person._id;
  const url = serverName + `api/persons?id=${id}`
  console.log(url);
  const res = await axios(url,  {
    method:'PUT',
    data: JSON.stringify(person),
    headers: {
     'Content-type': 'application/json',
    }
   });
  const data = await res.data;
  return data;


 }
 //delete person
 
 //add event
  async function saveEvent (event) {
   const url = serverName + 'api/events';
    const res = await axios(url,  {
      method:'POST',
      data: JSON.stringify(event),
      headers: {
       'Content-type': 'application/json',
      }
     });
    const data = await res.data;
    return data;
 }
//update event
async function updateEvent(event) {
   const id = event._id;
 const url = serverName + `api/events?id=${id}`
 //console.log(url);
 const res = await axios(url,  {
   method:'PUT',
   data: JSON.stringify(event),
   headers: {
    'Content-type': 'application/json',
   }
  });
 const data = await res.data;
 return data;
}
  //edit event
 
 
  //delete event

  export const ApiProvider = {
   getPersons,
   getEvents,
   getTimeline,
   saveEvent,
   savePerson,
   getPersonById,
   updatePerson,
   updateEvent,
   getEventById,
  };