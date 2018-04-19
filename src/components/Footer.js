import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <img className="logo" src={logo} alt={'logo'} />

          <ul className="links">
            <li className="footerLinks">
              {' '}
              <a href="#">Site Map</a>
            </li>
            <li className="footerLinks">
              {' '}
              <a href="#">Privacy</a>
            </li>
            <li className="footerLinks">
              {' '}
              <a href="#">Terms</a>
            </li>
          </ul>
      </footer>
    );
  }
}

export default Footer;
