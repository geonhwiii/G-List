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
      checked: false,
      todoList: [],
      menuList: []
    };
  }

  // TODO : Form의 input값을 받아옴
  onChange = e => {
    let text = e.target.value;
    e.target.style.outlineColor = 'white';
    e.target.style.color = 'white';
    this.setState({ text });
  };

  // TODO : Form의 제출 버튼 동작
  onSubmit = e => {
    e.preventDefault();
    const { text, id, todoList } = this.state;
    if (!text) {
      e.target.children[1].style.outlineColor = 'red';
      e.target.children[1].style.color = 'red';
      return;
    }
    const todo = { id, text };
    this.setState({
      id: id + 1,
      text: '',
      checked: false,
      todoList: [...todoList, todo]
    });
  };

  // TODO : 각 리스트 삭제 버튼 클릭 시 삭제 동작
  onDelete = e => {
    const { todoList } = this.state;
    const newTodoList = todoList.filter(list => list.id !== +e.target.id);
    this.setState({
      todoList: newTodoList
    });
  };

  // TODO : 각 리스트 체크 버튼 클릭 시 체크 및 DONE 동작
  onCheck = e => {
    const { todoList } = this.state;
    const selectedIndex = todoList.findIndex(item => item.id === +e.target.id);
    const selectedList = todoList[selectedIndex];
    const copyTodos = [...todoList];
    copyTodos[selectedIndex] = {
      ...selectedList,
      checked: !selectedList.checked
    };
    this.setState({
      todoList: copyTodos
    });
  };

  // TODO : 전체 체크 버튼 선택 동작
  onAllCheck = () => {
    const { todoList } = this.state;
    const copyTodos = [...todoList];
    copyTodos.forEach(item => {
      item.checked = true;
    });
    this.setState({ copyTodos });
  };

  onAdd = () => {
    this.setState(prev => ({
      menuList: [...prev.menuList, prev.todoList]
    }));
    this.onClearList();
  };

  onClearList = () => {
    this.setState({
      todoList: []
    });
  };

  // TODO : 메뉴 버튼 클릭 시 리스트 이동.
  onShowList = e => {
    const { menuList } = this.state;
    e.target.parentNode.childNodes.forEach(list => (list.style.color = 'white'));
    let targetIndex = +e.target.id - 1;
    let seletedTodoList = menuList[targetIndex];
    this.onClearList();
    this.setState({
      todoList: seletedTodoList
    });
    e.target.style.color = 'red';
  };

  // TODO : 메뉴 버튼 더블 클릭 시 삭제
  onDoubleClick = e => {
    const { menuList } = this.state;
    const newMenuList = menuList.filter((_, i) => {
      return i + 1 !== +e.target.id;
    });
    this.setState({
      menuList: newMenuList
    });
  };

  render() {
    const { text, todoList, menuList } = this.state;
    const { onChange, onSubmit, onDelete, onCheck, onAllCheck, onAdd, onShowList, onClearList, onDoubleClick } = this;
    return (
      <div className="App">
        <Title />
        <Menu
          onAdd={onAdd}
          menuList={menuList}
          onShowList={onShowList}
          onClear={onClearList}
          onDoubleClick={onDoubleClick}
        />
        <Form onText={text} onChange={onChange} onSubmit={onSubmit} onAllCheck={onAllCheck} />
        <TodoList onCheck={onCheck} todoList={todoList} onDelete={onDelete} />
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  todoList: PropTypes.object,
  checked: PropTypes.bool,
  menuList: PropTypes.array,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCheck: PropTypes.func,
  onAdd: PropTypes.func,
  onShowList: PropTypes.func,
  onClearList: PropTypes.func,
  onDoubleClick: PropTypes.func
};

export default App;
