import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '../../shared/ui-elements/Card';
import TextInput from '../../shared/ui-elements/TextInput';
import Button from '../../shared/ui-elements/Button';
import QuoteBlock from '../../clicks/components/QuoteBlock';
import Ribbon from '../../clicks/components/Ribbon';
import ScoreBoard from '../components/ScoreBoard';

import { getScoreBoard } from '../../../redux/actions/';

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
const StyledButton = styled(Button)`
    margin-left: 16px;
`;

const EnterTeam: React.FC<State> = props => {
    const [name, setName] = useState();
    const { leaderBoard } = props;
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
                    <StyledButton text="CLICK!" />
                </StyledCardTop>
                <Ribbon title="TOP 10 Clickers" />
                <ScoreBoard data={leaderBoard} count={10} />
                <StyledP>Want to be top? STFU and click!</StyledP>
            </Card>
        </StyledMain>
    );
};

interface State {
    leaderBoard?: {
        order: number;
        team: string;
        clicks: number;
    }[];
    currentScore?: {
        your_clicks: number;
        team_clicks: number;
    };
}
const mapStateToProps = (state: State) => {
    return {
        leaderBoard: state.leaderBoard
    };
};

export default connect(mapStateToProps)(EnterTeam);
