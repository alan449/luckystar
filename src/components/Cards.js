import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
    
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-9.jpg'
              text='Explore a variety of alternatives and find the best solution to save your money'
              label='Cost-Effective'
              path='/services'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Committed to our promise of serving you to the highest standards'
              label='Commitment'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
