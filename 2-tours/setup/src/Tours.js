import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  console.log(tours)
  return (
    <section>
      <div className='title'>
        <h2>Our Tours </h2>
        <div className='underline'></div>
        <div>
          {tours.map((tour) => {
            return (
              // you can use the destructure of tour here to make it simple to pass into the props 
              <Tour key={tour.id} {...tour} removeTour={removeTour}/>
            )
          })}
        </div>
      </div>
    </section>
  )
};

export default Tours;
