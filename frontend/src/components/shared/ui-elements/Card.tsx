import React from "react";
import styled from "styled-components";

import { secondary } from "../Styles";

const StyledCard = styled.div`
    margin: 32px auto;
    padding: 16px 0;
    width: 100%;
    background: white;
    border: 2px solid ${secondary};
    border-radius: 12px;
`;

interface Props {
    children?: JSX.Element[] | JSX.Element;
}

const Card: React.FC<Props> = props => {
    return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
