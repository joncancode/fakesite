import React, { Component } from 'react';
import logo from '../assets/logo.png';
import person from '../assets/person.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <img className="logo" src={logo} alt={'logo'} />
          <nav>
            <ul>
              <li>
                <a className="topNav" href="#">
                  <img className="userIcon" src={person} alt={'person'} />
                </a>
              </li>
              <li>
                <a className="topNav navLinks" href="#">
                  Help
                </a>
              </li>
              <li>
                <a className="topNav navLinks" href="#">
                  Account
                </a>
              </li>
            </ul>
          </nav>

          <div className="headline">
            <div className="pageTitle">The world's greatest fake site</div>
            <div className="pageSubTitle">
              Create the world's greatest fake site and enjoy the breeze of
              fresh air when you complete it.
            </div>
            <button>Do something awesome</button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
