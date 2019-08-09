import React from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-list-item">
      <button className="item-button"></button>
      <span className="list-text">{todo.text}</span>
      <button id={todo.id} className="delete-button" onClick={e => onDelete(e)}></button>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
};

export default TodoListItem;
