import "../App.css";

import React, { useEffect } from "react";
import { TodoContex, TodoProvider } from "../TodoContext";

import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function App() {
  return (
    <TodoProvider>
 <>
      <TodoCounter/>
      <TodoSearch/>
<TodoContex.Consumer>
  {({
            loading,
            error,
            completeTodo,
            searchedTodos,
            deleteTodo
  })=>{
          <TodoList>
          {loading && <p>ESTAMOS CARGANDO</p>}
          {error && <p>deseperate hay un error</p>}
          {(!loading && searchedTodos.length === 1) &&
            <p>CREA TU PRIMER TODO!</p>}
  
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.Text}
              completed={todo.completed}
              Text={todo.Text}
              onComplete={() => completeTodo(todo.Text)}
              onDelete={() => deleteTodo(todo.Text)}
            />
          ))}
        </TodoList>
  }}
</TodoContex.Consumer>


      <button className="CreateTodoButton">+ </button>
    </>

    </TodoProvider>
   
  );
}

export default App;
