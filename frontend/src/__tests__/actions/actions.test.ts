import * as types from '../../redux/types';
import * as actions from '../../redux/actions/click';

// example redux action test

describe('actions', () => {
    it('setSession', () => {
        const expectedAction = {
            type: types.SET_SESSION,
            payload: 'random-string'
        };
        expect(actions.setSession('random-string')).toEqual(expectedAction);
    });
});
