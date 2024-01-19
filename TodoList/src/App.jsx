import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



function App() {  
  const [lista, setLista] = useState([])
  const [newTodo, setNewTodo] = useState('') 
  
  return (
    <>
      <Header/>   
      <TodoInput
        newTodo={newTodo}
        lista={lista}
        setNewTodo={setNewTodo}
        setLista={setLista}/>

      <TodoList 
        lista={lista}
        setLista={setLista}  />
    </>
  )
}

export default App