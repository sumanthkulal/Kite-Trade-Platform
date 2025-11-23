import React from 'react'

const Team = () => {
  return (
    <div>
        <div className="container">
          <div className="row p-5 mt-5  p-3 border-top">
                <h1 className='text-center'>
                  People
                </h1>
          </div>
          <div className="row p-5 text-muted " style={{lineHeight:"1.85",fontSize:"1.2em"}}>
           
            <div className="col p-3 text-center" >
                <img src="media/images/nithinKamath.jpg" alt=""  style={{borderRadius:"100%", width:"50%"}}/>
                <h4 className='mt-4'>Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
            </div>
            <div className="col p-3">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>

                <p   >Connect on  <a style={{color:"blue" }} href="">Homepage</a>/ <a  style={{color:"blue"}} href="">TradingQnA</a> / <a  style={{color:"blue"}} href="">Twitter</a>  </p>
            </div>
        
          </div>
          
        </div>
    </div>
  )
}

export default Team
