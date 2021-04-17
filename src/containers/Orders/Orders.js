import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Order from './Order/Order';

class Orders extends Component {
    state = {  }
    componentWillMount(){
        this.props.getAllOrders();
    }
    render() { 
        return (
            <div class="container" style={{
                paddingBottom: "30px"
            }}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>ORDERS</h3></li>
                </ul>
                {this.props.orders.reverse().map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        getAllOrders: () => dispatch(actions.getAllOrders())
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Orders);