import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id='contact'>
      <h2 className="section-title">
        <span className="white-text">Contact</span>{' '}
        <span className="green-text">Me</span>
      </h2>
      <p className="section-subtitle">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-boxes">
        {/* Get in Touch Box */}
        <div className="contact-box">
          <h3 className="box-title">Get in Touch</h3>
          <div className="contact-info">
            <div className="info-item">
              <MdEmail className="icon" />
              <div>
                <strong>Email</strong>
                <p>sureshpokala919@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <MdPhone className="icon" />
              <div>
                <strong>Phone</strong>
                <p>+91 9381123011</p>
              </div>
            </div>
            <div className="info-item">
              <MdLocationOn className="icon" />
              <div>
                <strong>Location</strong>
                <p>Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Send a Message Box */}
        <div className="contact-box">
          <h3 className="box-title">Send a Message</h3>
          <form 
            className="contact-form"
            action="https://formsubmit.co/sureshpokala919@gmail.com"
            method="POST"
          >
            {/* Optional: FormSubmit configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            {/* Input Fields */}
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" rows="4" placeholder="Your message" required></textarea>
            
            <button type="submit" className="send-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
