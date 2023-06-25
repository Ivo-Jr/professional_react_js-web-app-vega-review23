import React, { useState, useRef, useMemo, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

import logo from '../../../assets/vega-header.svg';
// import whatsapp from '../../assets/whatsapp.png';

import { FiUser } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuRef = useRef();
  const location = useLocation();

  const filledRoutes = useMemo(() => {
    return (
      [
        '/grossweight',
        '/cuttingforce',
        '/benddingforce',
        '/energyconsumption',
        '/bendingforce',
        '/vme',
        '/riskprioritization',
        '/visionsystem',
        '/objectdetection',
        '/ppf',
        '/budget',
        '/forms'
      ])
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuOpen && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  }, [menuOpen, toggleMenu]);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 90;
    const href = window.location.href;
    const routeShow = filledRoutes.map(item => href.includes(item));

    if (routeShow.includes(true)) {
      setScroll(true);
    } else {
      setScroll(isScrolled);
    }

  }, [filledRoutes]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [location.pathname, handleScroll]);

  return (
    <>
      <S.Overlay visible={menuOpen ? 1 : 0} onClick={toggleMenu} />
      <S.Container scroll={scroll ? 1 : 0}>

        <S.LeftSide>
          <a href="/">
            <img src={logo} alt="VegaRobotics" id="logo" />
          </a>
        </S.LeftSide>

        <S.CenterSide menuopen={menuOpen ? 1 : 0} ref={menuRef}>
          {/* <Link to="/">Home</Link> */}
          <a href="/">Home</a>
          <Link to="/technology">Techonology</Link>
          <Link to="/engineering">Engineering</Link>
          {/* <Link to="/">Robotics</Link> */}
          <Link to="/algorithms">Algorithms</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/budget">Contact</Link>
          <Link to="/forms">Forms</Link>
          {/* <a href="https://rwelectrodes.com/" target="_blank" rel="noreferrer" >
          <span>Shop</span>
        </a> */}
          {/* <Link to="/vixem">BETA</Link> */}
          <S.CloseButton onClick={toggleMenu}>&times;</S.CloseButton>
        </S.CenterSide>

        <S.RightSide>
          {/* <a href="https://wa.me/+551151998949" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="whatapp" />
          </a> */}

          <a href="/">
            <FiUser />
            <span>
              Get in
            </span>
          </a>

          <S.Hamburger onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </S.Hamburger>
        </S.RightSide>

      </S.Container>
    </>
  );
}

export default Header;
