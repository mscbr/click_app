import React from 'react';
import styled from 'styled-components';

import { accentGray } from '../../shared/Styles';

const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 0.9rem;
    max-width: 100%;
    th,
    td {
        padding: 1em;
        margin: 0;
    }
    thead {
        background: transparent;
        color: ${accentGray};
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: bold;
        padding: 0.5em;
        th:nth-child(2) {
            text-align: center;
        }
        th:nth-child(3) {
            text-align: right;
        }
    }
    tbody {
        tr {
            td:nth-child(2) {
                text-align: left;
                max-width: 272px;
                width: 100%;
            }
            td:nth-child(odd) {
                text-align: right;
            }
        }
        tr:nth-child(even) {
            background: ${accentGray};
        }
        tr:nth-child(odd) {
            background: #9dcbcd;
        }
    }
`;

interface Props {
    data?: {
        order: number;
        team: string;
        clicks: number;
    }[];
    count?: number;
}

const ScoreBoard: React.FC<Props> = props => {
    const { data, count } = props;
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th></th>
                    <th>Team</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((position, i) => {
                        if (count)
                            return i < count ? (
                                <tr key={position.team + i}>
                                    <td>{position.order}</td>
                                    <td>{position.team}</td>
                                    <td>{position.clicks}</td>
                                </tr>
                            ) : null;

                        return (
                            <tr key={position.team + i}>
                                <td>{position.order}</td>
                                <td>{position.team}</td>
                                <td>{position.clicks}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </StyledTable>
    );
};

export default ScoreBoard;
