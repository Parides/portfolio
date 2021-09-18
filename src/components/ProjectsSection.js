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
    padding: 20rem 0 0 0;
    /* scroll-margin: 6rem; */
    align-items: center;
    height: 100vh;
    min-height: 1000px;
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
  @media only screen and (max-width: 768px) {
    .container {
      min-height: 750px;
      padding: 5rem 0 5rem 0;
      scroll-margin: -1rem;
    }
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container" id="projects">
        <SectionTitle subheading="Some of my most notable" heading="Projects" />
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
    </ProjectSectionStyle>
  );
}
