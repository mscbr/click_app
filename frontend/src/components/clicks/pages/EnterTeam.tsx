import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';
import TextInput from '../../shared/ui-elements/TextInput';
import Button from '../../shared/ui-elements/Button';
import QuoteBlock from '../../clicks/components/QuoteBlock';
import Ribbon from '../../clicks/components/Ribbon';
import ScoreBoard from '../components/ScoreBoard';

const LEADERBOARD = [
    {
        order: 1,
        team: 'YourTestApp',
        clicks: 255773
    },
    {
        order: 2,
        team: 'Prsicek',
        clicks: 219691
    },
    {
        order: 3,
        team: 'kkk.',
        clicks: 219411
    },
    {
        order: 4,
        team: 'MK',
        clicks: 153625
    },
    {
        order: 5,
        team: 'XDD',
        clicks: 129344
    },
    {
        order: 6,
        team: 'aut',
        clicks: 84081
    },
    {
        order: 7,
        team: 'Hrm',
        clicks: 60798
    },
    {
        order: 8,
        team: '-___-',
        clicks: 60769
    },
    {
        order: 9,
        team: 'Andrii',
        clicks: 50192
    },
    {
        order: 10,
        team: 'a',
        clicks: 35314
    },
    {
        order: 11,
        team: 'I think, this is a bug',
        clicks: 26684
    },
    {
        order: 12,
        team: '🌋',
        clicks: 26049
    },
    {
        order: 13,
        team: 'LUV',
        clicks: 25663
    },
    {
        order: 14,
        team: '1',
        clicks: 24011
    },
    {
        order: 15,
        team: 'undefined',
        clicks: 19374
    },
    {
        order: 16,
        team: 'Your mom',
        clicks: 16187
    }
];

const StyledMain = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;
`;
const StyledCardTop = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px 0 24px;
`;
const StyledP = styled.p`
    text-align: center;
    font-style: italic;
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
                <Ribbon title="TOP 10 Clickers" />
                <ScoreBoard data={LEADERBOARD} count={10} />
                <StyledP>Want to be top? STFU and click!</StyledP>
            </Card>
        </StyledMain>
    );
};

export default EnterTeam;
