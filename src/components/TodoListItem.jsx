import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onDelete, onCheck, checked }) => {
  return (
    <div className={`todo-list-item ${checked && 'checked'}`}>
      <button className={`item-button ${checked && 'checked'}`} id={todo.id} onClick={e => onCheck(e)}></button>
      <span className="list-text">{`${todo.text} ${checked ? ' - DONE' : ''}`}</span>
      <button id={todo.id} className="delete-button" onClick={e => onDelete(e)}></button>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onCheck: PropTypes.func,
  checked: PropTypes.bool
};

export default TodoListItem;
