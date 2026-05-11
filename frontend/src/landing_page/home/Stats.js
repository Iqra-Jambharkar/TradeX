import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trade with confidence</h1>
          <h2 className="fs-4">Customer-focused</h2>
          <p className="text-muted">
            Simple and transparent tools designed to keep users in control
  with clarity and ease of use.
          </p>
          <h2 className="fs-4">No noise, just trading</h2>
          <p className="text-muted">
            No unnecessary alerts or distractions, allowing users
  to focus on markets and decisions.
          </p>
          <h2 className="fs-4">Focused experience</h2>
          <p className="text-muted">
            Essential trading features brought together in one platform,
  keeping the experience fast and easy to navigate.
          </p>
          <h2 className="fs-4">Built for confident trading</h2>
          <p className="text-muted">
            Designed to help users understand market behavior
  and trade with clarity and confidence.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem img"
            style={{ width: "90%" }}
          />
          <div className="text-center">
            <a href="/" className="mx-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a href="/" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
