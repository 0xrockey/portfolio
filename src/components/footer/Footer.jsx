import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Kola</h1>
        </div>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://instagram.com"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__social-link"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy"> &#169; kola All right reserved</span>
      </div>
    </footer>
  );
};
export default Footer;
