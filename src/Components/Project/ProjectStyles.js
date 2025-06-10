import styled from "styled-components";

export const ProjectContainer = styled.div`
    color: #000;
    border: .3rem solid var(--detail-2);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    color: var(--body-color);
    background-color: var(--detail);
    height: 33rem;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
        margin-bottom: 1rem;
        border-radius: 1rem;
    }
    h3 {
        font-size: 1.6rem;
    }
    p {
        font-size: 1.4rem;
        margin: 1rem 0 1rem;
        display: block;
        flex-grow: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-clamp: 3;
        max-height: 5rem;
    }
    @media (min-width: 351px) {
        height: 28rem;
    }
    @media (min-width: 400px) {
        height: 32rem;
        img {
            height: 14rem;
        }
    }
    @media (min-width: 450px) {
        height: 35rem;
        img {
            height: 16rem;
        }
    }
    @media (min-width: 770px) {
        img {
            height: 12rem;
        }
    }
    @media (min-width: 992px) {
        height: 32rem;
        p {
            -webkit-line-clamp: 4;
            line-clamp: 4;
            max-height: 6.8rem;
        }
    }
    @media (min-width: 1200px) {
        min-height: 40rem;
        p  {
            max-height: 8rem;
            line-height: 2rem;
            font-size: 1.5rem;
        }
        img {
            height: 18rem;
        }
    }
`;

export const ProjectButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap; 
    flex: 1;
    align-items: flex-end;
    a {
        background-color: var(--detail-2);
        color: #fff;
        border: none;
        border-radius: 1rem;
        padding: .8rem 1.6rem;
        font-size: 1.4rem;
        cursor: pointer;
        width: 9rem;
        transition: all .2s ease-in-out;
    }
    a:hover {
        background-color: #525252;
    }
`;