import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import FileUpload from './components/FileUpload';
import './App.css';

class App extends Component {

  id = []

state = {
  input: '',
  todos: []
}

handleChange = (e) => {
   this.setState({
     input: e.target.value // input 의 다음 바뀔 값
   });
 }

 handleCreate = () => {
   const { input, todos } = this.state;
   this.setState({
     input: '', // 인풋 비우고
     // concat 을 사용하여 배열에 추가
     todos: todos.concat({
       id: this.id++,
       text: input,
       checked: false
     })
   });
 }

 handleKeyPress = (e) => {
   // 눌려진 키가 Enter 면 handleCreate 호출
   if(e.key === 'Enter') {
     this.handleCreate();
   }
 }

 handleToggle = (id) => {
  const { todos } = this.state;

  // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
  const index = todos.findIndex(todo => todo.id === id);
  const selected = todos[index]; // 선택한 객체

  const nextTodos = [...todos]; // 배열을 복사

  // 기존의 값들을 복사하고, checked 값을 덮어쓰기
  nextTodos[index] = {
    ...selected,
    checked: !selected.checked
  };

  this.setState({
    todos: nextTodos
  });
}

handleRemove = (id) => {
   const { todos } = this.state;
   this.setState({
     todos: todos.filter(todo => todo.id !== id)
   });
 }


  render() {

      const { input, todos } = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this;

    return (
      <div>
      <p>How was your today?</p>
      <TodoListTemplate form={(

      <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
      <p className="photo">#PHOTO</p>
      <FileUpload/>
      </div>
    );
  }
}

export default App;