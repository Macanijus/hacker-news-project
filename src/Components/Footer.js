import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="latestNews">
        <h5>Get the latest news</h5>
        <input
          className="footer-input"
          type="text"
          placeholder="your e-mail adress"
        />
        <button className="footer-button">
          <i class="fa fa-paper-plane"></i>
        </button>
      </div>

      <div className="copyright">
        <p>© Hacker News 2022</p>
      </div>

      <div className="social-icons">
        <h5>Connect with us</h5>
        <div className="icons">
          <a href="https://de-de.facebook.com/ " target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
