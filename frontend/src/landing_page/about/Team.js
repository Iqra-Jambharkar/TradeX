import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top ">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img src="media/images/myImg.png" style={{ borderRadius: "100%" }} alt="Iqra Jambharkar"/>
          <h4 className="mt-5">Iqra Jambharkar</h4>
        </div>
        <div className="col-6 p-5">
          <p>
            Iqra Jambharkar is a web developer and the creator of TradeX, a
            stock trading simulation platform built as a real-world learning
            project.
          </p>
          <p>
            TradeX was designed to combine modern web technologies with finance
            concepts to help users understand how trading platforms work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
