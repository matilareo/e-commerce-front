import styled from "styled-components";

export const LayoutWrap = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas:
        "navbar"
        "content"
        "footer";
    grid-template-rows: 50px 1fr 200px;
`;
