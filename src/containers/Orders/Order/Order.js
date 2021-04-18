import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {
    return (
        <div className="card">
          <div className="card-image waves-effect waves-light waves-block">
            <img className="activator" src={props.order.orderData[0].image} alt="singleitem" />
          </div>
          <div className="card-content">
            <span className="card-title activator">Total Price: ${props.order.totalPrice}
            </span>
            <p>
              <a href="#!" className="activator">Read More</a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title">Total Price: ${props.order.totalPrice}
              <i className="material-icons right">close</i>
            </span>
            <div className={classes.table} style={{
                    fontWeight: "bold"
                }}>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Size</p>
                    <p>Count</p>
                </div>
            {props.order.orderData.map(order => (
                <div className={classes.table}>
                    <p>{order.name}</p>
                    <p>{order.price}</p>
                    <p>{order.size}</p>
                    <p>{order.count}</p>
                </div>
            ))}
          </div>
        </div>
    );
}
 
export default Order;