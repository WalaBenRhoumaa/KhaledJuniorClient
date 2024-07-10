import '../assets/css/AboutSection.css';
import '../assets/css/ModelAbout.css';
import '../assets/css/bootstrap.min.css';
import ManImg from '../assets/images/man.png';
//import '../assets/js/scroll-services.jsx'
import React, { useState, useRef } from 'react';


function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
    
  const closeModal = () => {
    setIsModalOpen(false);
  };
    
  const handleClickOutside = (event) => {
    if (modalRef.current && event.target === modalRef.current) {
      setIsModalOpen(false);
    }
  };



  return (
    <>
    <section id="about" className="sections3">
      <div className="about-wrapper">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div id="about-photo">
          <img src={ManImg} alt="Khaled Junior Hafaiedh" />
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12" >
          <div className="heading-content text-center" id="aze">
            <h1 id="ab" className="lang ab" data-lang-en="paragraph4" data-lang-es="paragraph4" data-lang-fr="paragraph4" data-lang-ar="paragraph4" data-lang-pt="paragraph4">
              About me
            </h1>
          </div>
          <p id="contoure" className="lang about-content" data-lang-en="paragraph" data-lang-es="paragraph" data-lang-fr="paragraph" data-lang-ar="paragraph" data-lang-pt="paragraph">
            Step into the world of Khaled Junior Hafaiedh, an exceptional individual who has made his mark in various fields such, as academia, research, coaching and community service. With a range of accomplishments Khaled's journey is truly inspiring. From his successes to his meaningful contributions, as a community leader Khaled's life story showcases unwavering commitment, resilience and genuine enthusiasm.
          </p>
          <div id="openModalText2">
            <div className="btn btn-default lang about-content" id="but" data-lang-en="paragraph01" data-lang-es="paragraph01" data-lang-fr="paragraph01" data-lang-ar="paragraph01" data-lang-pt="paragraph01" onClick={openModal}>
              More Info
            </div>
          </div>
        </div>
      </div>
      <a href="#Coaching" style={{  }}>
        <div className="about-arrows" >
          <div className="body-arrows">
            <div className="arrows"></div>
          </div>
        </div>
      </a>
    </section>

    {isModalOpen && (
    <div id="myModal2" className="modal2" ref={modalRef} onClick={handleClickOutside} style={{ display: 'block' }}>
        <div className="modal-content2">
            <span className="close2" onClick={closeModal} style={{ cursor: 'pointer' }} >&times;</span>
            <p >
            <h2>Expériences </h2>


            <h3>Academic Prowess: (Diplôme facebook)</h3>


            Dr. Khaled Junior Hafaiedh is a graduate of the University of Ottawa, in Canada. He completed his studies in
            Electrical and Computer Engineering specializing in communication systems. His passion for knowledge led him
            to pursue a Masters degree in the field, where he explored the use of distributed trees for data
            structuring, which greatly advanced data management techniques. He further solidified his expertise and
            dedication by earning a PhD in Electrical and Computer Engineering with a focus on Web Security. Through his
            research Dr. Hafaiedh has demonstrated his commitment to enhancing safety, for everyone.


            <h3>A Trailblazing Professor: ?</h3>

            Khaled is a professor who holds positions at both the École supérieure privée d'ingénierie et de technologie
            Esprit, in Tunisia and his alma mater, the University of Ottawa in Canada. He brings an amount of knowledge
            and practical experience to his teaching using engaging methods that motivate students to explore and learn.
            His dedication has inspired students to embark on their personal quests, for knowledge.

            <h3>A Visionary Researcher:</h3>


            Khaled Junior Hafaiedh's passion for research has led him to be an integral part of the esteemed Software
            Security Research Group, collaborating with IBM and the University of Ottawa. Since 2011, he has been on a
            mission to make the digital landscape more secure, leveraging cutting-edge technologies and groundbreaking
            insights.



            <h3>Empowering Trainer and Coach:</h3>

            With an impressive array of qualifications from prestigious institutions around the world, Khaled is also a
            certified trainer of trainers. He has expertise in entrepreneurship, leadership, communication, conflict
            resolution, and personal development. Training sessions he has conducted in Canada, the USA, Brazil,
            Portugal, France and Tunisia, and other countries have left a lasting impression on individuals and
            organizations.

            As the famous English novelist Edward G. Bulwer-Lytton once wrote: “The best teacher is the one who suggests
            rather than dogmatizes, and inspires his listener with the wish to teach himself.”

            <h2>Association :</h2>

            <h3>A Philanthropic Leader:</h3>

            As a member of a number of associations and initiatives, Khaled Junior Hafaiedh has demonstrated a
            commitment to community development. Rotary Club La Marsa Impact was founded by him, a diverse group of
            professionals dedicated to charitable, cultural, and technological initiatives. In addition, he has brought
            together young professionals from diverse backgrounds who are united by a passion for positive change and
            social impact as the founder of Rotary Club La Marsa Inspire.

            <h3>Global Mediator and Changemaker:</h3>

            Khaled's influence extends beyond borders, as he assumes the role of President of the Training,
            Communication, Development Commission at Mediterra Venir Tunisia. This mediation association fosters
            dialogue and progress between the North and South of the Mediterranean, showcasing Khaled's commitment to
            fostering positive change on a global scale.


            <h4> tentative de texte : </h4>
            <h6> Notre focus se concentre sur les événements ou il a assisté et coaché plus un peu de l'académie.
                Qu’est ce qui rend Junior Hafay spécial?a</h6>
            </p>
        </div>
    </div>
    )}
    </>
  );

  
}

export default AboutSection;
