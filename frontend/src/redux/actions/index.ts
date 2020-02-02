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

export const getScoresSuccess = () => {
    return async (dispatch: any) => {
        let data;
        try {
            data = await axios.get(
                `http://klikuj.herokuapp.com/api/v1/leaderboard`
            );
        } catch (err) {
            console.log(err);
        }

        // const data = [{}];
        dispatch({ type: 'GET_LEADERBOARD_REQUEST', payload: data || [] });
    };
};
