import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContex = React.createContext();

function TodoProvider({children}) {
    const{
        item : todo,
        saveItem: saveTodos,
         loading,
         error} = useLocalStorage("TODOS_V1", []);
    
      const [serchValue, setserchValue] = React.useState("");
      console.log("LOS USUARIOS BUSCAN " + serchValue);
      const totalComplet = todo.filter((todo) => todo.completed).length;
      const totalTodo = todo.length;
    
      const searchedTodos = todo.filter((todo) => {
        return todo.Text.includes(serchValue);
      });
    
      const completeTodo = (text) => {
        const newTodos = [...todo];
        const todoIndex = newTodos.findIndex((todo) => todo.Text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
      const deleteTodo = (text) => {
        const newTodos = [...todo];
        const todoIndex = newTodos.findIndex((todo) => todo.Text === text);
        newTodos.splice(todoIndex, 1);
        console.log(newTodos);
        saveTodos(newTodos);
      };
       
  return (
    <TodoContex.Provider value={{
        loading,
        error,
        completeTodo,
        totalTodo,
        searchedTodos,
        totalComplet,
        deleteTodo
    }}>
    {children}
  </TodoContex.Provider>
  )

}


export {TodoContex,TodoProvider}