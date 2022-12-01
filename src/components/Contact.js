import React, { useRef } from "react";
import "../style/Contact.css";
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_26f1u63', 'template_br0jd1e', form.current, 'LSHvTJdX7lbBZeeRX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div id="contact-form">
      <h1>Get in Touch</h1>

      <div className="all_contact">
        <div className="left_side">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6626.123183278845!2d10.008025947148209!3d33.960022729169665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1669648503982!5m2!1sfr!2stn"
            width="100%"
            height="70%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="rectangles">
<div className="rectangle">
 
<img src="mail.png" alt="mail" />
<h3>Email</h3>
<h4>souhaib.salem82@gmail.com</h4>
<br/>
<h4 style={{cursor:"pointer"}} onClick={() => window.location = 'mailto:yourmail@domain.com'}>Write me →</h4>

</div>
<div className="rectangle">
<img  src="whatsapp1.png" alt="whatsapp" />
<h3>WhatsApp</h3>
<h4>+216 55 547 212</h4>
<br/>
<a href="https://api.whatsapp.com/send?phone=+21628420108&text=Hello,%20more%20information!"><h4 style={{cursor:"pointer"}}>Write me →</h4></a>
  
</div>
<div className="rectangle">
  <img src="messenger.png" alt="messenger" />
  <h3>Messenger</h3>
  <h4>souhaib salem</h4>
  <br/>
  <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100004318984852"><h4 style={{cursor:"pointer"}}>Write me →</h4></a>
  
</div>
          </div>
        </div>
        <div className="formulaire">
        <br />
        <form ref={form} onSubmit={sendEmail}>
          <h2>Hire me</h2>
          
          <br />
          <input placeholder="Name *" type="text" />
          <br />
          <br />
          <input placeholder="E.mail *" type="email" name="from_name" />
          <br />
          <br />
          <input placeholder="Subject" type="text" name="to_name" />
          <br />
          <br />

          <input style={{ height: "150px" }} placeholder="Message *" name="message" />
          <br />
          <br />
          
          <button className="submit" 
          type="submit" 
          value="Send">Submit</button>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ContactUs;
