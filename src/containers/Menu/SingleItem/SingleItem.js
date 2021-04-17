import React from 'react';

const SingleItem = (props) => {
    return (
        <div className="card horizontal" style={{
            height: "100px",
            borderRadius: '10px'
        }}>
          <div className="card-image">
            <img style={{
                height: "100px"
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
        /* <li className="card left-align" style={{
            margin: "5px auto",
            padding: "0px",
            display: "flex",
            flexDirection: "row"
        }}>
            <div>
                <img style={{
                    height: "80px"
                }} className="responsive-img" src={props.pizza.image} alt="item" />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <span className="title" style={{fontWeight: "bold"}}>
                    {props.pizza.name}
                </span>
                <p className="btn red" style={{
                    width: "auto"
                }}>$ {props.pizza.price}</p>
            </div>
        </li> */
    );
}
 
export default SingleItem;