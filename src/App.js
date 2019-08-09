import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Title from './components/Title';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      id: 1,
      todoList: []
    };
  }

  // TODO : Form의 input값을 받아옴
  onChange = text => {
    this.setState({ text });
  };

  // TODO : Form의 제출 버튼 동작
  onSubmit = e => {
    e.preventDefault();
    const { text, id, todoList } = this.state;
    const todo = { id, text };
    this.setState({
      id: id + 1,
      text: '',
      todoList: [...todoList, todo]
    });
  };

  onDelete = e => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(list => list.id !== +e.target.id);
    this.setState({
      todoList: newTodoList
    });
  };

  render() {
    const { text, todoList } = this.state;
    const { onChange, onSubmit, onDelete } = this;
    return (
      <div className="App">
        <Title />
        <Menu />
        <Form onText={text} onChange={onChange} onSubmit={onSubmit} />
        <TodoList todoList={todoList} onDelete={onDelete} />
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  todoList: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

export default App;
