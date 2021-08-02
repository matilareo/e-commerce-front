import styled from "styled-components";

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    grid-area: footer;
`;

export const LogoWrap = styled.div`
    width: 40px;
    height: 40px;
    margin: 50px;
    svg {
        height: 100%;
        width: 100%;
        color: white;
        &:hover {
            color: grey;
            cursor: pointer;
        }
    }
`;
