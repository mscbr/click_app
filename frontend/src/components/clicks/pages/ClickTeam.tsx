import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from 'redux/reducers/index';
import styled from 'styled-components';
import { secondary } from 'components/shared/Styles';
import * as data from 'helpers/data';
import { v1 as uuidv1 } from 'uuid';

import Card from 'components/shared/ui-elements/Card';
import TextInput from 'components/shared/ui-elements/TextInput';
import Button from 'components/shared/ui-elements/Button';
import LoadingSpinner from 'components/shared/ui-elements/LoadingSpinner';
import ScoreBoard from '../components/ScoreBoard';
import CurrentScore from '../components/CurrentScore';

import { click, setSession } from 'redux/actions/click';
import { ClickState } from 'redux/reducers/click';
import { getLeaderBoard } from 'redux/actions/leaderBoard';
import { LeaderBoardState } from 'redux/reducers/leaderBoard';

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

interface Props
    extends RouteComponentProps<{ teamName: string }>,
        LeaderBoardState,
        ClickState {
    click: (team: string, session: string) => any;
    setSession: (session: string) => any;
    getLeaderBoard: () => any;
}

const ClickTeam: React.FC<Props> = props => {
    const { teamName } = props.match.params;
    const {
        leaderBoard,
        currentScore,
        click,
        session,
        loadingClick,
        setSession,
        getLeaderBoard
    } = props;
    const [score, setScore] = useState();

    useEffect(() => {
        switch (loadingClick) {
            case 'pending':
                setScore(<LoadingSpinner />);
                return;
            case 'success':
                setScore(
                    <CurrentScore
                        your_clicks={
                            currentScore ? currentScore.your_clicks || 0 : 0
                        }
                        team_clicks={
                            currentScore ? currentScore.team_clicks : 0
                        }
                    />
                );
                return;
            case 'error':
                setScore(<h2>Server Error</h2>);
                return;
            default:
                setScore(<LoadingSpinner />);
        }
    }, [loadingClick]);

    // ComponentDidMount
    useEffect(() => {
        setSession(uuidv1());
        getLeaderBoard();
        // trick for displaying team_clicks on init
        click(teamName, session || '');
    }, []);

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
                        onClick={() => click(teamName, session || '')}
                    />
                </StyledCardTop>
                {score}
                {/* loading logic handled different way in order to improve user experience */}
                {leaderBoard && leaderBoard.length ? (
                    <ScoreBoard
                        data={data.scoreBoardBandPass(
                            leaderBoard || [],
                            teamName
                        )}
                        count={7}
                    />
                ) : (
                    <LoadingSpinner />
                )}
                <StyledP>Want to be top? Just CLICK!</StyledP>
            </Card>
        </StyledMain>
    );
};

const mapStateToProps = (state: AppState) => {
    const { leaderBoard } = state.leaderBoardReducer;
    const { currentScore, session, loadingClick } = state.clickReducer;
    return {
        leaderBoard,
        currentScore,
        session,
        loadingClick
    };
};
const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AnyAction> | any
) => {
    return {
        click: (team: string, session: string) =>
            dispatch(click(team, session)),
        setSession: (session: string) => dispatch(setSession(session)),
        getLeaderBoard: () => dispatch(getLeaderBoard())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClickTeam);
