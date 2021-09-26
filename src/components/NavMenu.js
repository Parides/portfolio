import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import resumepdf from '../assets/static/AndreasParidisResume.pdf';
import logo from '../assets/images/logo.png';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  /* background: linear-gradient(-90deg, var(--jet), var(--steel-blue)); */
  opacity: 90%;
  // border-bottom: 2px solid var(--aquamarine)
  backdrop-filter: blur(3px);

  ul {
    margin: 0 auto;
    /* width: 90%; */
    margin-right: 5%;
    margin-left: 1%;
    text-align: right;
    li {
      display: inline-block;
      border-radius: 8px;
    }
    a {
      display: inline-block;
      font-family: 'Manrope SemiBold';
      border-radius: 8px;
      padding: 1rem 2rem;
      font-size: 2rem;
      outline: none;
      transition: 0.5s ease opacity;
      &:hover {
        opacity: 50%;
      }
    }
    .logo {
      float: left;
      align-items: left;
      justify-content: left;
      img {
        width: 75px;
      }
    }
    button {
      font-size: 2rem;
      background-color: transparent;
      padding: 0.7em 2em;
      border: 2px solid var(--steel-blue);
      border-radius: 8px;
      display: inline-block;
      transition: 0.5s opacity;
      color: white;
      &:hover {
        opacity: 50%;
      }
    }
    .active {
      color: var(--white);
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 821px) {
    opacity: 100%;
    padding: 0;
    z-index: 100;
    ul {
      margin: 0 auto;
      /* width: 90%; */
      margin-right: 0%;
      margin-left: 0%;
    }
    .hide-item {
      transform: translateX(calc(-100% - var(--top)));
      /* transform: translateY(calc(-100% - var(--top))); */
      /* transform: translateX(calc(-120% +20rem)); */
      transform: translateY(calc(220% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
      backdrop-filter: blur(20px);
    }
    .navItems {
      --top: 1rem;
      transition: 0.6s ease transform;
      /* background-color: var(--steel-blue); */
      background: linear-gradient(-180deg, var(--jet), var(--steel-blue));
      padding: 2rem;
      width: 100%;
      height: 2000px;
      /* border-bottom-left-radius: 18px;
      border-bottom-right-radius: 18px;
      max-width: 300px;
      border-radius: 12px; */
      position: absolute;
      /* right: 1rem; */
      /* top: var(--top); */
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
      button {
        border: 2px solid var(--white);
      }
      .logo {
        float: none;
        margin-right: -1rem;
        margin-bottom: 35vh;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li className="logo">
          <a onKeyDown={() => setShowNav(!showNav)} href=".">
            <img src={logo} alt="me" width="50px" />
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setShowNav(!showNav)}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setShowNav(!showNav)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => setShowNav(!showNav)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setShowNav(!showNav)}>
            Projects
          </a>
        </li>
        <li>
          {/* <Button btnText="Resume" btnLink={resumepdf} /> */}
          <a
            href={resumepdf}
            target="__blank"
            onClick={() => setShowNav(!showNav)}
          >
            <button type="button">Resume</button>
          </a>
        </li>
      </ul>
    </NavStyles>
  );
}
