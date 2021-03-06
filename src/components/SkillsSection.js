import React from 'react';
import styled from 'styled-components';
import AboutInfoItem from './AboutInfoItem';

const SkillSectionStyles = styled.div`
  .container {
    /* padding: 30rem 0 30rem 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .myskills {
    align-items: center;
    width: 100%;
    justify-content: center;
    border-radius: 30px;
    padding: 3rem 3rem 4rem 3rem;
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
    /* display: flex; */
    flex-wrap: wrap;

    align-items: flex-start;
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
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .left-skills {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;
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
      /* min-height: 750px; */
      /* padding: 5rem 0 10rem 0; */
      margin-bottom: 10vh;
    }

    .top-section {
      flex-direction: row;
      flex-wrap: wrap;
      align-self: flex-start;
      gap: 0rem;
      max-height: 60vh;
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
          <div className="myskills">
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
              <div className="left-skills">
                <div className="skills">
                  <AboutInfoItem
                    title="Database"
                    items={['PostgreSQL', 'MariaDB', 'MySQL']}
                  />
                </div>

                <div className="skills">
                  <AboutInfoItem title="DevOps" items={['AWS', 'Bash']} />
                </div>
                <div className="skills">
                  <AboutInfoItem
                    title="AI/ML"
                    items={['Tensorflow', 'OpenCV']}
                  />
                </div>
                <div className="skills">
                  <AboutInfoItem title="Other" items={['Unity', 'Android']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SkillSectionStyles>
    </>
  );
}
