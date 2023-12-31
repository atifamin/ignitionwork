import React from 'react'

export default function Header() {
  return (<>
  
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">

      {/* <h1 className="logo"><a href="#">Ignition work</a></h1> */}
       <a href="index.html" className="logo"><img src="img/logo.png" alt="logo" className="img-fluid" /></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#ourWork">Our Work</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>          
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  </>
  )
}
