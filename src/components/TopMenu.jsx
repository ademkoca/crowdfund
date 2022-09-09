import React, { useState } from 'react';
import MobileMenu from './MobileMenu';

const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="topMenu">
        <div className="left">
          <a href="/crowdfund">
            <img className="iconHome" src="assets/svg/logo.svg" alt="home" />
          </a>
        </div>
        <div className="right">
          <div className="links">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/discover">Discover</a>
              </li>
              <li>
                <a href="/get-started">Get Started</a>
              </li>
            </ul>
          </div>
          <div
            className="burger"
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
          >
            {/* <object
              className="iconBurger"
              data="assets/svg/icon-hamburger.svg"
              type="image/svg+xml"
              alt="home"
              aria-label="iconBurger"
            /> */}
            <img
              src={`assets/svg/icon-${
                !menuOpen ? 'hamburger' : 'close-menu'
              }.svg`}
              alt=""
            />
          </div>
        </div>
      </div>
      {menuOpen && <MobileMenu />}
    </>
  );
};

export default TopMenu;
