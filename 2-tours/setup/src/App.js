import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  } 
  useEffect(() => {
    fetchTours()
  }, [])
  //You can use the 
  if (loading) {
    return <main>
      <Loading />
    </main>
  }
  if(tours.length === 0) {
    return (
    <main>
      <div className='title'>
        <h3>No tours left</h3>
        <button onClick={() => fetchTours()}>Get tours back</button>
      </div>
    </main>
    )
  } else {

  return <main>
    {/* This is how you pass a function as a props dwon to the children. */}
    <Tours tours={tours} removeTour={removeTour} />
  </main>
  }
}

export default App
