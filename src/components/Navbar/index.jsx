import React from "react";
import Logo from "Components/Logo";
import { NavbarWrap, LogoWrap, Menu, Checkout } from "./NavbarStyles";
import Badge from "@material-ui/core/Badge";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
    const { count } = useSelector((st) => st.cart);
    let history = useHistory();

    const handleProductsClick = () => {
        history.push("/products");
    };
    const handleUsClick = () => {
        history.push("/aboutMe");
    };
    const handleContactClick = () => {
        history.push("/contact");
    };
    const handleCheckoutClick = () => {
        history.push("/checkout");
    };

    return (
        <NavbarWrap>
            <LogoWrap>
                <Logo></Logo>
            </LogoWrap>
            <Menu>
                <li onClick={handleProductsClick}>Productos</li>
                <li onClick={handleUsClick}>Acerca de Mi</li>
                {/* <li onClick={handleContactClick}>Contacto</li> */}
            </Menu>
            <Badge badgeContent={count} color="secondary">
                <Checkout size={"1.2em"} onClick={handleCheckoutClick} />
            </Badge>
        </NavbarWrap>
    );
}
