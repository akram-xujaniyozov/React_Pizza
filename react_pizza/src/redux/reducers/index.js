import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';
import carts from './cart';

const rootReducer = combineReducers({
  filters,
  pizzas,
  carts,
});

export default rootReducer;
