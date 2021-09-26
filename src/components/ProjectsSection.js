import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ProjectItem from './ProjectItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import projects from '../assets/data/projects';

// install Swiper modules
SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
  .container {
    /* padding: 15rem 0 30rem 0; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    /* display: flex; */
    position: relative;
  }

  .myprojects {
    border-radius: 30px;
    width: 100%;
    padding: 3rem 3rem 3rem 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    align-items: center;

    :hover {
      animation-name: zoom-in-out;
      animation-duration: 0.8s;
    }
  }
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 1rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--steel-blue);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--white);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }

  .myprojects__title {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--steel-blue);
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .container {
      /* min-height: 750px;
      padding: 5rem 0 5rem 0; */
    }
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 2rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }

    .myprojects__title {
      font-size: 2.8rem;
    }
  }
`;

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container" id="projects">
        <div className="myprojects">
          <h1 className="myprojects__title">Projects</h1>
          {/* <SectionTitle
            subheading="Some of my most notable"
            heading="Projects"
          /> */}
          <div className="projects__allItems">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              // centeredItems={1}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {projects.map((project, index) => {
                if (index >= 5) return;
                return (
                  <SwiperSlide key={project.id}>
                    <ProjectItem
                      linksto={project.href}
                      title={project.name}
                      img={project.img}
                      desc={project.desc}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
