export const addToCard = (val) => {
  return { type: "ADD_TO_CART", payload: val };
};

export const increament = () => {
  return { type: "INCREAMENT" };
};

export const decreament = () => {
  return { type: "DECREAMENT" };
};

export const deleteItem = () => {
  return { type: "DELETE_ITEM" };
};
