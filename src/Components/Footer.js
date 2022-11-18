import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <h5>Get the latest news</h5>
      <input
        className="footer-input"
        type="text"
        placeholder="your e-mail adress"
      />
      <button className="footer-button">
        <i class="fa fa-paper-plane"></i>
      </button>

      <p className="copyright">© Hacker News 2022</p>

      <div className="social-icons">
        <h5>Connect with us</h5>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin"></i>
      </div>
    </div>
  );
}
