import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { increament, decreament } from "../actions";

const Cart = (props) => {
  console.log(props);
  return (
    <>
      <Header />
      <div className="cart-main">
        {props.itemData?.map((d) => {
          return (
            <div className="single-product">
              <div className="delete">
                <i className="fa fa-trash"></i>
              </div>
              <div className="product-img">
                <img src={d._img} alt="" />
              </div>
              <div className="product-name">{d._item}</div>
              <div className="product-price">${d._price * d._quantity}</div>
              <div className="btns">
                <button
                  onClick={() =>
                    props.increament((d._quantity = d._quantity + 1))
                  }
                >
                  +
                </button>
                <button>{d._quantity}</button>
                <button
                  onClick={() =>
                    props.decreament(
                      (d._quantity = d._quantity - 1 <= 0 ? 0 : d._quantity - 1)
                    )
                  }
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h4>Hold </h4>
        <h4>on</h4>
        <button>working</button>
      </div>
    </>
  );
};

const PropsMapToState = (state) => {
  return {
    itemData: state.addToCardReducer,
    increase: state.counterReducers,
  };
};

export default connect(PropsMapToState, { increament, decreament })(Cart);
