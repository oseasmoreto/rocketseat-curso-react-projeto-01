import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './index.module.css';


export function Post(props){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time title="19 de Julho às 10h20" dateTime="2022-07-19 10:20:22">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a> {' '}
          <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}