import React, { useState } from 'react';
import './index.css';

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
      {/* 入力エリア */}
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 未完了のTODO */}
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      {/* 完了のTODO */}
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
