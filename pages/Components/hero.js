import React from 'react'

export default function Hero() {
  return (<>
    <section id="hero" className="d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1>Setting Up New Horizons</h1>
                <ul>
                    <li><i className="ri-check-line"></i>We at Ignition work passionately pursue excellence in all that we do and are committed to attaining world-class standing in every sphere of our operations. </li>
                    <li><i className="ri-check-line"></i> You're in good hands.</li>
                </ul>
                <div className="mt-3">
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <a href="#" className="btn-get-quote">Request a Quote</a>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src="img/hero-img1.png" className="img-fluid" alt="img" />
                </div>
            </div>
        </div>
    </section>
  </>
  )
}