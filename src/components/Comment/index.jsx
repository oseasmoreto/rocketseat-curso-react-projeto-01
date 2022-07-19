import styles from './index.module.css';
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from '../Avatar';

export function Comment(){
  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/oseasmoreto.png" 
        alt="Oséas Moreto" 
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Oséas Moreto</strong>
              <time title="19 de Julho às 10h20" dateTime="2022-07-19 10:20:22">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size="24" />
            </button>
          </header>
          <p>Muito bom, topissímo</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size="20" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}