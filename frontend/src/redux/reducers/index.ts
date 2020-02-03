const initState = {
    leaderBoard: [
        // {
        //     order: 1,
        //     team: 'YourTestApp',
        //     clicks: 255773
        // },
        // {
        //     order: 2,
        //     team: 'Prsicek',
        //     clicks: 219691
        // },
        // {
        //     order: 3,
        //     team: 'kkk.',
        //     clicks: 219411
        // },
        // {
        //     order: 4,
        //     team: 'MK',
        //     clicks: 153625
        // },
        // {
        //     order: 5,
        //     team: 'XDD',
        //     clicks: 129344
        // },
        // {
        //     order: 6,
        //     team: 'aut',
        //     clicks: 84081
        // },
        // {
        //     order: 7,
        //     team: 'Hrm',
        //     clicks: 60798
        // },
        // {
        //     order: 8,
        //     team: '-___-',
        //     clicks: 60769
        // },
        // {
        //     order: 9,
        //     team: 'Andrii',
        //     clicks: 50192
        // },
        // {
        //     order: 10,
        //     team: 'a',
        //     clicks: 35314
        // },
        // {
        //     order: 11,
        //     team: 'I think, this is a bug',
        //     clicks: 26684
        // },
        // {
        //     order: 12,
        //     team: '🌋',
        //     clicks: 26049
        // },
        // {
        //     order: 13,
        //     team: 'LUV',
        //     clicks: 25663
        // },
        // {
        //     order: 14,
        //     team: '1',
        //     clicks: 24011
        // },
        // {
        //     order: 15,
        //     team: 'undefined',
        //     clicks: 19374
        // },
        // {
        //     order: 16,
        //     team: 'Your mom',
        //     clicks: 16187
        // }
    ],
    currentScore: {
        your_clicks: 0,
        team_clicks: 0
    },
    session: ''
};

const rootReducer = (state = initState, action: any) => {
    console.log(action);

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
