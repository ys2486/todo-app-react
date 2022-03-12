import React, { useState } from 'react';
import './index.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [imcompleteTodos, setImcompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const todo = imcompleteTodos[index];
    // alert(todo);
    onClickDelete(index);
    const newTodos = [...completeTodos, todo];
    setCompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const todo = completeTodos[index];
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
    setImcompleteTodos([...imcompleteTodos, todo]);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={imcompleteTodos.length >= 5}
      />
      {imcompleteTodos.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるtodoは5個までです。消化してください。
        </p>
      )}
      <IncompleteTodos
        imcompleteTodos={imcompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
