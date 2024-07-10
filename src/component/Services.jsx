import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../../public/css/services.css";
import Service from "./Service";
import { responsive, servicesData } from "./dataService";

const Services = () => {
  const service = servicesData.map((item) => (
    <Service key={item.name} name={item.name} url={item.imageurl} />
  ));

  return (
    <section id="services" className="team sections4">
      <div className="container text-center">
        <div className="heading-content text-center">
          <h1
            id="services-title"
            className="lang"
            data-lang-en="paragraph6"
            data-lang-es="paragraph6"
            data-lang-fr="paragraph6"
            data-lang-ar="paragraph6"
            data-lang-pt="paragraph6"
          >
            Services
          </h1>
        </div>

        <div className="container services">
          <div className="features-wrapper text-center services-content">
            <div className="row takecenter scroll-serv d-flex">
              <div className="col-md-12 col-sm-6 col-xs-12 ">
                <div className="features-bg development">
                  <div className="features-item">
                    <Carousel
                      showDots={true}
                      swipeable={true}
                      draggable={true}
                      responsive={responsive}
                      containerClass="carousel-container"
                      dotListClass="custom-dot-list-style"
                    >
                      {service}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll">
          <a href="#events">
            <div className="services-arrows">
              <div className="body-arrows">
                <div className="arrows"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
