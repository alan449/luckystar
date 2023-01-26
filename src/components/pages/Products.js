import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Cards.css';
import Cards from '../Cards';


export default function Products() {
  return (
    <>
    <h1 className='products'>CONTACT US</h1>
    <div id="form-details">
      <form action="https://formsubmit.co/aaec62bf52e8a7832c54fa926ce25953" method="POST">    
        <span>Wechat ID: alan656865</span>
        <h1>LEAVE A MESSAGE</h1>
        <input type="text" className="Name" placeholder="Your Name" />
        <input type="text" className="Email" placeholder="E-mail" />
        <input type="text" className="Phone No" placeholder="Your Phone Number" />
        <input type="text" className="Subject" placeholder="Subject" />
        <textarea className="Message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button class="normal">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  ) 
}
