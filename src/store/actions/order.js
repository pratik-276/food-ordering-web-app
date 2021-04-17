import axios from 'axios';
import * as actionTypes from './actionTypes';

const getOrders = (data) => {
    return {
        type: actionTypes.GET_ORDERS,
        data: data
    }
}

export const getAllOrders = () => {
    return dispatch => {
        axios.get("orders.json")
            .then(response => {
                const orders = [];
                for(let h in response.data){
                    orders.push({
                        ...response.data[h],
                        id: h
                    });
                }
                dispatch(getOrders(orders));
            }).catch(err => {
                console.log(err);
            })
    }
}