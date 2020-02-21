import React from 'react';
import styled, { keyframes } from 'styled-components';
import { secondary, primary } from 'components/shared/Styles';

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
     
`;

const StyledSpinner = styled.div`
    display: block;
    position: relative;
    top: 50%;
    left: 45%;
    height: 50px;
    width: 50px;
    margin: 25px 0 25px 0;
    border: 4px ${secondary} solid;
    border-top: 4px ${primary} solid;
    border-bottom: 4px ${primary} solid;
    border-radius: 50%;
    animation: ${spin} 1s infinite linear;
`;

const LoadingSpinner: React.FC = () => {
    return <StyledSpinner></StyledSpinner>;
};

export default LoadingSpinner;
