import { useState } from 'react'
import { AllTodos } from "./allTodos";

export const CreateTodos = () => { 
const [tasks, setTasks] = useState<string[]>([]);
const [inputValue, setInputValue] = useState('');

  const addNewTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
    setInputValue('');
    }


    return  (
    <div >
       <input 
            className='new-todo'
            type="text"
            onChange={(e) => { setInputValue(e.target.value) }}
            value={inputValue}
            onKeyDown={(e)=>e.key === 'Enter' && addNewTask(e.currentTarget.value)}
         />
      <AllTodos tasks={tasks} setTasks={setTasks} />
      </div>
    )
}