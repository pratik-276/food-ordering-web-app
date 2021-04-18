import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    pizzas: [],
    checkout: [],
    totalPrice: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_PIZZAS:
            return updateObject(state, {
                pizzas: action.data
            });
        case actionTypes.ADD_TO_CHECKOUT:
            const newCheckout = state.checkout.concat(action.data);
            let price = 0;
            newCheckout.map(item => price+=parseFloat(item.price));
            return updateObject(state, {
                checkout: newCheckout,
                totalPrice: price.toFixed(2)
            });
        case actionTypes.CLEAR_CHECKOUT:
            return updateObject(state, {
                checkout: [],
                totalPrice: 0
            })
        case actionTypes.DEL_FROM_CHECKOUT:
            const price1 = state.totalPrice - state.checkout[action.index].price;
            return updateObject(state, {
                checkout: state.checkout.filter((c,index) => index!==action.index),
                totalPrice: price1.toFixed(2)
            });
        default:
            return state;
    }
}
 
export default reducer;