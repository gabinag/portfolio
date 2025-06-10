import styled from "styled-components";

export const DarkModeContainer = styled.div`
    display: flex;
    justify-content: center;
    input {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    label {
        width: 65px;
        height: 31px;
        position: relative;
        display: block;
        background: var(--detail-2);
        border-radius: 200px;
        cursor: pointer;
        transition: 0.3s;
    }
    label:after {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        top: 3px;
        left: 3px;
        background: #fff;
        border-radius: 180px;
        transition: 0.3s;
    }
    input:checked + label:after {
        left: 62px;
        transform: translateX(-100%);
        background: #000;
    }   
    label:active:after {
        width: 30px;
    }
    label svg {
        position: absolute;
        z-index: 100;
    }
    .sun {
        left: 5.3px;
        fill: #000;
        transition: 0.3s;
        width: 20px;
        top: 5px;
    }
    .moon {
        left: 43px;
        fill: #fff;
        transition: 0.3s;
        width: 15px;
        top: 7px;
    }
    input:checked + label .sun {
        fill: #fff;
    }
    input:checked + label .moon {
        fill: #fff;
    }
    @media (min-width: 768px) {
        padding: 0;
        display: block;
        margin-top: -15px;
    }
`;