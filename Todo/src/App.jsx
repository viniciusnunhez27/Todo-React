import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { useState } from 'react';

import styles from "./App.module.css";

import Plus from "./assets/Plus.svg";
import IconEmpty from './assets/Iconempty.svg'

import "./global.css";


export function App() {

 const [newtask, setNewTask] = useState ([
 
  {
    id:uuidv4 (),
    title:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isComplete:false
   },
  {
   id:uuidv4(),
   title:'Estudar Javascript',
   isComplete:true
 },
 {
   id:uuidv4(),
   title:'Estudar React',
   isComplete:false
  }


]) 

const [newTextTask, setNewTextTask] = useState('')


function handleCreateNewTask() {
     event.preventDefault()

     const newTaskText = event.target.text.value

     setNewTask([...newtask, newTextTask])

     setNewTextTask('')
  } 

 function handleNewTextChange () {
  setNewTextTask(event.target.value)
 } 

  
  return (
    <>
  
  <div className={styles.container}>
      <Header />

      <form  onSubmit={handleCreateNewTask} className={styles.taskbar}>
       
       <textarea 
        name='text'
        placeholder="Adicione uma nova tarefa" 
        onChange={handleNewTextChange}
        value={newTextTask}
        />
       
        <button>
          Criar <img src={Plus} alt="Icone de +" />
        </button>
      </form>

     <div className={styles.infoTask}>
      <p className={styles.infoCreate}>Tarefas criadas  <span>0</span></p>
      <p className={styles.infoDone}>Concluídas  <span>0</span> </p> 
    </div> 
  

 <div className={styles.cardInfo}>
     <div className={styles.infoEmpty}>
      <img src={IconEmpty} alt="Icon Lista Vazia" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
     </div>
   </div>

  {newtask.map( task => {
    return (
      <Task 
      key={task.id}
      title={task.title}
      isChecked={task.isComplete}

      />
    )
  })} 

    </>


  );
}

export default App;
