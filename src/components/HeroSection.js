import React from 'react';
import styled from 'styled-components';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import email from '../assets/images/email.svg';

const HeroStyles = styled.div`
  .container {
    align-items: center;
    justify-content: center;
    min-height: 1000px;
    display: flex;
  }

  .hero__heading {
    border-radius: 30px;
    padding: 3rem 3rem 3rem 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    font-size: 2rem;
    color: var(--indigo-dye);
    margin-bottom: -4rem;
    text-align: left;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    :hover {
      animation-name: zoom-in-out;
      animation-duration: 0.8s;
    }
    .hero__name {
      font-family: 'Manrope Bold';
      font-size: 7rem;
      color: var(--steel-blue);
      margin-top: 1rem;
    }
    .hero__name__subtitle {
      font-family: 'Manrope SemiBold';
      font-size: 4rem;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--white);
  }
  .hero__info {
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-family: 'Manrope Bold';
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: fixed;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown__indicator {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 1rem;
        }
        img {
          scale: 50%;
          transition: 0.5s ease opacity;
          :hover {
            opacity: 20%;
          }
        }
      }
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 1rem;
        }
        img {
          scale: 50%;
          transition: 0.5s ease opacity;
          :hover {
            opacity: 20%;
          }
        }
      }
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
    /* color: white; */
    &:hover {
      opacity: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 20rem 0 0rem 0;
    }
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      .hero__name__subtitle {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 1rem;
    }
    .hero__social {
      visibility: hidden;
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      visibility: hidden;
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="container">
        <div className="hero" id="herosection">
          <h1 className="hero__heading">
            <span className="hero__first__line">Hello, I'm</span>
            <span className="hero__name">Andreas Paridis</span>
            <span className="hero__name__subtitle">
              I use coding to bring ideas to life
            </span>
            <span className="hero__info">
              I am a computer science graduate that loves to built websites,
              corporate software and games! I am currently looking for work as a
              software developer/engineer or data scientist.
            </span>
            <a
              href="mailto:andreasparides@hotmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button">Get In Contact</button>
            </a>
          </h1>
          {/* <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance web designer and developer for 4
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnText="see my works" btnLink="/projects" />
          </div> */}
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Socials</p>
            </div>
            <div className="hero__social__text">
              <ul>
                {/* <li>
                  <a
                    href="http://facebook.com/webcifar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="icon" />
                  </a>
                </li> */}
                <li>
                  <a
                    href="http://github.com/parides"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/parides"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <div className="hero__scrollDown__indicator">
              <p>Contact</p>
            </div>
            <ul>
              <li>
                <a
                  href="mailto:andreasparides@hotmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={email} alt="ScrollDown Arrow" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
