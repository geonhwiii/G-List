import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onDelete, onCheck }) => {
  return (
    <div className="todo-list">
      {todoList.map(list => (
        <TodoListItem key={list.id} todo={list} onDelete={onDelete} onCheck={onCheck} checked={list.checked} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onDelete: PropTypes.func,
  onCheck: PropTypes.func
};

export default TodoList;
