import React from "react";

import styled from "styled-components";
import { primary, accentGray } from "../Styles";

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 30px;
    background: ${accentGray};
    color: white;
    text-align: center;
    margin: 0;
    span {
        letter-spacing: 1px;
        font-weight: 900;
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <span>STFU_CLICK.COM</span>
        </StyledHeader>
    );
};

export default Header;
