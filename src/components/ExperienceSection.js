import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from './AboutInfoItem';
import ContactBanner from './ContactBanner';

const ExperienceStyles = styled.div`
  .container {
    padding: 30rem 0 30rem 0;
    scroll-margin: -15rem;
    align-items: center;
    min-height: 1000px;
    justify-content: center;
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
    font-size: 3.6rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 5rem;
  }

  .about__info__item {
    margin-bottom: 10rem;
    span {
      background-color: var(--indigo-dye);
      padding: 1rem;
      border-radius: 8px;
      gap: 1.5rem;
      margin-right: 1rem;
    }
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about__info__heading__sub {
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-top: 1.5rem;
  }
  li {
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-top: 2.5rem;
    line-height: 4rem;
  }
  li::before {
    list-style-image: '>';
    padding-inline-start: 1rem;
    content: '>';
    background: var(--indigo-dye);
    border-radius: 2rem;
    padding-inline: 2rem;
    margin-inline-end: 2rem;
  }

  .about__info__position {
    font-size: 4rem;
    text-transform: uppercase;
    color: var(--cg-blue);
    margin-top: 2rem;
  }
  .about__info_description {
    margin-top: 4rem;
    font-size: 3rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      min-height: 750px;
      padding: 10rem 0 5rem 0;
      scroll-margin: -5rem;
    }
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.8rem;
    }
    li {
      font-size: 1.4rem;
      text-transform: uppercase;
      margin-top: 1rem;
      line-height: 3rem;
    }
    li::before {
      list-style-image: '>';
      padding-inline-start: 1rem;
      content: '>';
      background: var(--indigo-dye);
      border-radius: 2rem;
      padding-inline: 2rem;
      margin-inline-end: 2rem;
    }

    .about__info__position {
      font-size: 2rem;
    }
    .about__info__heading__sub {
      font-size: 1.8rem;
    }
    .about__info__item {
      margin-bottom: 5rem;
    }
  }
`;

export default function ExperienceSection() {
  return (
    <>
      <ExperienceStyles>
        <div className="container" id="experience">
          <div className="top-section" />
          <h1 className="about__info__heading">Experience</h1>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__position">Junior Web Developer</h1>
              <h1 className="about__info__heading__sub">
                <a href="https://www.estate-searcher.com/" target="__blank">
                  Estate-Searcher
                </a>{' '}
                | 2020
              </h1>
              <ul>
                <li>
                  Developed and maintained code for a estate-listing website
                  using the Laravel Framework, HTML CSS and jQuery.
                </li>
                <li>Maintained Back-End, using MariaDB and Amazon AWS S3</li>
                {/* <li>
                  <span>PHP</span>
                  <span>PHP</span>
                  <span>PHP</span>
                  <span>PHP</span>
                  <span>PHP</span>
                </li> */}
              </ul>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__position">
                Junior Software Engineer
              </h1>
              <h1 className="about__info__heading__sub">
                <a href="https://www.soft-surge.com/" target="__blank">
                  Soft-Surge
                </a>{' '}
                | 2020
              </h1>
              <ul>
                <li>
                  Developed and maintaned a data aggregation engine, written in
                  PHP.
                </li>
                <li>Maintained Back-End, using MariaDB and Amazon AWS S3</li>
                <li>Handled Client requests for data retreival</li>
              </ul>
            </div>
          </div>
        </div>
      </ExperienceStyles>
    </>
  );
}