import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: var(--body-color);
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 1200px) {
        margin-bottom: 4rem;
        gap: 6rem;
    }
`;

export const AboutWrapper = styled.div`
    border: .3rem solid var(--detail-2);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    width: min(525px, 100%);
    background-color: var(--detail);
    h3 {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        height: 24rem;
    }
    @media (min-width: 1200px) {
        width: min(45rem, 100%);
    }
`;

export const AboutItens = styled.div`
    margin-top: 2rem;
    gap: 1.5rem;
    div {
        margin-bottom: 1.5rem;
    }
    h4 {
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: .5rem;
    }
    small {
        font-size: 1.2rem;
        font-weight: 600;
    }
    p {
        font-size: 1.4rem;
        margin-top: .5rem;
    }
    @media (min-width: 768px) {
        height: calc(24rem - 9rem);
    }
`;

export const AboutOneItem = styled(AboutItens)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
        margin-bottom: 0;
    }
    @media (min-width: 768px) {
        margin-top: 1rem;
    }
`;

export const AboutText = styled.p`
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--body-color);
    margin: 0;
    text-align: justify;
`;