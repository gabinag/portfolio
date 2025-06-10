import React from "react";
import styled from 'styled-components';

const SkillContainer = styled.div`
  border: .3rem solid var(--detail-2);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: var(--detail);
  img {
    max-height: 4rem;
  }
  h3 {
    font-size: 1.4rem;
    margin: 1rem 0 .5rem;
    color: var(--body-color);
  }
  p {
    font-size: 1.2rem;
    color: var(--detail-2);
  }
  @media (min-width: 1200px) {
    padding: 3rem;
    img {
      max-height: 6rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export const Skill = (props) => {
  return (
    <SkillContainer>
        {props.skillIcon}
        <h3>{props.skillTitle}</h3>
        <p>{props.skillLevel}</p>
    </SkillContainer>
  );
};
