import React from "react";
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

const EditPerson = ({onEdit, data}) => {

    const { person, handleSubmit } = useForm({
        defaultValues : data
    });

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [categories, setCategories] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [dateOfDeath, setDateOfDeath] = useState('')
    const [related, setRelated] = useState('')
    const [description, setDescription] = useState('')
    const [nationality, setNationality] = useState('')
    const [tag, setTag] = useState('')
    const [comments, setComments] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
    
        onEdit({title,categories,dateOfBirth,dateOfDeath,
            description,comments,tag,related, name, nationality});

    setTitle('');
    setCategories('');
    setDateOfBirth('');
    setDateOfDeath('');
    setRelated('');
    setDescription('');
    setTag('');
    setComments('');
    setNationality('');
    setName('');
    }
    console.log("I am in PersonForm");
    return (
        <div>
            <div>
               <h1>Add/Edit Person</h1>
               <Link to='/home'>Go Back</Link>
           </div> 
   
           <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
           <label>Name</label>
           <input
               ref={person}  
               type='text'
               placeholder='Name'
               value={name}
               onChange={(e) => setName(e.target.value)}
           />
           </div>
          <div className='form-control'>
           <label>Title</label>
           <input
               ref={person}  
               type='text'
               placeholder='Title'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Categories</label>
           <input
               ref={person}  
               type='text'
               placeholder='Poetry, philosopy, ...'
               value={categories}
               onChange={(e) => setCategories(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Year of Birth</label>
           <input
               ref={person}  
               type='text'
               placeholder='Year of Birth (e.g. 1267 CE, 126 BC )'
               value={dateOfBirth}
               onChange={(e) => setDateOfBirth(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Year of Death</label>
           <input
               ref={person}  
               type='text'
               placeholder='Year of Death (e.g. 1267 CE, 126 BC )'
               value={dateOfDeath}
               onChange={(e) => setDateOfDeath(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Nationality </label>
           <input
               ref={person}  
               type='text'
               placeholder='Nationality'
               value={nationality}
               onChange={(e) => setNationality(e.target.value)}
           />
           </div>
           <div className='form-control'>
           <label>Related </label>
           <input
                ref={person}  
                type='text'
               placeholder='Related persons, topics'
               value={related}
               onChange={(e) => setRelated(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Description</label>
           <input
               ref={person}  
               type='textArea'
               placeholder='Description of the person'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Comments</label>
           <input
               ref={person}  
               type='text'
               placeholder='Comments'
               value={comments}
               onChange={(e) => setComments(e.target.value)}
           />
           </div>
   
           <div className='form-control'>
           <label>Tags</label>
           <input
               ref={person}  
               type='text'
               placeholder='Tags'
               value={tag}
               onChange={(e) => setTag(e.target.value)}
           />
           </div>
   
         <input type='submit' value='Save Person' className='btn btn-block' />
           </form>
        </div>
     )


}
export default EditPerson