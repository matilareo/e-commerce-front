import React from "react";
import { FooterWrap, LogoWrap } from "./FooterStyles";
import { FaInstagram } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    function openTab() {
        window.open("https://www.instagram.com/cerfit_");
    }

    return (
        <FooterWrap>
            {/* <LogoWrap>
                <GrFacebook /> */}
            {/* </LogoWrap> */}
            <LogoWrap>
                <FaInstagram onClick={openTab} />
            </LogoWrap>
            {/* <LogoWrap>
                <FaTwitter />
            </LogoWrap> */}
        </FooterWrap>
    );
}
