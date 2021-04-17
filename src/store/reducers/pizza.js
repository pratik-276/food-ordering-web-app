import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    pizzas: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_PIZZAS:
            return updateObject(state, {
                pizzas: action.data
            });
        default:
            return state;
    }
}
 
export default reducer;