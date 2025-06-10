import styled from "styled-components";

export const ContactWrapper = styled.div`
  text-align: center;
  color: var(--body-color);
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    font-size: 1.8rem;
    max-width: 50rem;
    margin: 3rem auto;
    line-height: 1.6;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 2.6rem;
      font-weight: 500;
    }
  }
`;

export const ContactLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    a {
        color: #000;
    }
    .contactIcon {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--detail-2);
    transition: all .2s ease-in-out;
    }
    .contactIcon:hover {
        transform: scale(1.09);
    }
`;
