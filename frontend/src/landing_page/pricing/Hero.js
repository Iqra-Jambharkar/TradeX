import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>

        <h3 className="text-muted mt-3 fs-5">
          Simple and transparent plans for learning and simulated trading
        </h3>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free access"
          />

          <h1 className="fs-3 mt-4">Free access</h1>

          <p className="text-muted">
            Explore market tools and practice trading with a clean and
            beginner-friendly experience.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Advanced tools"
          />

          <h1 className="fs-3 mt-4">Advanced tools</h1>

          <p className="text-muted">
            Access detailed analytics, portfolio insights, and enhanced
            trading features.
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Learning resources"
          />

          <h1 className="fs-3 mt-4">Learning resources</h1>

          <p className="text-muted">
            Learn trading concepts and market strategies through interactive
            educational content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;