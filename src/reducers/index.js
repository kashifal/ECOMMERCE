import { combineReducers } from "redux";

const addToCardReducer = (state = [], action) => {
  if (action.type === "ADD_TO_CART") {
    return [
      ...state,
      {
        _id: action.payload._id,
        _item: action.payload._item,
        _img: action.payload._img,
        _price: action.payload._price,
        _quantity: action.payload._quantity,
      },
    ];
  }
  return state;
};

const counterReducers = (state = 1, action) => {
  if (action.type === "INCREAMENT") {
    return state + 1;
  } else if (action.type === "DECREAMENT") {
    if (state <= 0) {
      return (state = 0);
    } else {
      return state - 1;
    }
  }
  return state;
};

export default combineReducers({
  addToCardReducer,
  counterReducers,
});
