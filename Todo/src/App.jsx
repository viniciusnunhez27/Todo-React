import "./global.css";
import IconEmpty from './assets/Iconempty.svg'
import Plus from "./assets/Plus.svg";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isComplete: false
    },
    {
      id: uuidv4(),
      title: 'Estudar Javascript',
      isComplete:true
    },
    {
      id: uuidv4(),
      title: 'Estudar React',
      isComplete: false
    }
  ]);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  };


  function handleCreateNewTask(e) {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isComplete:false,
      }
    ]);
    setNewTask('');
  };


  function deleteTask(tasksToDelete) {
    const newTaskWithoutDeleteOne = tasks.filter((task) => task.id !== tasksToDelete);
    setTasks(newTaskWithoutDeleteOne);
  }


  return (
    <div className={styles.container}>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.taskbar}>
        <textarea
          name='text'
          placeholder="Adicione uma nova tarefa"
          onChange={handleInputChange}
          value={newTask}
        />
        <button>
          Criar <img src={Plus} alt="Icone de +" />
        </button>
      </form>

      <div className={styles.infoTask}>
        <p className={styles.infoCreate}>
          Tarefas criadas <span>0</span>
        </p>
        <p className={styles.infoDone}>
          Concluídas <span>0</span>
        </p>
      </div>

      <div className={styles.cardInfo}>
        <div className={styles.infoEmpty}>
          <img src={IconEmpty} alt="Icon Lista Vazia" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isChecked={task.isComplete}
          onDeleteTask={deleteTask}

        />
      ))}
    </div>
  );
};

export default App;