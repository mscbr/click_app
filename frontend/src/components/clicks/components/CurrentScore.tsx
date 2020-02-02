import React from 'react';
import styled from 'styled-components';

import { secondary } from '../../shared/Styles';

const ScorePanel = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-around;
    line-height: 36px;
    margin-top: 20px;
`;
const StyledScore = styled.div`
    label {
        display: block;
        font-size: medium;
        font-style: italic;
    }
    span {
        font-size: 32px;
        font-weight: 900;
        color: ${secondary};
    }
`;

interface Props {
    your_clicks: number;
    team_clicks: number;
}

const CurrentScore: React.FC<Props> = props => {
    const { your_clicks, team_clicks } = props;
    return (
        <ScorePanel>
            <StyledScore>
                <label>Your Clicks:</label>
                <span>{your_clicks}</span>
            </StyledScore>
            <StyledScore>
                <label>Team Clicks:</label>
                <span>{team_clicks}</span>
            </StyledScore>
        </ScorePanel>
    );
};

export default CurrentScore;
