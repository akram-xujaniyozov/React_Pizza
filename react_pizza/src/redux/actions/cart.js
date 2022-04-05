export const addPizzaToCart = obj => ({
  type: 'SET_PIZZA_CART',
  payload: obj,
});

export const clearCart = () => ({
  type: 'SET_CLEAR_CART',
});

export const removeCartItem = id => ({
  type: 'SET_REMOVE_PIZZA',
  payload: id,
});

export const plusCartItem = id => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = id => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
