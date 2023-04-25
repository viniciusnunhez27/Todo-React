import styles from  './Task.module.css';
import { Check, Trash } from '@phosphor-icons/react' 

export function Task ({ title, isChecked } ) {
    return (
     <div className={styles.taskInfo} >
        <input type="checkbox"/> 
        <p>{title}</p>
      <button> 
          <Trash  size={24}/>
        </button>
      </div>
    )
} 

