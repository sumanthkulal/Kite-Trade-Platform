
import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="row">
                    {/* Zerodha Fund House */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fund House Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">Zerodha Fund House</h5>
                        <p className="text-secondary px-4">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>

                    {/* Sensibull */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/sensibullLogo.svg" alt="Sensibull Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">SENSIBULL</h5>
                        <p className="text-secondary px-4">Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>

                    {/* Tijori */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/tijori.svg" alt="Tijori Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">TIJORI</h5>
                        <p className="text-secondary px-4">Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>

                <div className="row">
                    {/* Streak */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/streakLogo.png" alt="Streak Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">Streak</h5>
                        <p className="text-secondary px-4">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>

                    {/* Smallcase */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/smallcaseLogo.png" alt="Smallcase Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">smallcase</h5>
                        <p className="text-secondary px-4">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>

                    {/* Ditto */}
                    <div className="col-lg-4 col-md-6 col-12 p-3 mt-5">
                        <img src="/media/images/dittoLogo.png" alt="Ditto Logo" className="img-fluid" style={{ maxHeight: '40px' }}/>
                        <h5 className="mt-3">ditto</h5>
                        <p className="text-secondary px-4">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
                <button className="p-2 btn btn-primary fs-5 mt-4 mb-5" style={{width:"20%", margin:"auto"}}>Sign up for free</button>

            </div>
        </div>
    );
}

export default Universe;