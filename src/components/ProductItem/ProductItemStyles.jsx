import styled from "styled-components";

export const ProductItemWrap = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 58%;
    border-bottom: 1px solid grey;
`;

export const ProductContent = styled.div`
    padding: 10px;
`;

export const ProductTitle = styled.h1`
    margin: 1px;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    text-decoration: underline;
    height: auto;
    line-height: 20px;
`;

export const ProductPrice = styled.h2`
    height: auto;
    margin: 0;
    text-align: center;
`;

export const ProductDescription = styled.p`
    height: auto;
    font-size: 15px;
    margin: 0;
`;

export const ProductBuyButton = styled.div`
    height: 10px;
    text-align: center;
`;
