import React, { useState } from 'react';
import './Events.css';
import '../assets/css/bootstrap.min.css';
import backgroundImage from '../assets/images/backg.jpg';

const Events = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    setStartIndex(prevIndex => prevIndex + cardsPerPage);
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - cardsPerPage, 0));
  };

  return (
    <section id="events" className="sections5" style={{ backgroundImage: `url(${backgroundImage})`, marginBottom: '0' }}>
      <div className="heading-content text-center">
        <a href="#">
          <h1 id="ab" className="lang events" data-lang-en="paragraph61" data-lang-es="paragraph61" data-lang-fr="paragraph61" data-lang-ar="paragraph61" data-lang-pt="paragraph61">
            Events
          </h1>
        </a>
      </div>

      <div className="events-content">
        <div className="cards">
          {eventsData.slice(startIndex, startIndex + cardsPerPage).map((event, index) => (
            <label className="card-event" htmlFor={`item-${startIndex + index + 1}`} id={`event-${startIndex + index + 1}`} key={startIndex + index}>
              <main>
                <img src={event.imgSrc} alt="event" />
                <div className="card-content">
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <a href={event.link} className="button">
                    Find Out More on Facebook
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </a>
                </div>
              </main>
            </label>
          ))}
        </div>

        <div className="events-arrows">
          {startIndex > 0 && (
            <button className="arrow-button" onClick={handlePrev}>
              &lt; Prev
            </button>
          )}
          {startIndex + cardsPerPage < eventsData.length && (
            <button className="arrow-button" onClick={handleNext}>
              Next &gt;
            </button>
          )}
          
        </div>
        
      </div>

   
      <div className="events-content scroll-button-space">
       <a href="#blogs">
                <div className="events-arrows">
                    <div className="body-arrows">
                        <div className="arrows"></div>
                    </div>
                </div>
              
            </a>
            </div>
    </section>
    
    
  );
};

const eventsData = [
  {
    imgSrc: 'src/assets/images/e10.jpg',
    title: 'Formation MTL',
    description: "session d'information de💡 l'événement MTL connecte 2023, qui s'est tenue le 12 juillet 2023",
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e6.png',
    title: 'Formation Tunisia Digital Summit',
    description: '22-23 Juin 2022\nLaico Tunis',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e1.jpg',
    title: 'Formation "Post-COVID"',
    description: 'organisée par 5 clubs Rotary, à savoir 🏆Rotary Club La Marsa Plage 🏆Rotary Club Tunis Notre Dame 🏆Rotary Club La Marsa 🏆Rotary Club La Marsa Impact & 🏆Rotary Club of La Marsa Inspire - District 9010 - Tunisia',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e2.jpg',
    title: 'Formation sur "l\'intelligence émotionnelle"',
    description: '20 Mai 2021\norganisée par Rotaract Club La Marsa Plage.',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e3.jpg',
    title: 'Workshop "leadership skills"',
    description: '15 juillet 2021\norganisée par BIL:Jendouba.',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e4.jpg',
    title: 'Workshop "Valorisation des compétences collectives"',
    description: '8 Janvier 2022.\norganisé par l\'association Ambassadeurs de la culture et du tourisme au musée National des arts islamique de Rakada à Kairouan 🇹🇳',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e11.jpg',
    title: 'Journée Entreprise.',
    description: 'IPACT a eu l\'énorme plaisir de participer à la journée Entreprise organisée par l\' IHET le 02 Mars 2023',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e5.jpg',
    title: 'workshop RIYEDA',
    description: 'Khaled Junior Hafaiedh s\'est presenté à la 9ème édition de Riyeda (16/04/2022) pour animer un workshop sous le thème "Comment bénéficier des dernières tendances technologiques pour accéder à de nouveaux marchés ?"',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e7.jpg',
    title: 'Workshop "networking"',
    description: '18/11/2022\nTOT&CO Formation & Coaching des Formateurs',
    link: 'https://www.facebook.com/juniorhafay'
  },
  {
    imgSrc: 'src/assets/images/e8.jpg',
    title: 'Hosting a discussion at IHET .',
    description: 'Khaled Junior Hafaiedh Hosted a discussion at IHET (22/02/2022) with the presence of international guest speakers .',
    link: 'https://www.facebook.com/juniorhafay'
  }
];

export default Events;
