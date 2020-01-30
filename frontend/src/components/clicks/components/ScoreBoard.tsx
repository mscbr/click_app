import React from 'react';
import styled from 'styled-components';

import { accentGray } from '../../shared/Styles';

const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 0.9rem;
    th,
    td {
        padding: 1em;
        margin: 0;
    }
    thead {
        background: transparent;
        td:nth-child(2) {
            text-align: center;
        }
        td:nth-child(3) {
            text-align: right;
        }
    }
    tbody {
        tr {
            th:nth-child(2) {
                text-align: left;
            }
            th:nth-child(odd) {
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
                    <td></td>
                    <td>Team</td>
                    <td>Clicks</td>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((position, i) => {
                        if (count)
                            return i < count ? (
                                <tr>
                                    <th>{position.order}</th>
                                    <th>{position.team}</th>
                                    <th>{position.clicks}</th>
                                </tr>
                            ) : null;

                        return (
                            <tr>
                                <th>{position.order}</th>
                                <th>{position.team}</th>
                                <th>{position.clicks}</th>
                            </tr>
                        );
                    })}
            </tbody>
        </StyledTable>
    );
};

export default ScoreBoard;
