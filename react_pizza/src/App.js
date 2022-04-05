import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'></div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getPizzas: items => dispatch(setPizzas(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
