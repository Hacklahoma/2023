import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Navigation bar
 */
const Navbar = () => {
  const { isMobile } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const hamburgerMenu = useRef();
  const hamburger = useRef();

  useEffect(() => {
    document.body.classList.toggle('hamburger-open', open);

    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e) {
      if (!hamburgerMenu.current.contains(e.target) && !hamburger.current.contains(e.target)) {
        setOpen(false);
        document.removeEventListener('click', hasClickedOutside, true);
      }
    }

    if (open) {
      document.addEventListener('click', hasClickedOutside, true);
    }

    return () => {
      document.removeEventListener('click', hasClickedOutside, true);
    };
  }, [open]);

  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div className="navbar">
      {/**
       * NAVBAR BANNER
       *
       * Note: When adding or removing banner, make sure to set $banner-height to
       * either 0 or 24px the _constants.
       *
       * You can also change the color in _constants.
       */}
      {/* <a href="/">
        <div className="banner">
          <p>This is an example banner</p>
        </div>
      </a> */}
      <div className={`navigation ${open ? 'open' : ''}`}>
        <div className="container">
          <a className="logo" href="/">{}</a>
          <Hamburger hamburger={hamburger} open={open} setOpen={setOpen} />
          {isMobile?
              <b><a href="https://hacklahoma.org">H</a></b> :
              <b><a href="https://hacklahoma.org">Hacklahoma</a></b>
          }
          <HamburgerMenu hamburgerMenu={hamburgerMenu} setOpen={setOpen} open={open} />
        </div>
      </div>
    </div>
  );
};

/**
 * Hamburger button
 */
const Hamburger = ({ open, setOpen, hamburger }) => (
  <button ref={hamburger} type="button" onClick={() => setOpen(!open)} id="hamburger">
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
  </button>
);

/**
 * Mobile menu, opened when pressing hamburger
 */
const HamburgerMenu = ({ open, hamburgerMenu, setOpen }) => (
  <div id="hamburger-menu" ref={hamburgerMenu} className={open ? 'open' : 'closed'}>
    <NavItems hamburger setOpen={setOpen} open={open} />
  </div>
);

/**
 * Navigation items
 */
const NavItems = ({ setOpen }) => {
  const [dropdown, setDropdown] = useState();
  const dropdownRef = useRef();
  const resourceRef = useRef();

  useEffect(() => {
    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e) {
      if (!dropdownRef.current.contains(e.target) && !resourceRef.current.contains(e.target)) {
        setDropdown(false);
        document.removeEventListener('click', hasClickedOutside, true);
      }
    }

    if (dropdown) {
      document.addEventListener('click', hasClickedOutside, true);
    }

    return () => {
      document.removeEventListener('click', hasClickedOutside, true);
    };
  }, [dropdown]);

  /**
   * Closes hamburger menu, scrolls to top, and closes dropdowns
   */
  const onClickLink = (e) => {
    setOpen(false);
    setDropdown(false);
    const targetName = e.currentTarget.children[0].innerHTML.toLowerCase();

    window.scrollTo({
      behavior: 'smooth',
      top:      document.getElementById(targetName).offsetTop,
    });
  };

  return (
    <ul id="nav-items">
      <button onClick={onClickLink}><li>About</li></button>
      <button onClick={onClickLink}><li>Guides</li></button>
      <button onClick={onClickLink}><li>FAQ</li></button>
      <button onClick={onClickLink}><li>Sponsors</li></button>
      <button onClick={() => {window.location.href = '/live'}}><li>Live</li></button>
    </ul>
  );
};

export default Navbar;
