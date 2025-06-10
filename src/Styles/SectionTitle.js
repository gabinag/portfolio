import styled from 'styled-components';

export const SectionTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: var(--body-color);
    margin-bottom: 3rem;
    @media (min-width: 768px) {
        text-align: start;
        font-size: 2.6rem;
        font-weight: 500;
    &::after {
        content: '';
        display: inline-block;
        width: 30rem;
        height: .3rem;
        background-color: var(--body-color);;
        margin-left: .5rem;
    }
    @media (min-width: 1200px) {
        margin-bottom: 8rem; 
    }
}
`;