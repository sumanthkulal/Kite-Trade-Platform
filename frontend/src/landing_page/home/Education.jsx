const Education = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="media/images/education.svg"
              alt=""
              style={{ width: "70%" }}
            />
          </div>
          <div className="col mt-5">
            <h1 className="mb-3 fs-2">Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity<i className="fa fa-long-arrow-right"></i>{" "}
            </a>

            <p className="col mt-5">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i className="fa fa-long-arrow-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
