import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function ({
  activeCategory,
  items,
  onClickCategory,
}) {
  
  return (
    <div>
      <div className='categories'>
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                key={`${name}_${index}`}
                onClick={() => onClickCategory(index)}
                className={activeCategory === index ? 'active' : ''}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
export default Categories;
