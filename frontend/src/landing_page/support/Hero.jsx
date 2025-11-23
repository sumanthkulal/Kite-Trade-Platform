import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // This is needed for the 'bi' classes

function Hero() {
  return (
    <div>
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col">
              <h1>Support Portal</h1>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary">My tickets</button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi-search"></i>
                </span>
                <input 
                  type="text" 
                  className="form-control border-start-0 custom-input-focus" 
                  placeholder="Eg: How do I open my account, How do I activate F&O..." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;