import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";

import Avatar from "../Avatar";

import styles from "./Comment.module.css";

export function Comment({id, author, publishedAt, content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { /*formatDistanceToNow - compara a data armazenada em publishedAt com a atual*/
    locale: ptBR,
    addSuffix: true /*gera um prefixo antes de exibir o tempo relativo da publicação*/
  });

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatar} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content.comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> {/*Todos os eventos (onClick, onSubmit) esperam receber como valor uma função(assim handleLikeComment ou () => setLikeCount(likeCount + 1)) e não a execução da função(setLikeCount(likeCount + 1))*/}
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
