import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class Header extends Component {
    componentDidMount(){
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render(){
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper" style={{
                        backgroundColor: "#4c3c3c"
                    }}>
                        <div className="container" style={{minWidth: "85%"}}>
                            <ul className="left">
                                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-med">
                                    <i className="material-icons">menu</i>
                                </a>
                                <a href="/" className="brand-logo">TastyBirds</a>
                            </ul>
                            <ul className="right hide-on-med-and-down">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/menu">Menu</a>
                                </li>
                                <li>
                                    <a href="/orders">Orders</a>
                                </li>
                                <li>
                                    <a href="/checkout">CheckOut</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view lighten-1 darken-4" style={{
                            backgroundColor: "#5f4c4c"
                        }}>
                            <a href="#!">
                                <img className="circle" src="/img1.jpg" />
                            </a>
                            <a href="#!">
                                <span className="white-text name">Pratik Mukherjee(Admin)</span>
                            </a>
                            <a href="#!">
                                <span className="white-text email">pratikmukherjee32@gmail.com</span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="/"><i className="material-icons">dashboard</i>Home</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/orders">Orders</a>
                    </li>
                    <li>
                        <a href="/checkout">CheckOut</a>
                    </li>
                    {/* <li>
                        <div className="divider"></div>
                    </li>
                    <li>
                        <a className="subheader">Account Info</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">Logout</a>
                    </li> */}
                </ul>
            </div>
        );
    }
}
 
export default Header;