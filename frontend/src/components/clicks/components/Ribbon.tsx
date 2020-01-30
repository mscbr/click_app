import React from 'react';
import styled from 'styled-components';

import { secondary, accentGray } from '../../shared/Styles';

const StyledRibbon = styled.div`
    padding: 1em;
    min-width: 30%;
    margin: 100px auto 20px auto;
    position: relative;
    color: white;
    text-align: center;
    letter-spacing: 0.2em;
    background: ${secondary};
    z-index: 3;

    &:before,
    &:after {
        content: '';
        bottom: -0.5em;
        position: absolute;
        display: block;
        border: 1.5em solid ${secondary};
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
        z-index: -2;
    }

    &:before {
        left: -1.7em;
        border-right-width: 0.75em;
        border-left-color: transparent;
    }

    &:after {
        right: -1.7em;
        border-left-width: 0.75em;
        border-right-color: transparent;
    }
    span {
        &:before,
        &:after {
            content: '';
            bottom: -0.5em;
            position: absolute;
            display: block;
            border-style: solid;
            border-color: ${accentGray} transparent transparent transparent;
            z-index: -1;
        }

        &:before {
            left: 0;
            border-width: 0.5em 0 0 0.5em;
        }

        &:after {
            right: 0;
            border-width: 0.5em 0.5em 0 0;
        }
    }
`;
interface Props {
    title: string;
}
const Ribbon: React.FC<Props> = props => {
    return (
        <StyledRibbon>
            <span>{props.title}</span>
        </StyledRibbon>
    );
};

export default Ribbon;
