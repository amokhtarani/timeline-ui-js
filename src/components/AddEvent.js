import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddEvent = ({onAdd}) => {

    const [eventTitle, setEventTitle] = useState('')
    const [categories, setCategories] = useState('')
    const [dateOfEvent, setYear] = useState('')
    const [related, setRelated] = useState('')
    const [description, setDescription] = useState('')
    const [tag, setTag] = useState('')
    const [comments, setComments] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
    
        onAdd({eventTitle,categories,dateOfEvent,description,comments,tag,related});

    setEventTitle('');
    setCategories('');
    setYear('');
    setRelated('');
    setDescription('');
    setTag('');
    setComments('');
    }

  return (
     <div>
         <div>
            <h1>Add a new event</h1>
            <Link to='/home'>Go Back</Link>
        </div> 

        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Event Title</label>
        <input
            type='text'
            placeholder='Event Title'
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Categories</label>
        <input
            type='text'
            placeholder='Event categories (Conflict, Religious, ...)'
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Year of Event</label>
        <input
            type='text'
            placeholder='Year of Event (e.g. 1267 CE, 126 BC )'
            value={dateOfEvent}
            onChange={(e) => setYear(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Related Events</label>
        <input
            type='text'
            placeholder='Related events'
            value={related}
            onChange={(e) => setRelated(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Description</label>
        <input
            type='textArea'
            placeholder='Description of event'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Comments</label>
        <input
            type='text'
            placeholder='Comments'
            value={comments}
            onChange={(e) => setComments(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Tags</label>
        <input
            type='text'
            placeholder='Tags'
            value={tag}
            onChange={(e) => setTag(e.target.value)}
        />
        </div>

      <input type='submit' value='Save Event' className='btn btn-block' />
        </form>
     </div>
  )
}

export default AddEvent
