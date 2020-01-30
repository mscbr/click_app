import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';
import TextInput from '../../shared/ui-elements/TextInput';
import Button from '../../shared/ui-elements/Button';
import QuoteBlock from '../../clicks/components/QuoteBlock';

const LEADERBOARD = ['api dummy mock will go here'];

const StyledMain = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;
`;
const StyledCardTop = styled.div`
    display: flex;
    padding: 0 24px 0 24px;
`;

const EnterTeam: React.FC = () => {
    const [name, setName] = useState();
    return (
        <StyledMain>
            <QuoteBlock
                paragraph={'Click me baby wone more time...'}
                cite={'The Button'}
            />
            <Card>
                <StyledCardTop>
                    <TextInput
                        label="Enter your team name"
                        placeholder="Team name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Button text="CLICK!" />
                </StyledCardTop>
            </Card>
        </StyledMain>
    );
};

export default EnterTeam;
