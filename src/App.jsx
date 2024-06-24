import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import main from './main.jsx';


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const percistData = (newList)=>{
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    percistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    percistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleEdit(index) {
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDelete(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) { 
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
    
  }, [])
  
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEdit={handleEdit} handleDelete={handleDelete} todos={todos}/>
    </>
  )
}

export default App
