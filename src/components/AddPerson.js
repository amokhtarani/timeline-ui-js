import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddPerson = ({onAdd}) => {

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
    const [dobera, setDobera] = useState('')
    const [dodera, setDodera] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
    
        console.log('dodera: ' + dodera);
        if(dodera == 'BCE'){
             setDateOfDeath(-dateOfDeath);
             console.log('dateOfDeath: ' + dateOfDeath);
            }
        if(dobera == 'BCE')setDateOfBirth(-dateOfBirth);
       

        onAdd({title,categories,dateOfBirth, dobera, dateOfDeath, dodera,
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
    setDobera('');
    setDodera('');
    }

    const handleDoderaChange = (e => {
        setDodera(e.target.value);
      //  if(e.target.value == 'BCE') setDateOfDeath(-dateOfDeath);
    });

    const handleDoberaChange = (e => {
        setDobera(e.target.value);
     //   if(e.target.value == 'BCE') setDateOfBirth(-dateOfBirth);
    });

  return (
     <div>
         <div>
            <h1>Add a new Person</h1>
            <Link to='/home'>Go Back</Link>
        </div> 

        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Name</label>
        <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div>
       <div className='form-control'>
        <label>Title</label>
        <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Categories</label>
        <input
            type='text'
            placeholder='Poetry, philosopy, ...'
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Year of Birth</label>
        <input
            type='text'
            placeholder='Year of Birth '
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
        />
        </div>
        <div>
        <label>
            <input
                name="dobera"
                type="radio"
                className="radio"
                
                id="BC"
                value="BCE"
                onChange={(e) => setDodera(e.target.value)}
                />
                BCE               
        </label>
        </div>
        <div>
        <label>
            <input
                name="dobera"
                type="radio"
                id="CE"
                value="CE"
              
                className="radio"
                onChange={handleDoberaChange}
                />
                CE               
        </label>
       </div>


        <div className='form-control'>
        <label>Year of Death</label>
        <input
            type='text'
            placeholder='Year of Death '
            value={dateOfDeath}
            onChange={(e) => setDateOfDeath(e.target.value)}
        />
        </div>
        <div>
        <label>
            <input
                name="dodera"
                type="radio"
                className="radio"
                
                id="BC"
                value="BCE"
                onChange={handleDoderaChange}
                />
                BCE               
        </label>
        </div><div>
        <label>
            <input
                name="dodera"
                type="radio"
                id="CE"
                value="CE"
                
                className="radio"
                onChange={handleDoderaChange}
                />
                CE               
        </label>
       </div>

        <div className='form-control'>
        <label>Nationality </label>
        <input
            type='text'
            placeholder='Nationality'
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
        />
        </div>
        <div className='form-control'>
        <label>Related </label>
        <input
            type='text'
            placeholder='Related persons, topics'
            value={related}
            onChange={(e) => setRelated(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Description</label>
        <textarea
            
            placeholder='Description of the person'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </div>

        <div className='form-control'>
        <label>Comments</label>
        <textarea
            
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

      <input type='submit' value='Save Person' className='btn btn-block' />
        </form>
     </div>
  )
}
export default AddPerson

