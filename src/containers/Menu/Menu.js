import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleItem from './SingleItem/SingleItem';

class Menu extends Component {
    state = {  }
    componentWillMount(){
        this.props.getPizzas();
    }
    render() { 
        return (
            <div className="container">
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>MENU</h3></li>
                    {this.props.pizzas.map(pizza => (
                        <SingleItem key={pizza.id}
                            pizza={pizza} />
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        pizzas: state.pizza.pizzas
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getPizzas: () => dispatch(actions.getAllPizzas())
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Menu);