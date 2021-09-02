import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--cg-blue);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    /* border-style: inset ; */
    margin-top: 1rem;
    border-color: var(--indigo-dye);
    padding: 1rem;
    border-radius: 12px;
    min-height: 175px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'SFMonoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
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