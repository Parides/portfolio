import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from './AboutInfoItem';
import ContactBanner from './ContactBanner';

const SkillSectionStyles = styled.div`
  .container {
    padding: 30rem 0 30rem 0;
    scroll-margin: 5rem;
    align-items: center;
    min-height: 1000px;
    justify-content: center;
    height: 100vh;
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
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: var(--steel-blue);
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--black);
      max-width: 400px;
    }
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
    flex: 1;
  }
  .left-skills {
    flex: 1;
  }
  .skills {
    float: left;
    width: 100%;
  }
  #desktop-skills {
    padding: 0rem 0 20rem 0;
  }
  @media only screen and (max-width: 1768px) {
    .container {
      min-height: 750px;
      padding: 5rem 0 5rem 1rem;
      scroll-margin: -2rem;
    }
    .top-section {
      flex-direction: row;
      flex-wrap: wrap;
      align-self: flex-start;
      gap: 0rem;
      max-height: 700px;
      overflow-y: scroll;
    }
    .skills {
      float: left;
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
  }
`;

export default function About() {
  return (
    <>
      <SkillSectionStyles>
        <div className="container" id="skills">
          <h2 className="about__heading">Skills</h2>
          <div className="top-section">
            <div className="right-skills">
              <div className="skills">
                <AboutInfoItem
                  title="Programming"
                  items={['C++', 'Java', 'Python', 'JS']}
                />
              </div>

              <div className="skills">
                <AboutInfoItem
                  title="FrontEnd"
                  items={['React', 'CSS', 'HTML', 'Bootstrap']}
                />
              </div>
              <div className="skills">
                <AboutInfoItem title="Back End" items={['PHP']} />
              </div>

              <div className="skills">
                <AboutInfoItem
                  title="Framework"
                  items={['Flask', 'Laravel', 'Symphony']}
                />
              </div>
            </div>
            <div className="right-skills">
              <AboutInfoItem
                title="Database"
                items={['PostgreSQL', 'MariaDB', 'MySQL']}
              />
              <AboutInfoItem title="DevOps" items={['AWS', 'Bash']} />
              <AboutInfoItem title="AI/ML" items={['Tensorflow', 'OpenCV']} />
              <AboutInfoItem title="Other" items={['Unity', 'Android']} />
            </div>
          </div>
        </div>
      </SkillSectionStyles>
    </>
  );
}
