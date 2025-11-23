import React from 'react'

function Pricing() {
    return (  
        <>
           <div className="row mb-5">
            <div className="col-2">

            </div>
            <div className="col-4 ">
                <h1 className='fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="" className='mx-5' style={{textDecoration:"none"}}>See pricing <i className="fa fa-long-arrow-right"></i></a>
            </div>
            
            <div className="col-4">
                <div className="row text-center">
                    <div className="col p-2 border">
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free account opening</p>
                    </div>
                    <div className="col border p-2">
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and <br />direct mutual funds</p>
                    </div>
                </div>
            </div>
            <div className="col-2">

            </div>
           </div>
        </>
    );
}

export default Pricing;