import React from 'react';

const SingleItem = (props) => {
    return (
        <div className="card horizontal" style={{
            height: "110px",
            borderRadius: '10px',
            margin: "5px auto"
        }}>
          <div className="card-image">
            <img style={{
                height: "110px",
                width: "130px"
            }} src={props.pizza.image} alt="item" />
            <p className="card-title btn red white-text" style={{
                        fontSize: "14px",
                        padding: "0px 10px",
                        marginLeft: "10px"
                    }}>$ {props.pizza.price}</p>
          </div>
          <div class="card-stacked" style={{
              display: "flex",
              flexDirection: "row"
          }}>
              <div class="card-content" style={{
                  height: "110px",
                  paddingTop: "14px",
                  paddingLeft: "10px"
              }}>
                <p className="black-text" style={{
                        fontWeight: "bold",
                        fontSize: "18px"
                    }}>{props.pizza.name}</p>
                <p>Count: {props.pizza.count}</p>
                <p>Size: {props.pizza.size}</p>
              </div>
              <div className="valign-wrapper" style={{
                  marginRight: "10px"
              }}>
                  <i class="material-icons red-text" onClick={props.delete}>delete</i>
              </div>
          </div>
        </div>
    );
}
 
export default SingleItem;