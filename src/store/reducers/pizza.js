import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    pizzas: [],
    checkout: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_PIZZAS:
            return updateObject(state, {
                pizzas: action.data
            });
        case actionTypes.ADD_TO_CHECKOUT:
            return updateObject(state, {
                checkout: state.checkout.concat(action.data)
            });
        case actionTypes.CLEAR_CHECKOUT:
            return updateObject(state, {
                checkout: []
            })
        default:
            return state;
    }
}
 
export default reducer;