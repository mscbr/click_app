import React from 'react';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';

const LEADERBOARD = ['api dummy mock will go here'];

const StyledMain = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;
`;

const EnterTeam: React.FC = () => {
    return (
        <StyledMain>
            <Card />
        </StyledMain>
    );
};

export default EnterTeam;
