import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
    margin: 50px auto 0;
    padding: 4rem 2rem 1rem;
    color: var(--body-color);
    background-color: var(--body-background);
    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
        margin: 65px auto 0;
        gap: 4rem;
        padding: 5rem 0 1rem;
    }
    @media (min-width: 992px) {
        padding: 8rem 0;
    }
    @media (min-width: 1200px) {
        margin-top: unset;
        height: 100vh;
        padding: 0 2rem;
    }
`;

export const HeroWrapper = styled.div`
    img {
        width: min(12rem, 100%);
    }
    .stars {
        opacity: 0;
        transition: all .2s ease-in;
        display: none;
    }
    @media (min-width: 768px) {
        order: 1;
        img {
            width: 24rem;
        }
    }
    @media (min-width: 1200px) {
        position: relative;
        img {
            width: 34rem;
        }
        .stars {
            display: block;
            opacity: 1;
            position: absolute;
            bottom: -8rem;
            right: -5rem;
            fill: var(--stars);
        }
    }
`;

export const HeroContent = styled.div`
    h1 {
        font-weight: 400;
        color: var(--detail-3);
        font-size: 2.2rem;
    }
    strong {
        color: var(--body-color);
    }
    h2 {
        margin-top: .5rem;    
        color: var(--detail-3);
        font-weight: 400;
        font-size: 2rem;
    }
    p {
        font-size: 1.6rem;
        margin: 1rem auto 1.5rem;
        width: min(35rem, 100%);
        line-height: 2.4rem;
    }
    a {
        background-color: var(--detail);
        padding: .5rem 1.2rem;
        cursor: pointer;
        border-radius: 1rem;
        border: 2px solid var(--detail-2);
        gap: .5rem;
        font-weight: 500;
        margin: auto;
        font-size: 1.6rem;
        color: var(--body-color);
        display: flex;
        align-items: center;
        width: 15.5rem;
        transition: all .2s ease-in-out;
    }
    a:hover {
        opacity: 0.6;
    }
    @media (min-width: 768px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.4rem;
        }
        p {
            width: min(70rem, 100%);
            margin: 2rem 0rem;
        }
        a {
            margin: unset;
        }
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 6rem;
        }
    }
`;