import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState();
  //For times when the color is wrong 
  const [error, setError] = useState(false);
  //For the default value in the submit 
  const [list, setList] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
  <>
    <section className='container'>
      <h3>Color Generator</h3> 
      <form onSubmit={handleSubmit}>
        <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#4169E1' />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
    <section className='colors'>
      <h4>List goes here </h4> 
    </section>
  </>
  )
}

export default App
