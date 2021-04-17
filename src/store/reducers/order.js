import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    orders: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ORDERS:
            return updateObject(state, {
                orders: action.data
            });
        default:
            return state;
    }
}
 
export default reducer;