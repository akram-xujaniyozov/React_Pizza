import axios from 'axios';

export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, type, order) => dispatch => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${
        category !== null ? `category=${category}` : ''
      }&_sort=${type}&_order=${order}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    })
    .catch(err => console.log(err));
};

export const setPizzas = items => {
  return { type: 'SET_PIZZAS', payload: items };
};
