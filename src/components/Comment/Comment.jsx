import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src={props.img} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>{props.author}</strong>
              <time title="09 de Fevereiro às 19:45h" dateTime="2023-02-09 19:45:44">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>{props.comment}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
