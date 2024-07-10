import '../assets/css/ServicesSection.css'; // Assurez-vous d'importer votre fichier CSS
import '../assets/css/bootstrap.min.css'; // Assurez-vous d'importer Bootstrap

function ServicesSection() {
    return (
        <section id="services" className="team sections4">
            <a className="cd-menu-trigger" href="#main-nav"><span></span></a>

            <div className="container text-center">
                <div className="heading-content text-center">
                    <a href="services.html">
                        <h1 id="services-title" className="lang" data-lang-en="paragraph6" data-lang-es="paragraph6"
                            data-lang-fr="paragraph6" data-lang-ar="paragraph6" data-lang-pt="paragraph6">Services</h1>
                    </a>
                </div>
                <div className="container services">
                    <div className="features-wrapper text-center services-content">
                        <div id="permas" className="row takecenter scroll-serv d-flex">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="features-bg development">
                                    <div className="features-item">
                                        <h6><b><a href="services.html#Moderating" className="lang" data-lang-en="paragraph151" data-lang-es="paragraph151"
                                            data-lang-fr="paragraph151" data-lang-ar="paragraph151" data-lang-pt="paragraph151">Moderating</a></b></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="features-bg launch">
                                    <div className="features-item">
                                        <h6><b><a href="services.html#Training" className="lang" data-lang-en="paragraph181" data-lang-es="paragraph181"
                                            data-lang-fr="paragraph181" data-lang-ar="paragraph181" data-lang-pt="paragraph181">Training</a></b></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="features-bg b">
                                    <div className="features-item">
                                        <h6><b><a href="services.html#Conferencing" className="lang" data-lang-en="paragraph201" data-lang-es="paragraph201"
                                            data-lang-fr="paragraph201" data-lang-ar="paragraph201" data-lang-pt="paragraph201">Conferencing</a></b></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="features-bg a">
                                    <div className="features-item">
                                        <h6><b><a href="services.html#Project-management" className="lang" data-lang-en="paragraph221" data-lang-es="paragraph221"
                                            data-lang-fr="paragraph221" data-lang-ar="paragraph221" data-lang-pt="paragraph221">Project management</a></b></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="features-bg c">
                                    <div className="features-item">
                                        <h6><b><a href="services.html#Public-speaking" className="lang" data-lang-en="paragraph241" data-lang-es="paragraph241"
                                            data-lang-fr="paragraph241" data-lang-ar="paragraph241" data-lang-pt="paragraph241">Public speaking</a></b></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: 30 }}>
                            <button className="scroll-left" title="scroll-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>
                            </button>
                            <button className="scroll-right" title="scroll-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#events">
                <div className="services-arrows">
                    <div className="body-arrows">
                        <div className="arrows"></div>
                    </div>
                </div>
            </a>
        </section>
    );
}

export default ServicesSection;
