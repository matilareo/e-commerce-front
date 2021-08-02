import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { LayoutWrap } from "./LayoutStyles";
import Content from "Containers/Content";
import Navbar from "Components/Navbar";
import Footer from "Components/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <LayoutWrap>
                <Navbar />
                <Content>{children}</Content>
                <Footer />
            </LayoutWrap>
        </>
    );
};

export default withRouter(Layout);
