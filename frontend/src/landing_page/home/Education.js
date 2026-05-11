import React from 'react';

function Education() {
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src='media/images/education.svg' style={{width:"70%"}}></img>
                </div>
                <div className="col-6">
                    <h1 className="mb-3 fs-2">Learn and grow with TradeX</h1>
                    <p>TradeX Academy is a learning hub that covers everything from
basic investing to advanced trading concepts in a simple way.</p>
                    <a href="/" style={{textDecoration:"none"}}>TradeX Academy <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className='mt-5'>TradeX Community is a place to ask questions, share ideas, and
learn from other traders and learners on the platform.</p>
                    <a href="/" style={{textDecoration:"none"}}>TradeX Community <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                
                
            </div>
        </div>
    );
}

export default Education;