import styled from 'styled-components';

export const Section = styled.section`
    background-color: var(--body-background);
    padding-bottom: 4rem;
    scroll-margin-top: 10rem;
    @media (min-width: 992px) {
        padding-bottom: 8rem;
    }
`;

export const SectionHero = styled(Section)`
    @media (min-width: 992px) {
        padding-bottom: 0;
    }
`;