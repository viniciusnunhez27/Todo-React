import styles from  './Task.module.css';
import { Trash } from '@phosphor-icons/react' 

export function Task () {
    return (
     <div className={styles.taskInfo}>
        <input type="radio" />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button> 
          <Trash  size={24}/>
        </button>
      </div>
   
    )
} 