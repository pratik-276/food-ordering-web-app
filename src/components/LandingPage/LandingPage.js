import React from 'react';
import classes from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className="container valign-wrapper" style={{width: "90%", minHeight: "80vh"}}>
            <div className="row">
                <div className="col s12 m7 l6 center">
                    <h1 className={classes.headerText}>Food that makes you crave</h1>
                </div>
                <div className="col s12 m5 l6">
                    <img src="/hamburger.svg" alt="burgerSVG" className="responsive-img" />
                </div>
            </div>
        </div>
    );
}
 
export default LandingPage;