import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/tradexLogo.png"
              style={{ width: "70%" }}
            ></img>
            <p>&copy; 2025, TradeX. All rights reserved.</p>
          </div>
          <div className="col mx-4">
            <p>Company</p>
            <a href="/" className="footer-link d-block mb-2">
              About
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Platform
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Careers
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Blog
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Open source
            </a>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="/" className="footer-link d-block mb-2">
              Contact us
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Help center
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Community
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Downloads
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Status
            </a>
          </div>
          <div className="col">
            <p>Account</p>
            <a href="/" className="footer-link d-block mb-2">
              Open an account
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Login
            </a>
            <a href="/" className="footer-link d-block mb-2">
              Plans
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            TradeX is a stock trading simulation platform built for learning and
            practice. No real money is involved and this platform does not offer
            brokerage, investment, or financial advisory services.
          </p>

          <p>
            All market data shown on this platform is for educational and
            demonstration purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
