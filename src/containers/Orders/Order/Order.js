import React from 'react';

import classes from './Order.module.css';

const Order = (props) => {
    return (
        <div class="card">
          <div class="card-image waves-effect waves-light waves-block">
            <img class="activator" src={props.order.orderData[0].image} />
          </div>
          <div class="card-content">
            <span class="card-title activator">Total Price: ${props.order.totalPrice}
            </span>
            <p>
              <a href="#!" class="activator">Read More</a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title">Total Price: ${props.order.totalPrice}
              <i class="material-icons">close</i>
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