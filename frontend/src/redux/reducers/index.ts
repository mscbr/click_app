const initState = {
    leaderBoard: [],
    currentScore: {
        your_clicks: 0,
        team_clicks: 0
    },
    session: ''
};

// all reducers in one file - relatively small app
const rootReducer = (state = initState, action: any) => {
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
        case 'GET_LEADERBOARD_REQUEST':
            return payload.status === 200
                ? {
                      ...state,
                      leaderBoard: payload.data
                  }
                : state;
        default:
            return state;
    }
};

export default rootReducer;
