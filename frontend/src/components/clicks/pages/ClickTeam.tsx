import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { State } from '../../../redux/types';
import styled from 'styled-components';
import { secondary } from '../../shared/Styles';
import * as data from '../../../helpers/data';

import Card from '../../shared/ui-elements/Card';
import TextInput from '../../shared/ui-elements/TextInput';
import Button from '../../shared/ui-elements/Button';
import ScoreBoard from '../components/ScoreBoard';
import CurrentScore from '../components/CurrentScore';

import { click } from '../../../redux/actions/click';

const StyledMain = styled.main`
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;

    /* ScoreBoard overwrites*/
    tbody {
        tr:nth-child(4) {
            background: ${secondary};
            font-size: 1.5em;
            color: white;
        }
    }
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

interface Props extends RouteComponentProps<{ teamName: string }>, State {
    click: (team: string, session: string) => any;
}

const ClickTeam: React.FC<Props> = props => {
    const { teamName } = props.match.params;
    const { leaderBoard, currentScore, click } = props;
    console.log('ClickTeam', props);
    return (
        <StyledMain>
            <StyledH1>
                Clicking for team <span>{teamName}</span>
            </StyledH1>
            <StyledCopyPaste>
                <TextInput
                    value={window.location.href}
                    label="Too lazy to click? Let your pals click for you"
                />
            </StyledCopyPaste>
            <Card>
                <StyledCardTop>
                    <Button
                        text="CLICK!"
                        onClick={() => click(teamName, 'random-string')}
                    />
                </StyledCardTop>
                <CurrentScore
                    your_clicks={currentScore ? currentScore.your_clicks : 0}
                    team_clicks={currentScore ? currentScore.team_clicks : 0}
                />
                <ScoreBoard
                    data={data.scoreBoardBandPass(leaderBoard || [], teamName)}
                    count={7}
                />
                <StyledP>Want to be top? STFU and click!</StyledP>
            </Card>
        </StyledMain>
    );
};

const mapStateToProps = (state: State) => {
    return {
        leaderBoard: state.leaderBoard,
        currentScore: state.currentScore
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        click: (team: string, session: string) => {
            dispatch(click(team, session));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickTeam);
