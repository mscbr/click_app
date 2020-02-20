import { State } from '../types';

const initState = {
    leaderBoard: [],
    currentScore: {
        your_clicks: 0,
        team_clicks: 0
    },
    session: '',
    loadingData: 'success'
};

// all reducers in one file - relatively small app
const rootReducer = (state: State = initState, action: any) => {
    const { payload } = action;
    switch (action.type) {
        case 'SET_SESSION':
            return {
                ...state,
                session: payload
            };
        case 'CLICK':
            return payload.clicks.status === 200
                ? {
                      ...state,
                      currentScore: payload.clicks.data,
                      leaderBoard: payload.leaderBoard.data
                  }
                : state;
        case 'LEADERBOARD_REQUEST':
            return {
                ...state,
                loadingData: 'pending'
            };
        case 'LEADERBOARD_SUCCESS':
            return {
                ...state,
                loadingData: 'success',
                leaderBoard: payload.data
            };
        case 'LEADERBOARD_FAILED':
            return {
                ...state,
                loadingData: 'error'
            };
        default:
            return state;
    }
};

export default rootReducer;
