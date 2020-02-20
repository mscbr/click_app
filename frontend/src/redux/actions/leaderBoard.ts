import axios from 'axios';
import { AnyAction, Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ReduxActionTypes, ReduxBaseAction } from 'redux/reducers/index';
import { LeaderBoardItem, LeaderBoardState } from 'redux/reducers/leaderBoard';

export interface LeaderBoardRequest extends ReduxBaseAction {
    type: ReduxActionTypes.LEADERBOARD_REQUEST;
}
export interface LeaderBoardSuccess extends ReduxBaseAction {
    type: ReduxActionTypes.LEADERBOARD_SUCCESS;
    payload: {
        data: LeaderBoardItem[];
    };
}
export interface LeaderBoardFailed extends ReduxBaseAction {
    type: ReduxActionTypes.LEADERBOARD_FAILED;
    payload: {
        errorMessage: string;
    };
}

// ??
// export type LeaderBoardReducerActions =
//     | LeaderBoardRequest
//     | LeaderBoardSuccess
//     | LeaderBoardFailed;

export const getLeaderBoard: ActionCreator<ThunkAction<
    Promise<AnyAction>,
    AnyAction,
    undefined,
    AnyAction
>> = () => {
    return async (dispatch: Dispatch) => {
        // set loadingBoard: 'pending'
        dispatch({
            type: ReduxActionTypes.LEADERBOARD_REQUEST
        });

        // fetching data from the API
        let data;
        try {
            data = await axios.get(
                `https://click-app-rest-mscbr.herokuapp.com/api/v1/leaderboard`,
                { headers: { 'Content-Type': 'application/json' } }
            );
        } catch (err) {
            // set loadingBoard: 'error', + message
            return dispatch({
                type: ReduxActionTypes.LEADERBOARD_FAILED,
                payload: { errorMessage: err.message }
            });
        }

        // set loadingBoard: 'success', + data
        return dispatch({
            type: ReduxActionTypes.LEADERBOARD_SUCCESS,
            payload: data
        });
    };
};
