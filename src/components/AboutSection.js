import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import AboutImg from '../assets/images/about-page-img.png';
import resumepdf from '../assets/static/AndreasParidisResume.pdf';

const AboutPageStyles = styled.div`
  .container {
    /* padding: 30rem 0 30rem 0; */
    /* scroll-margin: 5rem; */
    /* height: 100vh; */
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .about__me {
    border-radius: 30px;
    padding: 3rem 3rem 3rem 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    :hover {
      animation-name: zoom-in-out;
      animation-duration: 0.8s;
    }
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
      max-height: 100vh;
      /* padding: 3rem 0 10rem 0; */
      margin-bottom: 10vh;
    }

    .about__me {
      max-height: 70vh;
      overflow-y: scroll;
    }
    .top-section {
      flex-direction: column;
      gap: 2rem;
      /* max-height: 70vh; */
    }
    .right {
      img {
        width: 60%;
        height: auto;
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
          <div className="about__me">
            <div className="top-section">
              <div className="left">
                <h2 className="about__heading">About me</h2>
                <div className="about__info">
                  <PText>
                    My name is Andreas Paridis, and I love using coding to bring
                    ideas to life. As a teenager I was obsessed with games, and
                    was always fascinated with how any abstract idea can turn
                    into reality just by using lines of code. In 2018 I set out
                    to find how the ins and outs of how this process works by
                    Undertaking a Bacherlor of Science in Computer Science at
                    the University Of Reading.
                    <br />
                    <br />
                    Fast Forward to today, I am an ambitious Computer Sience
                    graduate, interested in expanding my software development,
                    web development and sofware engineering skills.
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
        </div>
      </AboutPageStyles>
    </>
  );
}
