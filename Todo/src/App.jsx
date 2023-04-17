import { Header } from "./components/Header";

import styles from "./App.module.css";

import Plus from "./assets/Plus.svg";
import IconEmpty from './assets/Iconempty.svg'

import "./global.css";
import { Task } from "./components/Task";

function App() {
  return (
    <>
  
  <div className={styles.container}>
      <Header />

      <form className={styles.taskbar}>
        <textarea placeholder="Adicione uma nova tarefa" />
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

    <Task />
    </>


  );
}

export default App;
