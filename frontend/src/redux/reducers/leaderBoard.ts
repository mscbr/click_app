import { ReduxActionTypes } from './index';
import {
    LeaderBoardRequest,
    LeaderBoardSuccess,
    LeaderBoardFailed
} from 'redux/actions/leaderBoard';

export interface LeaderBoardItem {
    order: number;
    team: string;
    clicks: number;
}
export interface LeaderBoardState {
    leaderBoard?: LeaderBoardItem[];
    loadingBoard: string;
    errorMessage?: string;
}

const initState = {
    leaderBoard: [],
    loadingBoard: 'success'
};

export type LeaderBoardReducerActions =
    | LeaderBoardRequest
    | LeaderBoardSuccess
    | LeaderBoardFailed;

const leaderBoardReducer = (
    state: LeaderBoardState = initState,
    action: LeaderBoardReducerActions
) => {
    switch (action.type) {
        case ReduxActionTypes.LEADERBOARD_REQUEST:
            return {
                ...state,
                loadingBoard: 'pending',
                errorMessage: ''
            };
        case ReduxActionTypes.LEADERBOARD_SUCCESS:
            return {
                ...state,
                loadingBoard: 'success',
                leaderBoard: action.payload.data,
                errorMessage: ''
            };
        case ReduxActionTypes.LEADERBOARD_FAILED:
            return {
                ...state,
                loadingBoard: 'error',
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};

export default leaderBoardReducer;
