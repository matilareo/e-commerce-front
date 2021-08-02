import React from "react";
import { BannerWrap, BannerTitle, BannerImage } from "./BannerStyles";
import ProductsImg from "Assets/products.jpg";
export default function Banner({ children }) {
    return (
        <BannerWrap>
            <BannerImage src={ProductsImg}></BannerImage>
            <BannerTitle>{children}</BannerTitle>
        </BannerWrap>
    );
}
