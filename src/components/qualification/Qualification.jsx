import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification__container section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">MY Personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
            data-target="#education"
          >
            <i class="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
            data-target="#experience"
          >
            <i class="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            data-content
            id="education"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  Al-Jazeera University
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science</h3>
                <span className="qualification__subtitle">
                  Al-Jazeera University
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2019 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            data-content
            id="experience"
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Developer</h3>
                <span className="qualification__subtitle">
                  Al-Jazeera University
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Developer</h3>
                <span className="qualification__subtitle">
                  Al-Jazeera University
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
