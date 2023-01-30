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
    <h1>E-Commerce, international logistics solution</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-4.jpg'
              text='Ongoing IT support'
              label='IT Support'
              path='/services'
            />
            <CardItem
              src='./images/img-3.jpg'
              text='Time is money'
              label='Productive'
              path='/services'
            />
            <CardItem
              src='./images/img-8.jpg'
              text='Building long term relationships with our clients'
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
