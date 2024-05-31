import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/* skills data_1 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* skills data_2 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name"> Next Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* skills data_3 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name">Express</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          {/* skills data_1 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* skills data_2 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* skills data_3 */}
          <div className="skils__data">
            <i class="bx bx-badge-ckeck"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
