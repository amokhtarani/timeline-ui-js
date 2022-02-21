import React from 'react';
import TimelineEntity from './TimelineEntity'


const TimelineEntities=({timelines}) => {
  //sort the entries on year
timelines.sort((a,b) => (Number(a.year.split(" ")[0]) > Number(b.year.split(" ")[0]))?1 : -1);

timelines.sort((a,b) => {
     if( Number(a.year.split(" ")[0]) === Number(b.year.split(" ")[0])){
      a.text += ", " + b.text;       
      timelines = timelines.filter((item => item !== a));
    } 
    return timelines;
});

  return (
    <>
    {timelines.map((a, index) => (
      <TimelineEntity  key={index} timeline={a}  />
    ))}
  </>
  )
}

export default TimelineEntities
