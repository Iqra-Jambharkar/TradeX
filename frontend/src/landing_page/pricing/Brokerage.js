import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row p-4">

        <div className="col-8">
          <a
            href="/"
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            Platform details
          </a>

          <ul
            className="mt-4 text-muted"
            style={{ lineHeight: "2" }}
          >
            <li>
              TradeX provides a simulated trading environment for learning
              and practice purposes.
            </li>

            <li>
              No real money transactions are involved on the platform.
            </li>

            <li>
              Market data and analytics are displayed for educational use
              only.
            </li>

            <li>
              Users can practice portfolio management and trading strategies
              safely.
            </li>

            <li>
              Advanced tools and analytics are available with the Pro plan.
            </li>

            <li>
              TradeX is designed to help users understand real-world trading
              workflows.
            </li>
          </ul>
        </div>

        <div className="col-4 text-center">
          <a
            href="/"
            style={{ textDecoration: "none", fontWeight: "500" }}
          >
            Platform features
          </a>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;