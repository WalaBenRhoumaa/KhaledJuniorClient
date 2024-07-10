import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import backgroundImg from '../assets/images/backs.jpg'; // Adjust the path based on your project structure
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-form" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', color: 'white', padding: '50px 0' }}>
      <section id="contact" className="contact">
        <div id="team">
          <div className="overlay sections">
            <div className="container">
              <div className="heading-content text-center" style={{ marginBottom: '30px' }}>
                <h3 className="contact-title">Contact</h3> {/* Apply the class here */}
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8 col-xs-12">
                  <div className="contact-area">
                    <h4 style={{ marginBottom: '20px' }}>Leave a message</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          style={{ width: '100%', color: 'white', backgroundColor: 'transparent', marginBottom: '15px', borderColor: 'white' }}
                          placeholder="Name*"
                          id="name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          style={{ width: '100%', color: 'white', backgroundColor: 'transparent', marginBottom: '15px', borderColor: 'white' }}
                          placeholder="Email*"
                          id="email"
                        />
                      </div>
                      <div className="form-group">
                        <select
                          name="category"
                          className="form-control"
                          style={{ color: 'white', backgroundColor: 'transparent', marginBottom: '15px', borderColor: 'white' }}
                          id="category"
                        >
                          <option value="Moderating">Moderating</option>
                          <option value="Training">Training</option>
                          <option value="Conferencing">Conferencing</option>
                          <option value="Project Management">Project Management</option>
                          <option value="Public Speaking">Public Speaking</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          placeholder="Subject*"
                          style={{ width: '100%', color: 'white', backgroundColor: 'transparent', marginBottom: '15px', borderColor: 'white' }}
                          id="subject"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          style={{
                            width: '100%',
                            height: '200px',
                            alignItems: 'start',
                            color: 'white',
                            backgroundColor: 'transparent',
                            marginBottom: '20px',
                            borderColor: 'white'
                          }}
                          placeholder="Message"
                          id="message"
                        ></textarea>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <input type="submit" className="btn btn-default" value="Envoyer" style={{ backgroundColor: 'white', color: 'black', border: 'none', padding: '10px 20px', cursor: 'pointer' }} />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8 col-xs-12">
                  <div className="contact-details-area">
                    <div className="contact-details mail-area text-center" style={{ marginBottom: '20px' }}>
                      <h4>Email Address</h4>
                      <p>hafaiedh.khaled@gmail.com</p>
                    </div>
                    <div className="contact-details web-area text-center" style={{ marginBottom: '20px' }}>
                      <h4>Web</h4>
                      <a href="https://www.ipactconsult.com/" style={{ color: 'white', textDecoration: 'underline' }}>Website Ipact</a>
                    </div>
                    <div className="contact-details">
                      <h4 className="text-center" style={{ marginBottom: '20px' }}>Phone</h4>
                      <ul style={{ listStyleType: 'none', paddingLeft: 0, textAlign: 'center' }}>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                          <img
                            style={{ width: '40px', height: '40px', marginRight: '10px' }}
                            src="src/assets/images/canada_.png" // Adjust the image paths
                            alt="Canada"
                          />
                          <p>(Canada) +1 514 465 5030</p>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                          <img
                            style={{ width: '28px', height: '28px', marginRight: '10px' }}
                            src="src/assets/images/Tun.png"
                            alt="Tunisia"
                          />
                          <p>(Tunisia) +216 25 425 042 (WhatsApp)</p>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                          <img
                            style={{ width: '28px', height: '28px', marginRight: '10px' }}
                            src="src/assets/images/brasil_.png"
                            alt="Brazil"
                          />
                          <p>(Brazil) +55 11 98956 9606</p>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                          <img
                            style={{ width: '40px', height: '40px', marginRight: '10px' }}
                            src="src/assets/images/france_.png"
                            alt="France"
                          />
                          <p>(France) +33 7 80 51 01 04</p>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                          <img
                            style={{ width: '27px', height: '27px', marginRight: '10px' }}
                            src="src/assets/images/portgual.png"
                            alt="Portugal"
                          />
                          <p>(Portugal) +1 514 465 5030</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="main-footer">
                <div className="social" style={{ marginBottom: '20px' }}>
                  <a href="#" style={{ marginRight: '10px', color: 'white', fontSize: '20px', transition: 'color 0.3s' }}><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="https://www.linkedin.com/in/khaledbenhafaiedh/" style={{ marginRight: '10px', color: 'white', fontSize: '20px', transition: 'color 0.3s' }}><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="https://www.facebook.com/khallouda.hafaiedhjunior" style={{ marginRight: '10px', color: 'white', fontSize: '20px', transition: 'color 0.3s' }}><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://www.instagram.com/khaledjuniorhafaiedh/?hl=fr" style={{ color: 'white', fontSize: '20px', transition: 'color 0.3s' }}><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
                <p id="aze" style={{ marginTop: '10px', fontSize: '14px' }}>© 2023 KhaledJunior, All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
