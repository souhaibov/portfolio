import React from "react";
import "../style/Contact.css";

const ContactUs = () => {
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

</div>
<div className="rectangle">
  
</div>
<div className="rectangle">
  
</div>
          </div>
        </div>
        <div className="formulaire">
          <h1>Hire me</h1>
          <br />
          <br />
          <input placeholder="Name *" />
          <br />
          <br />
          <input placeholder="E.mail *" />
          <br />
          <br />
          <input placeholder="Subject" />
          <br />
          <br />

          <input style={{ height: "150px" }} placeholder="Message *" />
          <br />
          <br />
          <br />
          <button className="submit">Submit</button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ContactUs;
