import styled from "styled-components";

export const HeaderContainer = styled.nav`
    padding: 10px 0;
    position: fixed;
    background-color: var(--detail);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    span {
        display: block;
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--body-background);
        background-color: var(--body-color);
        width: 3.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        text-align: center;
        border-radius: 100%;
        margin-right: calc(6.5rem - 4.5rem);
    }
    .buttonsWrapper {
        display: flex;
        gap: 1.5rem;
    }
    ul {
        list-style: none;
        display: none;
        gap: 3rem;
        font-weight: 500;
        padding-left: 0;
    }
    a {
        text-decoration: none;
        color: var(--body-color);
        font-size: 1.6rem;
        transition: color 0.3s ease;
    }
    a:hover {
        color: gray;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
        display: block;
    }
    @media (min-width: 768px) {
        span {
            width: 4.5rem;
            height: 4.5rem;
            line-height: 4.5rem;
            font-size: 1.8rem;
        }
        .darkModeDesktop {
            display: flex;
            gap: 2rem;
            align-items: center;
            justify-content: end;
            order: 1;
            width: 6.5rem;
        }
        ul {
            display: flex;
        }
        button {
            display: none;
        }
    }
`;

export const MenuMobile = styled.div`
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    padding: 15px 0;
    background: var(--detail);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 500;
    ul {
        list-style: none;
        text-align: center;
        padding: 0;
    }
    li {
        padding: 2rem 0;
    }
    a {
        text-decoration: none;
        color: var(--body-color);
        font-size: 1.6rem;
        display: block;
    }
`