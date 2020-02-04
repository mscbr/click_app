export const SET_SESSION = 'SET_SESSION';
export const CLICK = 'CLICK';
export const GET_LEADERBOARD_REQUEST = 'GET_LEADERBOARD_REQUEST';

export interface State {
    leaderBoard?: {
        order: number;
        team: string;
        clicks: number;
    }[];
    currentScore?: {
        your_clicks: number;
        team_clicks: number;
    };
    session?: string;
}

export interface LeaderBoardItem {
    order: number;
    team: string;
    clicks: number;
}

// actions types
export interface SetSessionAction {
    type: typeof SET_SESSION;
    payload: string;
}

export interface ClickAction {
    type: typeof CLICK;
    payload: {
        clicks: {
            status: number;
            data: { your_clicks: number; team_clicks: number };
        };
        leaderBoard: {
            status: number;
            data: LeaderBoardItem[];
        };
    };
}

export interface GetLeaderBoardAction {
    type: typeof GET_LEADERBOARD_REQUEST;
    payload: {
        status: number;
        data: LeaderBoardItem[];
    };
}