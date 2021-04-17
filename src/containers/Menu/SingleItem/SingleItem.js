import React from 'react';

const SingleItem = (props) => {
    return (
        <div className="card horizontal" style={{
            height: "100px",
            borderRadius: '10px',
            margin: "5px auto"
        }} onClick={() => props.click(props.pizza)}>
          <div className="card-image">
            <img style={{
                height: "100px",
                width: "187.5px"
            }} src={props.pizza.image} alt="item" />
            <p className="card-title btn red white-text" style={{
                        fontSize: "14px",
                        padding: "0px 10px",
                        marginLeft: "10px"
                    }}>$ {props.pizza.price}</p>
          </div>
          <div class="card-stacked">
              <div class="card-content valign-wrapper" style={{
                  height: "100px"
              }}>
                <p className="black-text" style={{
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}>{props.pizza.name}</p>
              </div>
          </div>
        </div>
    );
}
 
export default SingleItem;