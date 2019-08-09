import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onDelete }) => {
  return (
    <div className="todo-list">
      {todoList.map(list => (
        <TodoListItem key={list.id} todo={list} onDelete={onDelete} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onDelete: PropTypes.func
};

export default TodoList;
