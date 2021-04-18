import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleItem from './SingleItem/SingleItem';

class Checkout extends Component {
    placeOrder = () => {
        const newData = {
            orderData: this.props.checkout,
            totalPrice: this.props.totalPrice
        }
        this.props.placeOrder(newData);
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
                {this.props.checkout.map((pizza, index) => (
                        <SingleItem key={pizza.name}
                            pizza={pizza}
                            delete={() => this.props.delCheckout(index)} />
                ))}
                <div className="center">
                    <p style={{
                        marginTop: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}>Total Price: ${this.props.totalPrice}</p>
                </div>
                <div className="center" style={{
                    marginTop: "20px"
                }}>
                    <button className="btn btn-large green darken-4 waves effect waves-light"
                        onClick={this.placeOrder}
                        disabled={this.props.totalPrice==0}>Place Order</button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        checkout: state.pizza.checkout,
        totalPrice: state.pizza.totalPrice
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        placeOrder: (data) => dispatch(actions.placeOrder(data)),
        delCheckout: (index) => dispatch(actions.delFromCheckout(index))
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout);