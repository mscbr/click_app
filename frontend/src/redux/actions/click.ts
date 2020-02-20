import axios from 'axios';
import { AnyAction, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ReduxActionTypes, ReduxBaseAction } from 'redux/reducers/index';
import { CurrentScore, ClickReducerActions } from 'redux/reducers/click';
import { getLeaderBoard } from './leaderBoard';

export interface setSession extends ReduxBaseAction {
    type: ReduxActionTypes.SET_SESSION;
    payload: string;
}

export interface clickRequest extends ReduxBaseAction {
    type: ReduxActionTypes.CLICK_REQUEST;
}
export interface clickSuccess extends ReduxBaseAction {
    type: ReduxActionTypes.CLICK_SUCCESS;
    payload: {
        data: CurrentScore;
    };
}
export interface clickFailed extends ReduxBaseAction {
    type: ReduxActionTypes.CLICK_FAILED;
    payload: {
        errorMessage: string;
    };
}

// seting 'random-string' for clicking session
export const setSession = (session: string) => {
    return {
        type: 'SET_SESSION',
        payload: session
    };
};

// sending a click & then updating scoreboard
export const click: ActionCreator<ThunkAction<
    Promise<AnyAction>,
    AnyAction,
    undefined,
    ClickReducerActions
>> = (team: string, session: string) => {
    return async (dispatch: any) => {
        // set loadingClick: 'pending'
        dispatch({
            type: ReduxActionTypes.CLICK_REQUEST
        });
        // posting click to the api
        let clicks;
        try {
            // post click within a current session
            clicks = await axios.post(
                `https://click-app-rest-mscbr.herokuapp.com/api/v1/click`,
                { team, session } // body
            );
        } catch (err) {
            return dispatch({
                type: ReduxActionTypes.CLICK_FAILED,
                payload: { errorMessage: err.message }
            });
        }

        // set loadingClick: 'success', + click
        dispatch({
            type: ReduxActionTypes.CLICK_SUCCESS,
            payload: clicks
        });

        // update leaderBoard
        return dispatch(getLeaderBoard());
    };
};
