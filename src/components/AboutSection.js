import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from './AboutInfoItem';
import ContactBanner from './ContactBanner';
import resumepdf from '../assets/static/resume.pdf';

const AboutPageStyles = styled.div`
  .container {
    padding: 30rem 0 30rem 0;
    scroll-margin: 5rem;
    align-items: center;
    height: 100vh;
    min-height: 1000px;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    text-transform: uppercase;
    font-size: 3.6rem;
    margin-bottom: 1rem;
    color: var(--steel-blue);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
    button {
      margin-top: 5rem;
      font-size: 2rem;
      background-color: transparent;
      padding: 0.7em 2em;
      border: 2px solid var(--steel-blue);
      border-radius: 8px;
      display: inline-block;
      color: white;
      transition: 0.5s opacity;

      &:hover {
        opacity: 50%;
      }
    }
  }
  .left {
    flex: 1;
  }
  .right {
    img {
      border: 2px solid var(--steel-blue);
      max-width: 400px;
    }
    flex: 1;
    display: flex;
    justify-content: center;
    /* align horizontal */
    align-items: center;
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  .right-skills {
    flex: 3;
  }

  .left-skills {
    flex: 3;
  }

  #desktop-skills {
    padding: 0rem 0 20rem 0;
  }
  @media only screen and (max-width: 1024px) {
    .container {
      min-height: 750px;
      padding: 5rem 0 5rem 0;
      scroll-margin: -2rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .right {
      img {
        width: 90%;
      }
    }
    .right-skills {
      margin-left: -3rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info {
      button {
        display: none;
      }
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container" id="about">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                {/* Hi, I am <span>Ayan Khan</span> */}
              </p>
              <h2 className="about__heading">About me</h2>
              <div className="about__info">
                <PText>
                  My name is Andreas Paridis, and I love bringing code to life.
                  As a young teenager I was obsessed with games, and was always
                  fascinated with how simple lines of code could bring any idea.
                  to life.In 2018 I set out to find how the in and outs of
                  sofware works at the University Of Reading as a computer
                  scientist.
                  <br />
                  <br />
                  Fast Forward to today, I am an ambitious Computer Sience
                  graduate, interested in expanding my software engineering
                  knowledge.
                </PText>
                <a href={resumepdf} target="__blank">
                  <button type="button">Resume</button>
                </a>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
