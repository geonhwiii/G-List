import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ onAdd, menuList, onShowList, onClear, onDoubleClick }) => {
  return (
    <>
      <button className="new-menu" onClick={onClear}>
        NEW
      </button>
      <button className="add-menu" onClick={onAdd}>
        ADD
      </button>
      <ul className="menu">
        {menuList.map((item, i) => (
          <li key={i} id={i + 1} onClick={e => onShowList(e)} onDoubleClick={e => onDoubleClick(e)}>
            LIST
          </li>
        ))}
      </ul>
    </>
  );
};

Menu.propTypes = {
  onAdd: PropTypes.func.isRequired,
  menuList: PropTypes.array.isRequired,
  onShowList: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired
};

export default Menu;
