import React, { Component } from 'react';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleItem from './SingleItem/SingleItem';
import M from 'materialize-css/dist/js/materialize.min.js';

class Menu extends Component {
    state = {
        id: "",
        name: "",
        image: "",
        price: "",
        size: "small",
        totalPrice: "",
        count: "1"
    }
    componentWillMount(){
        this.props.getPizzas();
    }
    componentDidMount(){
        M.FormSelect.init(document.querySelectorAll('select'), {});
        let modal = document.querySelectorAll('.modal');
        M.Modal.init(modal, {});
    }
    onItemClick = (data) => {
        this.setState({
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            totalPrice: data.price
        });
        document.getElementById("itemOpener").click();
    }
    updatePrice = (newState) => {
        let price = parseFloat(this.state.price);
        if(newState.size=='medium'){
            price += 5;
        }
        if(newState.size=='large'){
            price += 10;
        }
        if(newState.count == 'NaN'){
            price = 0;
        }else{
            price = price * parseInt(newState.count);
        }
        this.setState({totalPrice: price+''});
    }
    onSizeChange = (event) => {
        const newState = {
            ...this.state,
            size: event.target.value
        };
        this.setState(newState);
        this.updatePrice(newState);
    }
    onCountChange = event => {
        const newState = {
            ...this.state,
            count: parseInt(event.target.value)+''
        };
        this.setState(newState);
        this.updatePrice(newState);
    }
    addToCheckout = () => {
        document.getElementById("proceedOpener").click();
    }
    render() { 
        return (
            <div className="container" style={{
                paddingBottom: "30px"
            }}>
                <ul className="collection with-header">
                    <li className="collection-header center"><h3>MENU</h3></li>
                </ul>
                {this.props.pizzas.map(pizza => (
                        <SingleItem key={pizza.id}
                            pizza={pizza}
                            click={this.onItemClick} />
                ))}
                <button id="itemOpener" className="modal-trigger" href="#item" style={{
                    display: "none"
                }}></button>
                <div id="item" className="modal center">
                    <div className="modal-content">
                        <img className="responsive-img" src={this.state.image} alt="pizza" />
                        <h5 style={{
                            fontWeight: "bold"
                        }}>{this.state.name}</h5>
                        <div className="valign-wrapper" style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <p className="left">Size:</p> &nbsp;&nbsp;
                            <div className="input-field right" style={{
                                width: "60%"
                            }}>
                                <select className="browser-default" id="size" value={this.state.size} 
                                    onChange={this.onSizeChange}>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="valign-wrapper" style={{
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <p className="left">Count:</p> &nbsp;&nbsp;
                            <div className="input-field right" style={{
                                width: "60%"
                            }}>
                                <input type="number" id="count"
                                    value={this.state.count}
                                    onChange={this.onCountChange} />
                            </div>
                        </div>
                        <p style={{
                            fontWeight: "bold"
                        }}>Total Price: ${this.state.totalPrice}</p>
                    </div>
                    <div className="modal-footer" style={{
                        textAlign: "center"
                    }}>
                        <button className="btn green modal-action modal-close" 
                            onClick={this.addToCheckout}>Add to Checkout</button>
                        &nbsp;
                        <button className="btn red modal-action modal-close">Cancel</button>
                    </div>
                </div>
                <button id="proceedOpener" className="modal-trigger" href="#proceed" style={{
                    display: "none"
                }}></button>
                <div className="modal" id="proceed">
                    <div class="modal-content">
                    <p>Proceed to Checkout?</p>
                    </div>
                    <div class="modal-footer" style={{
                        textAlign: "center"
                    }}>
                        <button className="btn green modal-action modal-close">Sure</button>
                        &nbsp;
                        <button className="btn red modal-action modal-close">Nah, I want more</button>
                    </div>
                </div>
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