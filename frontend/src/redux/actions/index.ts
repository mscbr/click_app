// simplified actions
// small app so all actions in one file
import axios from 'axios';

export const setSession = (session: string) => {
    return {
        type: 'SET_SESSION',
        payload: session
    };
};

export const click = (team: string, session: string) => {
    return async (dispatch: any) => {
        try {
            // dispatch w/ dummy error handling
            const clicks = await axios.post(
                `http://klikuj.herokuapp.com/api/v1/leaderboard`,
                { team, session }
            );
            dispatch({
                type: 'CLICK',
                payload: clicks || { status: 500, data: {} }
            });
        } catch (err) {
            console.log(new Error(err));
        }

        // re-fetching leaderboard
        dispatch(getLeaderBoard());
    };
};

// simplified fetching action w/ out actual error handling
export const getLeaderBoard = () => {
    return async (dispatch: any) => {
        let data;
        try {
            data = await axios.get(
                `http://klikuj.herokuapp.com/api/v1/leaderboard`
            );
        } catch (err) {
            console.log(new Error(err));
        }

        // dispatch w/ dummy error handling
        dispatch({
            type: 'GET_LEADERBOARD_REQUEST',
            payload: data || { status: 500, data: [] }
        });
    };
};
