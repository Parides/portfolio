import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 4rem;
  .title {
    font-size: 2rem;
    text-transform: uppercase;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 20rem;
  }
  .item {
    background-color: var(--indigo-dye);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 1.8rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
