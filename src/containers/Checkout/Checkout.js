import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleItem from './SingleItem/SingleItem';
import M from 'materialize-css/dist/js/materialize.min.js';

class Checkout extends Component {
    state = {
        totalPrice: "0.00"
    }
    componentWillMount(){
        let price = 0;
        this.props.checkout.map(item => price+=parseFloat(item.price));
        this.setState({totalPrice: price.toFixed(2)+''});
    }
    placeOrder = () => {
        const newData = {
            orderData: this.props.checkout,
            totalPrice: this.state.totalPrice
        }
        this.props.placeOrder(newData);
        this.setState({totalPrice: "0.00"});
        this.props.history.push("/orders");
    }
    render() { 
        return (
            <div className="container" style={{
                paddingBottom: "30px"
            }}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>CHECKOUT</h3></li>
                </ul>
                {this.props.checkout.map(pizza => (
                        <SingleItem key={pizza.name}
                            pizza={pizza} />
                ))}
                <div className="center">
                    <p style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}>Total Price: ${this.state.totalPrice}</p>
                </div>
                <div className="center" style={{
                    marginTop: "20px"
                }}>
                    <button className="btn btn-large green darken-4 waves effect waves-light"
                        onClick={this.placeOrder}
                        disabled={this.state.totalPrice==='0.00'}>Place Order</button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        checkout: state.pizza.checkout
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        placeOrder: (data) => dispatch(actions.placeOrder(data))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout);