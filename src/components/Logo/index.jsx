import React from "react";
import CerfitLogo from "Assets/logo_white.png";

export default function Logo({ size }) {
    return <img src={CerfitLogo} height={size || "20px"}></img>;
}
