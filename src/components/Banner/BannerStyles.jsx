import styled from "styled-components";

export const BannerWrap = styled.div`
    height: 15vw;
    position: relative;
    background-color: #777373;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("products.jpg");
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const BannerTitle = styled.h1`
    margin: 0;
    position: absolute;
    color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 50px;
    font-weight: 900;
`;
