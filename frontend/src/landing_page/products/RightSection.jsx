function RightSection( {
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    
}) {
    return <div>
        <div className="container mt-5">
             <div className="row">
           
            <div className="col-6 p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                         <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>
                </div>
            </div>

             <div className="col-6"><img src={imageURL} alt="" /></div>
        </div>
        </div>
    </div>
   
}
 export default RightSection;
