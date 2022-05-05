import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-margin">
        <Link to="/">Fatma Shop</Link>
        <div className="head-cart">
          <div className="cart">
            <Link to="cart">
              <div className="count">
                <span>{props.item.length}</span>
              </div>
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const PropMapToStates = (state) => {
  return { item: state.addToCardReducer };
};
export default connect(PropMapToStates)(Header);
