import { ReduxActionTypes } from './index';
import {
    setSession,
    clickRequest,
    clickSuccess,
    clickFailed
} from 'redux/actions/click';

export interface CurrentScore {
    your_clicks: number;
    team_clicks: number;
}
export interface ClickState {
    currentScore?: CurrentScore;
    session: string;
    loadingClick: string;
    errorMessage?: string;
}

const initState = {
    currentScore: {
        your_clicks: 0,
        team_clicks: 0
    },
    session: 'init',
    loadingClick: 'success'
};

export type ClickReducerActions =
    | setSession
    | clickRequest
    | clickSuccess
    | clickFailed;

const clickReducer = (
    state: ClickState = initState,
    action: ClickReducerActions
) => {
    switch (action.type) {
        case ReduxActionTypes.SET_SESSION:
            return {
                ...state,
                session: action.payload
            };
        case ReduxActionTypes.CLICK_REQUEST:
            return {
                ...state,
                loadingClick: 'pending',
                errorMessage: ''
            };
        case ReduxActionTypes.CLICK_SUCCESS:
            return {
                ...state,
                loadingClick: 'success',
                currentScore: action.payload.data,
                errorMessage: ''
            };
        case ReduxActionTypes.CLICK_FAILED:
            return {
                state,
                loadingClick: 'error',
                errorMessage: action.payload.errorMessage
            };
        default:
            return state;
    }
};

export default clickReducer;
