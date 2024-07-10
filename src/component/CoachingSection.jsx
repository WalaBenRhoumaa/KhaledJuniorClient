import '../assets/css/CoachingSection.css'; // Assurez-vous d'importer votre fichier CSS
import '../assets/css/bootstrap.min.css';
import coachingImage from '../assets/images/01.png'; // Import the image


function CoachingSection() {
    return (
        <section id="Coaching" className="sections">
            <div className="container">
                <div className="heading-content text-center">
                    <a href="services.html#Coaching">
                        <h3 id="services-title" className="lang" data-lang-en="paragraph33" data-lang-es="paragraph33"
                            data-lang-fr="paragraph33" data-lang-ar="paragraph33" data-lang-pt="paragraph33">
                            <b>Coaching</b>
                        </h3>
                    </a>
                    <p></p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div id="Coaching-photo">
                            <img src={coachingImage} alt="khaledJuniorCoachingPhoto" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 CoachingArticle">
                        <p id="contoure" className="lang" data-lang-en="paragraph3" data-lang-es="paragraph3"
                            data-lang-fr="paragraph3" data-lang-ar="paragraph3" data-lang-pt="paragraph3">
                            Unlocking your full potential is my focus as a coach. Working closely with individuals, I
                            identify unique strengths and areas for improvement. Through personalized one-on-one coaching,
                            I provide constructive feedback and actionable strategies. Whether it's career advancement,
                            improved leadership, or personal growth, my coaching empowers you to overcome obstacles and
                            reach new heights.
                        </p>
                        <div id="openModalText2">
                            <div className="btn btn-default" id="but">
                                <a className="lang about-content" data-lang-en="paragraph01" data-lang-es="paragraph01"
                                    data-lang-fr="paragraph01" data-lang-ar="paragraph01" data-lang-pt="paragraph01"
                                    style={{ textTransform: "none", textDecoration: "none", color: "white" }}
                                    href="services.html#Coaching">
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*scroll 3*/}
            <a href="#services">
                <div className="coaching-arrows">
                    <div className="body-arrows">
                        <div className="arrows"></div>
                    </div>
                </div>
            </a>
        </section>
    );
}

export default CoachingSection;
