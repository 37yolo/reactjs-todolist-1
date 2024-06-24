import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue} = props;


  return (
    <header>
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="input">
        <input
          value={todoValue}
          onChange={(x) => {
            setTodoValue(x.target.value);
          }}
          onKeyDown={(e) => {if (e.key === 'Enter' && todoValue.trim()) {
            handleAddTodos(todoValue);
            setTodoValue("");
          }}}
          placeholder="Enter Todo..."
          />
        <button
          onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue("");
          }}
          disabled={!todoValue.trim()}
          >
          Add
        </button>
      </div>
    </header>
  );
}
