import React from "react";
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams, useLocation } from 'react-router-dom'

const PersonForm = ({onAdd}) => {

   let {state } = useLocation();
  //console.log(state.data);

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
               <h1>Edit Person ({JSON.parse(state.data).name})</h1>
               <Link to='/home'>Go Back</Link>
           </div> 
   
           <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
           <div className='form-control'>
           <label>Name</label>
           <input
               {...register("name")}  
               type='text'
               placeholder='Name'
                name="name"
       //         onChange={(e) => setName(e.target.value)}
           />
           </div>
          <div className='form-control'>
           <label>Title</label>
           <input
               {...register("title")}  
               type='text'
               placeholder='Title'
               title="title"
       //         onChange={(e) => setTitle(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Categories</label>
           <input
               {...register('categories')}  
               type='text'
               placeholder='Poetry, philosopy, ...'
               name="categories"
         //       onChange={(e) => setCategories(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Year of Birth</label>
           <input
               {...register('dateOfBirth')}  
               type='text'
               placeholder='Year of Birth (e.g. 1267 CE, 126 BC )'
                name="dateOfBirth"
         //       onChange={(e) => setDateOfBirth(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Year of Death</label>
           <input
               {...register('dateOfDeath')}  
               type='text'
               placeholder='Year of Death (e.g. 1267 CE, 126 BC )'
               name="dateOfDeath"
        //       onChange={(e) => setDateOfDeath(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Nationality </label>
           <input
               {...register('nationality')}  
               type='text'
               placeholder='Nationality'
               name="nationality"
         //      onChange={(e) => setNationality(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Related </label>
           <input
                {...register('related')}  
                type='text'
               placeholder='Related persons, topics'
               name="related"
         //      onChange={(e) => setRelated(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Description</label>
           <input
              {...register('description')}  
               type='textArea'
               placeholder='Description of the person'
               name='description'
        //        onChange={(e) => setDescription(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Comments</label>
           <input
               {...register('comments')}  
               type='text'
               placeholder='Comments'
               name='comments'
         //      onChange={(e) => setComments(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Tags</label>
           <input
               {...register('tag')}  
               type='text'
               placeholder='Tags'
              name="tag"
         //      onChange={(e) => setTag(e.target.value)}
           />
           </div>
   
            <input type='submit' value='Update Person' className='btn btn-block' />
           </form> 
        </div>
     )


}
export default PersonForm