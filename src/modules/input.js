import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';
const initialState = Map({
    value: ''
});

export const setInput = createAction(SET_INPUT);

export default handleActions({
    [SET_INPUT]: (state, action) => {
        return state.set('value', action.payload);
    }
}, initialState);