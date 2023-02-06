import  styles from './Task.module.css'

import plus from '../assets/plus.svg';
import checkIncompete from '../assets/check.svg';
import checkComlete from '../assets/checked.svg';
import trash from '../assets/trash.svg';

export function Task () {
    return (
        <>
        <form className={styles.CreateTask}>
        <textarea placeholder='Adicione uma nova tarefa'>
        </textarea>
        <button  type='submit'>Criar  <img src={plus}/></button>
        </form>
    
       <div className={styles.headerTasks}>
        
        <p>Tarefas criadas</p>
        <span>Conclúidas</span>
       </div>

       
       <div className={styles.container}>
             <img src={checkIncompete} size={24} alt="" />
              <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
              <img src={trash} size={24} alt="" />  
        </div>



   
       </>
        
 
    )
}