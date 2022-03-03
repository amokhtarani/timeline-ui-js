import React from "react";
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams, useLocation } from 'react-router-dom'

const EventForm = ({onAdd}) => {

   let {state } = useLocation();
 // console.log(state.data);

     const { register, handleSubmit } = useForm(
    {
         defaultValues : JSON.parse(state.data)
    });
          
    const onSubmit = (data,e) => {
        e.preventDefault()
         onAdd(data);
    }

    return (
        <div>
            <div>
               <h1>Edit Event ({JSON.parse(state.data).eventTitle})</h1>
               <Link to='/home'>Go Back</Link>
           </div> 
           <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
        <label>Event Title</label>
        <input
            {   ...register("eventTitle")}  
            type='text'
            placeholder='Event Title'
            name="eventTitle"
        />
        </div>
        <div className='form-control'>
        <label>Categories</label>
        <input
            {   ...register("categories")}  
            type='text'
            placeholder='Event categories (Conflict, Religious, ...)'
            name="categories"
        />
        </div>

        <div className='form-control'>
        <label>Year of Event</label>
        <input
            {   ...register("dateOfEvent")}  
            type='text'
            placeholder='Year of Event (e.g. 1267 CE, 126 BC )'
            name="dateOfEvent"
        />
        </div>

        <div className='form-control'>
        <label>Related Events</label>
        <input
            {   ...register("related")}  
            type='text'
            placeholder='Related events'
            name="related"
        />
        </div>

        <div className='form-control'>
        <label>Description</label>
        <textarea
            {   ...register("description")}  
            type='textArea'
            placeholder='Description of event'
            name="description"
        />
        </div>

        <div className='form-control'>
        <label>Comments</label>
        <textarea
            {   ...register("comments")}  
            type='text'
            placeholder='Comments'
            name="comments"
        />
        </div>

        <div className='form-control'>
        <label>Tags</label>
        <input
            {   ...register("tag")}  
            type='text'
            placeholder='Tags'
            name="tag"
        />
        </div>

      <input type='submit' value='Update Event' className='btn btn-block' />
        </form>

        </div>
    )
}
export default EventForm
