import React, { useContext, useEffect, useState } from "react";
import { Context } from "./App";
import "./assets/styles/home.css";
import backgroundImage from "./assets/images1/banner.png";
import { Link } from "react-router-dom";

function Home(props) {
  const { username } = useContext(Context);
  const [offers, setOffers] = useState([]);

  // Fetch featured offers when the component loads
  useEffect(() => {
    async function fetchOffers() {
      try {
        const response = await fetch("/offers.json"); 
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    }
    fetchOffers();
  }, []);

  return (
    
    <div className="home">
      <div className="home-container">
        <div className="welcome">
          <h1>Hi, {username || "Guest"}!</h1>
          <h2>Welcome to My Foods {<span>{props.name}</span>}</h2>
          
        </div><p></p>

        <div>
          <Link to="/food" className="cta-btn">Order Food</Link>
          <Link to="/book" className="cta-btn">Book Table</Link>
        </div>
      </div>


      {offers.length > 0 && (
        <div className="offers-section">
          <h2 className="head"> Featured Offers</h2>
          <div className="offers-grid">
            {offers.map((offer, index) => (
              <div key={index} className="offer-card">
                <img src={offer.image} alt={offer.title} />
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <p><strong>Discount:</strong> {offer.discount}% Off</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <br />
      <div className="self">
        <h2>Why Choose Our Foods</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>✅ Fast, Fresh & Flavourful</h3>
            <p>We deliver piping hot meals prepared by expert chefs, using only fresh ingredients—straight from our kitchen to your doorstep.</p>
          </div>
          <div className="about-card">
            <h3>✅ Lightning-Fast Delivery</h3>
            <p>Your cravings can't wait—and neither do we. With our super-speed delivery network, food reaches you in record time.</p>
          </div>
          <div className="about-card">
            <h3>✅ Diverse Menu Options</h3>
            <p>From Indian comfort food to global favorites, My Foods offers something for everyone—whether you're vegan, a meat lover, or just feeling adventurous.</p>
          </div>
          <div className="about-card">
            <h3>✅ Hygiene You Can Trust</h3>
            <p>We follow strict hygiene protocols and ensure all deliveries are safe, sealed, and handled with care.</p>
          </div>
        </div>
      </div>



    <footer className="footer_section">
      <div className="container">
        <div className="row">
          {/* Contact Us */}
          <div className="col-md-4 footer-col">
            <div className="footer_contact">
              <h4>Contact Us</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="tel:+011234567890">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="mailto:demo@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>demo@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Logo & Social */}
          <div className="col-md-4 footer-col">
            <div className="footer_detail">
              <a href="#" className="footer-logo">
                Feane
              </a>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div className="footer_social">
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-md-4 footer-col">
            <h4>Opening Hours</h4>
            <p>Everyday</p>
            <p>10.00 AM - 10.00 PM</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <p>
            &copy; <span>{new Date().getFullYear()}</span> All Rights Reserved By{" "}
            <a href="https://html.design/">Free Html Templates</a>
            <br /><br />
            &copy; <span>{new Date().getFullYear()}</span> Distributed By{" "}
            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>



    </div>
  );
}

export default Home;
