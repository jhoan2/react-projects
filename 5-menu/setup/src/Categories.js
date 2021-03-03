import React from 'react';

//issue with manual filtering by category is that we are not in sync with our data. 
//What this means that is that when add more categories you will have to manually add each of them. 
const Categories = ({filterItems, categories}) => {
  return <div className='btn-container'>
      {categories.map((category, index) => {
          return <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>;
};

export default Categories;
