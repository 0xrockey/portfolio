import React from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = React.useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer </span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
            <span className="services__button" onClick={() => toggleTab(1)}>
              View more{" "}
              <i class="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">Ui/Ux Designer</h4>
                <i
                  class="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <p className="services__modal-description">
                  Services with more than 2 years of experience . providing work
                  to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I create ux element interactions</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-arrow  services__icon"></i>
            <h3 className="services__title">
              Frontend <br /> Developer
            </h3>
            <span className="services__button" onClick={() => toggleTab(2)}>
              View more{" "}
              <i class="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">Ui/Ux Designer</h4>
                <i
                  class="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <p className="services__modal-description">
                  Services with more than 3 years of experience . providing work
                  to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I create Website element interactions</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Back-end <br /> Developer
            </h3>
            <span className="services__button" onClick={() => toggleTab(3)}>
              View more{" "}
              <i class="uil uil-arrow-right services__button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">Back-end Developer</h4>
                <i
                  class="uil uil-times services__modal-close"
                  onClick={() => toggleTab(0)}
                ></i>
                <p className="services__modal-description">
                  Services with more than 4 years of experience . providing work
                  to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop web pages </p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development</p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I create and develop APIs </p>
                  </li>
                  <li className="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
