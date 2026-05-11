import React from "react";

function Pricing() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Simple pricing</h1>
                    <p>TradeX offers clear and easy pricing for simulated trading, with
no hidden charges and a focus on learning and practice.</p>
                    <a href="/" style={{textDecoration:"none"}}>View plans <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-4 border">
                            <h1 className="mb-4">Free</h1>
                            <p>Basic trading simulation and <br />market data access</p>
                        </div>
                        <div className="col p-4 border">
                            <h1 className="mb-4">Pro</h1>
                            <p>Advanced tools and <br />full trading features</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;