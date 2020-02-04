// simplified actions
// small app so all actions in one file
import axios from 'axios';

// seting 'random-string' for clicking session
export const setSession = (session: string) => {
    return {
        type: 'SET_SESSION',
        payload: session
    };
};

// sending a click & then updating scoreboard
export const click = (team: string, session: string) => {
    return async (dispatch: any) => {
        let clicks, data;
        try {
            // post click within a current session
            clicks = await axios.post(
                `https://klikuj.herokuapp.com/api/v1/klik`,
                { team, session }
            );
            // fetching updated leaderboard
            data = await axios.get(
                `https://klikuj.herokuapp.com/api/v1/leaderboard`
            );
        } catch (err) {
            console.log(new Error(err));
        }

        // dispatch w/ dummy error handling
        dispatch({
            type: 'CLICK',
            payload: {
                clicks: clicks || { status: 500, data: {} },
                leaderBoard: data || { status: 500, data: [] }
            }
        });
    };
};

// simplified fetching action w/ out actual error handling
export const getLeaderBoard = () => {
    return async (dispatch: any) => {
        let data;
        try {
            data = await axios.get(
                `https://klikuj.herokuapp.com/api/v1/leaderboard`
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
