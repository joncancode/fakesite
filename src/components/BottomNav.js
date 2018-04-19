import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {
  render() {
    return (
      <div className="bottomNav">
        <ul className="links">
          <p className="bottomNavHeader">Fakesite</p>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">About us</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Press</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Policies</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Help</a>
          </li>
        </ul>

        <ul className="links">
          <p className="bottomNavHeader">Account</p>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Edit Picture</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Friends</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Social</a>
          </li>
          <li className="bottomNavLinks">
            {' '}
            <a className="bottomNavLinks" href="#">Delete Profile</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default BottomNav;
