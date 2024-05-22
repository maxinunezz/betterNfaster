import React from "react";
import "./index.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="Slack Logo"
        />
        <span>Slack</span>
      </div>
      <div className="menu">
        <a href=" ">Features▾</a>
        <a href=" ">Solutions▾</a>
        <a href=" ">Enterprise▾</a>
        <a href=" ">Resources▾</a>
        <a href=" ">Pricing▾</a>
      </div>
      <div className="actions">
        <div className="search">
          <span className="search-icon">🔍</span>
        </div>
        <a href=" " className="sign-in">
          Sign in
        </a>
        <button className="sales-btn">Talk to Sales</button>
        <button className="free-btn">Try for Free</button>
      </div>
    </div>
  );
}

export default Navbar;
