import React from 'react';

//issue with manual filtering by category is that we are not in sync with our data. 
//What this means that is that when add more categories you will have to manually add each of them. 
const Categories = ({filterItems}) => {
  return <div className='btn-container'>
      <button className='filter-btn' onClick={() => filterItems('all')}>all</button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>breakfast</button>
    </div>;
};

export default Categories;
