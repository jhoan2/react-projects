import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  //readmore 
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>$ {price}</h4>
      </div>
      <p>
        {/* substring makes so that you only show a certain number of characters.  */}
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}?</button>
      </p>
      <button className='delete-btn' onClick={() => removeTour(id)}>Clear</button>
    </footer>
  </article>
};

export default Tour;
