import React from 'react'

export default function Footer() {
  return (<>
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Ignition work</h3>
              <p>
                224 A, Near Aubiya Market New Muslim Town Lahore Pakistan.
              </p>
              <p>
                <strong>Phone:</strong> +92 333 4293793<br />
                <strong>Email:</strong> info@ignitionwork.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Our Work</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Product Development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Web Analytics</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Business Intelligence</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Ecommerce development</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Search engine optimization</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Social media marketing</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="#/" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="me-md-auto text-center text-md-start pt-2">
          <div className="copyright">
            &copy; Copyright <strong><span>Ignition work</span></strong>. All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>

  
 
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    
    <script src="/assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="/assets/vendor/php-email-form/validate.js"></script>
    <script src="/assets/js/main.js"></script>
  </>
)
}