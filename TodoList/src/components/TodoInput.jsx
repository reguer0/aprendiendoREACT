const TodoInput = ({ newTodo, lista, setNewTodo,setLista}) => {

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
      }
    const addTask = ()=>{
        if (newTodo.trim() !== '') {
          setLista([...lista , newTodo])  
          setNewTodo('');
        }
      }

    return (
      <div>       
      <input className='nuevasTareas'
        type="text" 
        value={newTodo}
        onChange={handleInputChange}                    
        placeholder="Ingrese una nueva tarea">
      </input>
      <button className="addBtn" onClick={addTask}>ADD</button>
      </div> 
    );
  };

  export default TodoInput