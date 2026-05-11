import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Building modern trading experiences for the next generation
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            TradeX was created with the goal of making stock trading easy to
            understand and accessible through a modern digital platform.
          </p>
          <p>
            We focus on building clean, fast, and intuitive tools that allow
            users to explore markets, track portfolios, and practice trading
            without complexity.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            TradeX is designed as a learning-first trading platform where users
            can gain hands-on experience with real market concepts.
          </p>
          <p>
            Our mission is to help users build confidence in investing and
            trading by combining powerful tools with a simple user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
