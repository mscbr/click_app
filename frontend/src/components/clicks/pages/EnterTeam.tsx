import React from 'react';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';
import QuoteBlock from '../../clicks/components/QuoteBlock';

const LEADERBOARD = ['api dummy mock will go here'];

const StyledMain = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;
`;

const EnterTeam: React.FC = () => {
    return (
        <StyledMain>
            <QuoteBlock
                paragraph={'Click me baby wone more time...'}
                cite={'The Button'}
            />
            <Card />
        </StyledMain>
    );
};

export default EnterTeam;
