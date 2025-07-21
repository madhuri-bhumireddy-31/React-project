import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_section bg-gray-900 text-white py-8">
      <div className="container">
        <div className="row">
          {/* Contact Us */}
          <div className="col-md-4 footer-col mb-4">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>123 Jolly Street, Bangalore, India</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call: +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Email: demo@gmail.com</span>
                </a>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  <span>WhatsApp: +91 1234567890</span>
                </a>
                <a href="https://jollyisland.in" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <span>Visit Our Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="col-md-4 footer-col mb-4">
            <div className="footer_detail">
              <a href="#" className="footer-logo text-xl font-bold">Feane</a>
              <p>
                Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.
              </p>
              <div className="footer_social mt-3">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4 footer-col mb-4">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info text-center mt-5">
          <p>
            &copy; {currentYear} All Rights Reserved By{" "}
            <a href="https://html.design/" className="text-blue-400">Free Html Templates</a>
            <br /><br />
            &copy; {currentYear} Distributed By{" "}
            <a href="https://themewagon.com/" className="text-blue-400" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
