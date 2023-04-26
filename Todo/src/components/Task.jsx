import styles from  './Task.module.css';
import { Check, Trash } from '@phosphor-icons/react' 

export function Task ({ title, isComplete, id, onDeleteTask} ) {

function handleDeleteTask(){
  onDeleteTask(id)
}

  return (
     <div className={styles.taskInfo} >
        <input type="checkbox"  /> 
        <p>{title}</p>
      <button onClick={handleDeleteTask}> 
          <Trash  size={24}/>
        </button>
      </div>
    )
} 

