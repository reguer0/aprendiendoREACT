import { useState } from 'react'
interface AllTodosProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AllTodos = ({ tasks, setTasks }: AllTodosProps) => {
const [editableIndex, setEditableIndex] = useState<number | null>(null);



const deleteTask = (taskIndex:number) => {
  const newTasks = tasks.filter((_, index) => index !== taskIndex);
  setTasks(newTasks);
}

const editedTask = (newTask:string, index:number) => {
  const newTasks = [...tasks];
  newTasks[index] = newTask;
  setTasks(newTasks);
}
  return (
     <div className="main">
        <ul className="todo-list">
          {tasks.map((task, index) => {
            if (editableIndex === index) {
              return <li className="editing" key={index}>
                <input               
                  type="text" 
                  value={task} 
                  className="edit"
                  onChange={(e) => {
                    editedTask(e.currentTarget.value, index);
                  }}
                  onKeyDown={(e)=>e.key === 'Enter' && setEditableIndex(null)}
                  autoFocus
                />
              </li>;
            } else {
              return <li key={index}>
                <div className="view">
                  <label onDoubleClick={() => setEditableIndex(index)}>{task}</label>
                  <button className="destroy" onClick={() => deleteTask(index)}></button>
                </div>
              </li>;
            }
          })}
        </ul>
      </div>
  );
}