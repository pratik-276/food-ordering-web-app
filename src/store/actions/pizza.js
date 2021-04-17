import axios from 'axios';
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