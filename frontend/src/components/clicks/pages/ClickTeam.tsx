import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';
import TextInput from '../../shared/ui-elements/TextInput';
import Button from '../../shared/ui-elements/Button';
import ScoreBoard from '../components/ScoreBoard';
import CurrentScore from '../components/CurrentScore';

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
    height: 92px;
    justify-content: center;
    padding: 0 24px 0 24px;
`;
const StyledP = styled.p`
    text-align: center;
    font-style: italic;
`;
const StyledH1 = styled.h1`
    text-align: center;
    font-weight: 400;
    span {
        font-weight: bold;
    }
`;
const StyledCopyPaste = styled.div`
    text-align: center;
    label {
        display: inline-block;
        font-size: medium;
        font-style: italic;
    }
    input {
        display: inline-block;
        width: 184px;
        /*disabling focus*/
        color: transparent;
        text-shadow: 0px 0px 0px black;
        font-size: small;
        font-style: italic;
        margin-left: 5px;
    }
`;

interface Props extends RouteComponentProps<{ teamName: string }> {}

const ClickTeam: React.FC<Props> = props => {
    console.log('ClickTeam props', props);
    const [name, setName] = useState();
    return (
        <StyledMain>
            <StyledH1>
                Clicking for team <span>{props.match.params.teamName}</span>
            </StyledH1>
            <StyledCopyPaste>
                {/* <label>Too lazy to click? Let your pals click for you: </label>
                <input type="text" value={window.location.href} /> */}
                <TextInput
                    value={window.location.href}
                    label="Too lazy to click? Let your pals click for you"
                />
            </StyledCopyPaste>
            <Card>
                <StyledCardTop>
                    <Button text="CLICK!" />
                </StyledCardTop>
                <CurrentScore />
                <ScoreBoard data={LEADERBOARD} count={7} />
                <StyledP>Want to be top? STFU and click!</StyledP>
            </Card>
        </StyledMain>
    );
};

export default ClickTeam;
