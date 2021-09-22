import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  padding: 1rem;
  transition: 0.5s opacity;
  &:hover {
    opacity: 50%;
  }
  .projectItem__img {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--steel-blue);
    img {
      height: 100%;
      height: 250px;
    }
  }
  .projectItem__info {
    /* border-style: inset ; */
    margin-top: 1rem;
    border-color: var(--steel-blue);
    padding: 1rem;
    border-radius: 12px;
    min-height: 175px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Manrope Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 250px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  linksto = 'www.google.com',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={linksto}
        rel="noreferrer"
        target="_blank"
        className="projectItem__img"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem__info">
        <a href={linksto} rel="noreferrer" target="_blank">
          <h3 className="projectItem__title">{title}</h3>
        </a>

        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
