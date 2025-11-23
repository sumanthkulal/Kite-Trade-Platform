import React from 'react'

function Award() {
    return (  
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 p-5">
                        <img src="\media\images\largestBroker.svg" alt="" />
                    </div>
                    <div className="col-6 p-5 mt-3">
                            <h1>Larget Stock broker in india</h1>
                            <p>2+ million zerodha clients contribute to over 15% of all retail order
                                volumes in india daily by trading and investing in:
                            </p>
                            <div className="row">
                                <col-6>
                                    <ul>
                                        <li>Futures and Options</li>
                                        <li>Commodity derivatives</li>
                                        <li>Currency derivatives</li>
                                    </ul>
                                </col-6>
                                <col-6>
                                    <ul>
                                        <li>Stocks & IPOs</li>
                                        <li>Direct mutual funds</li>
                                        <li>Bonds</li>
                                    </ul>
                                </col-6>
                            </div>
                            <img src="media\images\pressLogos.png" alt="" style={{width:"90%"}} />
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default Award;


