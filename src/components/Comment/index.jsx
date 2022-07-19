import styles from './index.module.css';
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/oseasmoreto.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Oséas Moreto</strong>
              <time title="19 de Julho às 10h20" dateTime="2022-07-19 10:20:22">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size="20" />
            </button>
          </header>
          <p>Muito bom, topissímo</p>
        </div>
        <footer>
          <ThumbsUp size="20" />
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  )
}