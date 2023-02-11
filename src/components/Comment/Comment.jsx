import { ThumbsUp, Trash } from "phosphor-react";

import Avatar from "../Avatar";

import styles from "./Comment.module.css";

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={props.comments.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.comments.author}</strong>
              <time
                title={props.comments.time.title}
                dateTime={props.comments.time.dateTime}>
                  {props.comments.time.text}
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{props.comments.comment}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{props.comments.amountApplause}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
