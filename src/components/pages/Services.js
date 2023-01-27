import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';
import '../Cards.css';
import '../HeroSection.css';

export default function Services() {
  return (   
  <>
    <h1 className='services'>
      SERVICES
    </h1>
    
    <div className='cards'>
    <h1>E-Commerce, internation logistics solution</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./luckystar/images/img-9.jpg'
              text='Ongoing IT support'
              label='IT Support'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Build a long term relationship with client'
              label='Customer Services'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
    <Footer />
  </>
  );  
};
