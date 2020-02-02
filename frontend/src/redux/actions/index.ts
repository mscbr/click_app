import axios from 'axios';
import { LeaderBoardItem } from '../types';

export const click = (team: string, session: string) => {
    return {
        type: 'CLICK',
        payload: {
            team,
            session
        }
    };
};

export const getScoreBoard = (scores: LeaderBoardItem[]) => {
    return async (dispatch: any, getState: any) => {
        const data = await axios.get();
        dispatch({ type: 'GET_SCORE_BOARD', scores });
    };
};
