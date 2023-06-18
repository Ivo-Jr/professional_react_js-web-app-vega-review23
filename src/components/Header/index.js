import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

import logo from '../../assets/vega-header.svg';
// import whatsapp from '../../assets/whatsapp.png';

import { FiUser } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }, []);

  const menuRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (menuOpen && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  }, [menuOpen, toggleMenu]);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 90) {
        setScroll(true)
      } else setScroll(false);
    });
    return () => {
      window.removeEventListener('scroll')
    };
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <>
      <S.Overlay visible={menuOpen} onClick={toggleMenu} />
      <S.Container scroll={scroll}>

        <S.LeftSide>
          <a href="/">
            <img src={logo} alt="VegaRobotics" id="logo" />
          </a>
        </S.LeftSide>

        <S.CenterSide menuOpen={menuOpen} ref={menuRef}>
          <Link to="/technology">Santander X</Link>
          <Link to="/engenharia">Engineering</Link>
          <Link to="/">Robotics</Link>
          <Link to="/algoritmos">Algorithms</Link>
          <Link to="/artigos">Articles</Link>
          <Link to="/quotes">Contact</Link>
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
