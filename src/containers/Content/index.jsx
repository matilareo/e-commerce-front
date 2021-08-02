import React from "react";
import { ContentWrap, ContentComponentWrap } from "./ContentStyles";
export default function Content({ children }) {
    return (
        <ContentWrap>
            <ContentComponentWrap>{children}</ContentComponentWrap>
        </ContentWrap>
    );
}
