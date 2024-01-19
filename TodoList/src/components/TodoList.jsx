import { RiDeleteBinLine } from 'react-icons/ri';

const TodoList = ({ lista, setLista}) => {

    const deleteTask =(index)=>{
        let updatedList = lista.filter((e, i) => i!== index)
        setLista(updatedList)  
      }


    return (
      <ul className='lista'>       
      {lista.map((liItem,index)=>(
         <li key={index} className='ListItem'>
          <span className='test'>
          {liItem}
          </span>
          <button className='deleteBtn' onClick={()=>deleteTask(index)}>              
            <RiDeleteBinLine/>
          </button>
         </li>           
      ))}                
    </ul>
    );
  };

  export default TodoList