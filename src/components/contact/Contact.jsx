import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map = "https://www.google.com/maps/d/embed?mid=1nxxfsdOOs2x2HPEsNV-YlJDLFzM&hl=en&ehbc=2E312F" ;
  
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              title="Map"
              width="600"
              height="450"
              loading="lazy"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              src={map}
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>manzoor colony karachi mehmoodabad</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>khanummeaiman76@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+03196558989</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Create a message here..." cols="30" rows="10"></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
