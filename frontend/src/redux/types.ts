export const SET_SESSION = 'SET_SESSION';
export const CLICK = 'CLICK';
export const LEADERBOARD_REQUEST = 'LEADERBOARD_REQUEST';
export const LEADERBOARD_SUCCESS = 'LEADERBOARD_SUCCESS';
export const LEADERBOARD_FAILED = 'LEADERBOARD_FAILED';

// init/root state type
export interface State {
    leaderBoard?: LeaderBoardItem[];
    currentScore?: {
        your_clicks: number;
        team_clicks: number;
    };
    session?: string;
    loadingData: string;
}

// one position from leaderboard
export interface LeaderBoardItem {
    order: number;
    team: string;
    clicks: number;
}

// to rework
// // actions types
// export interface SetSessionAction {
//     type: typeof SET_SESSION;
//     payload: string;
// }

// // click action payload type
// export interface ClickAction {
//     type: typeof CLICK;
//     payload: {
//         clicks: {
//             status: number;
//             data: { your_clicks: number; team_clicks: number };
//         };
//         leaderBoard: {
//             status: number;
//             data: LeaderBoardItem[];
//         };
//     };
// }

// // get leaderboard payload type
// export interface GetLeaderBoardAction {
//     type: typeof LEADERBOARD_REQUEST;
//     payload: {
//         data?: LeaderBoardItem[] | { message: string };
//     };
// }
