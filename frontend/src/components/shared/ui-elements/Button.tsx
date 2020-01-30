import React from 'react';
import styled from 'styled-components';

import { secondary } from '../Styles';

const StyledButton = styled.button`
    background: ${secondary};
    color: white;
    border: none;
    border-radius: 6px;
    margin-left: 16px;
    text-transform: uppercase;
`;

interface Props {
    text?: string;
}

const Button: React.FC<Props> = props => {
    return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
