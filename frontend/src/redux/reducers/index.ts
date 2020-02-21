import { combineReducers } from 'redux';
import leaderBoardReducer, { LeaderBoardState } from './leaderBoard';
import clickReducer, { ClickState } from './click';

export enum ReduxActionTypes {
    SET_SESSION = 'SET_SESSION',
    CLICK_REQUEST = 'CLICK_REQUEST',
    CLICK_SUCCESS = 'CLICK_SUCCESS',
    CLICK_FAILED = 'CLICK_FAILED',
    LEADERBOARD_REQUEST = 'LEADERBOARD_REQUEST',
    LEADERBOARD_SUCCESS = 'LEADERBOARD_SUCCESS',
    LEADERBOARD_FAILED = 'LEADERBOARD_FAILED'
}

export interface ReduxBaseAction {
    type: ReduxActionTypes;
}

const rootReducer = combineReducers({
    leaderBoardReducer,
    clickReducer
});

export type AppState = {
    leaderBoardReducer: LeaderBoardState;
    clickReducer: ClickState;
};

export default rootReducer;
