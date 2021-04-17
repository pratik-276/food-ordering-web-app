import axios from 'axios';
import { toast } from 'react-toastify';
import * as actionTypes from './actionTypes';

const getPizzas = (data) => {
    return {
        type: actionTypes.GET_ALL_PIZZAS,
        data: data
    }
}

export const getAllPizzas = () => {
    return dispatch => {
        axios.get("menu.json")
            .then(response => {
                const pizzas = [];
                for(let h in response.data){
                    pizzas.push({
                        ...response.data[h],
                        id: h
                    });
                }
                dispatch(getPizzas(pizzas));
            }).catch(err => {
                console.log(err);
            })
    }
}

export const addToCheckout = (data) => {
    return {
        type: actionTypes.ADD_TO_CHECKOUT,
        data: data
    }
}

const clearCheckout = () => {
    return {
        type: actionTypes.CLEAR_CHECKOUT,
    }
}

export const placeOrder = (data) => {
    return dispatch => {
        axios.post("orders.json", data)
            .then(response => {
                dispatch(clearCheckout());
                toast.success("Order Placed Successfully");
            }).catch(err => {
                console.log(err);
            })
    }
}