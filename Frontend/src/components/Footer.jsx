import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>ADVELAR'S</h1>
          <p>Events Planners</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail"/>
          <button>Subscribe</button>
          </div>
          <p>signup with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;