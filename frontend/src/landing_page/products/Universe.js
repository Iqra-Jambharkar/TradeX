import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="p-3">TradeX Ecosystem</h1>
        <p>
          Explore additional tools and platforms that enhance your trading,
          learning, and investment experience.
        </p>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Portfolio builder"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">
            Portfolio-based investing made simple
          </p>
        </div>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/streakLogo.png"
            alt="Strategy builder"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">Build and test trading strategies</p>
        </div>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Options trading"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">Simplified options trading tools</p>
        </div>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Mutual funds"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">Smart mutual fund investing</p>
        </div>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt="Bonds platform"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">Invest in bonds and fixed income</p>
        </div>

        <div className="col-4 p-3 mt-4 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt="Insurance advisory"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <p className="text-muted small">
            Simple and transparent insurance advice
          </p>
        </div>
         <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
