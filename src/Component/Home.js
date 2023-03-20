import React from "react";

function Home(){
    return(
        <div>
            <div className="Header-component">
                <img src="./cart.jpg"/>
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="image-wraper">
                    <img src="./headphone.jpg"/>
                </div>
                <div className="text-wrapper">
                <span>Head Phone</span>
                <span>Price: & 1000</span>
                </div>
                <div className="btn-wrapper">
                   <button>Add to Cart</button>
                </div>
            </div>
          
        </div>
    )
}
export default Home;