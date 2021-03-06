import React from 'react';

import styled from 'styled-components';
import { secondary } from '../Styles';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 30px;
    background: ${secondary};
    color: white;
    margin: 0;
    span {
        letter-spacing: 1px;
        font-weight: 900;
    }
`;

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <span>{'click-app-mscbr.herokuapp.com'.toUpperCase()}</span>
        </StyledHeader>
    );
};

export default Header;
