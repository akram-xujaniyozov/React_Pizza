import React from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopUp, PizzaBlock, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
];

const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const cartsItem = useSelector(({ carts }) => carts.items);
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const {
    category,
    sortBy: { type, order },
  } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, type, order));
  }, [category, type]);
  const onSelectedCategory = React.useCallback(index => {
    dispatch(setCategory(index));
  }, []);
  const onSelectedSortBy = React.useCallback(typeName => {
    dispatch(setSortBy(typeName));
  }, []);
  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectedCategory}
          items={categoryNames}
        />
        <SortPopUp
          activeSortBy={type}
          items={sortItems}
          onClickSortType={onSelectedSortBy}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map(obj => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartsItem[obj.id] && cartsItem[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
