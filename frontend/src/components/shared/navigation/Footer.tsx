import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.div`
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 30px;
    background: transparent;
    color: black;
    text-align: center;
    margin: 0;
    span {
        font-size: medium;
        font-weight: 300;
        font-style: italic;
    }
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <span>
                If you don't like this page, it is{' '}
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">your</a>{' '}
                fault.{' '}
            </span>
        </StyledFooter>
    );
};

export default Footer;
