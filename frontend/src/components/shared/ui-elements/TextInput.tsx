import React from 'react';
import styled from 'styled-components';

import { secondary, accentGray } from '../Styles';

const StyledTextInput = styled.div`
    flex-shrink: 1;
    width: auto;
    margin-bottom: 0px;
    label {
        display: block;
        text-align: left;
        margin-bottom: 6px;
    }
    input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px 14px;
        border: 1px solid ${accentGray};
        border-radius: 6px;
        outline: none;
        transition: border 0.4s ease-in-out 0s;
        &:focus {
            border: 1px solid ${secondary};
        }
    }
`;

interface Props {
    label?: string;
    placeholder?: string;
}

const TextInput: React.FC<Props> = props => {
    const { label, placeholder } = props;
    return (
        <StyledTextInput>
            <label>
                {label}
                {`:`}
            </label>
            <input type="text" placeholder={placeholder} />
        </StyledTextInput>
    );
};

export default TextInput;
