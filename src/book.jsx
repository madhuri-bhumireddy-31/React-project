import React, { useState } from 'react';

const BookTable = () => {
  const [message, setMessage] = useState('');

  const booking = (e) => {
    e.preventDefault(); // Prevents form from reloading the page
    setMessage('✅ Your table was successfully booked!');
  };

  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book A Table</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form_container">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <select className="form-control nice-select wide" defaultValue="">
                    <option value="" disabled>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <input type="date" className="form-control" />
                </div>
                <div className="btn_box">
                  <button type="submit" onClick={booking}>Book Now</button>
                </div>
              </form>

              {/* ✅ Show success message */}
              {message && (
                <div className="mt-4 text-green-600 font-semibold">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
