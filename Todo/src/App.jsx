import { Header } from "./components/Header";

import styles from "./App.module.css";

import Plus from "./assets/Plus.svg";

import "./global.css";

function App() {
  return (
    <>
      <Header />

      <form className={styles.taskbar}>
        <textarea placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <img src={Plus} alt="Icone de +" />
        </button>
      </form>
    </>
  );
}

export default App;
