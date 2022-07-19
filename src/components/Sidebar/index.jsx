import styles from './index.module.css';
import { PencilLine } from "phosphor-react";

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/oseasmoreto.png" alt="Oséas Moreto" />
        <strong>Oséas Moreto</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size="1.25rem" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}