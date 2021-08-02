import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavbarWrap = styled.div`
    background-color: #000000;
    padding: 15px;
    grid-area: navbar;
    display: flex;
    justify-content: space-between;
`;

export const Menu = styled.ul`
    display: flex;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    font-size: 15px;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    li {
        margin-left: 30px;
        margin-right: 30px;
        font-size: 20px;
        font-weight: bold;
        &:hover {
            color: grey;
            cursor: pointer;
        }
    }
    @media (max-width: 800px) {
        display: none;
    }
`;
export const LogoWrap = styled.div``;

export const Checkout = styled(FaShoppingCart)`
    color: white;
    &:hover {
        color: grey;
        cursor: pointer;
    }
`;
