import React from 'react';
import styled from 'styled-components';

import { secondary } from '../Styles';

const StyledButton = styled.button`
    background: ${secondary};
    flex-grow: 1;
    color: white;
    border: none;
    outline: none;
    border-radius: 6px;
    /* margin-left: 16px; */
    text-transform: uppercase;
    font-size: 21px;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
    &:active {
        cursor: pointer;
        opacity: 0.7;
        transform: scale(0.9);
    }
`;

interface Props {
    text?: string;
    className?: string;
}

const Button: React.FC<Props> = props => {
    return (
        <StyledButton className={props.className}>{props.text}</StyledButton>
    );
};

export default Button;
