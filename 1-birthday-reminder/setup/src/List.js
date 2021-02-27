import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((item) => {
        const { id, name, image, age } = item
        return (
          <article key={id} className="person">
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{age} years old</p>
          </article>
        )
      })}
    </>
  );
};

export default List;
