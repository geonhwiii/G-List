import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ onAdd, menuList }) => {
  return (
    <>
      <ul className="menu">
        {menuList.map((item, i) => (
          <li key={i}>{`LIST ${i + 1}`}</li>
        ))}
      </ul>
      <button className="add-menu" onClick={onAdd}>
        ADD
      </button>
    </>
  );
};

Menu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  menuList: PropTypes.array
};

export default Menu;
