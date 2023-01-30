import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Cards.css';
import Cards from '../Cards';


export default function Products() {
  return (
    <>
    <h1 className='contact-us'>CONTACT US</h1>
    <div className='contact'>
          <div className='con-detail'>
            <img src="./images/alan-wechat.JPG" />
            <p>WeChat</p>
          </div>
          <div className='con-detail'>
            <img src="./images/alan-whatsapp.JPG" />
            <p>WhatsApp</p>
          </div>
        </div>
    <div id="form-details">
      <form action="https://formsubmit.co/aaec62bf52e8a7832c54fa926ce25953" method="POST">    
        
        <h1>LEAVE A MESSAGE</h1>
        <input type="text" name="Name" placeholder="Your Name" required />
        <input type="text" name="Email" placeholder="E-mail" required />
        <input type="text" name="Phone No" placeholder="Your Phone Number" />
        <input type="text" name="Subject" placeholder="Subject" />
        <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" class="normal">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  ) 
}
