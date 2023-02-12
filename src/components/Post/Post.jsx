import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Avatar from "../Avatar";
import Comment from "../Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content}) { /*Desestruturação do props*/

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { /*formatDistanceToNow - compara a data armazenada em publishedAt com a atual*/
    locale: ptBR,
    addSuffix: true /*gera um prefixo antes de exibir o tempo relativo da publicação*/
  });

  const comments = [
    {
      id: 1,
      author: {
        avatar: "https://github.com/luhsales1.png",
        name: "Luciana Sales"
      },
      publishedAt: new Date("2023-02-11 19:45:44"),
      content: {
        comment: "Muito bom Nathallye, parabéns!! 👏👏", amountApplause: 10
      }
    },
    {
      id: 2,
      author: {
        avatar: "https://github.com/souzabel.png",
        name: "Isabel Souza"
      },
      publishedAt: new Date("2023-02-11 20:55:44"),
      content: {
        comment: "👏👏", amountApplause: 3
      }
    }
  ];

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>
            } else if (line.type === "link") {
              return <p><a href="#">{line.content}</a></p>
            } else if (line.type === "hashtag") {
              return <p><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu faeedback</strong>

        {/*Hoje em dia o textarea não necessita mais dos atribulos name="" id="" cols="30" rows="10", e pode ser "autofechada*/}
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => {
            return (
              <Comment
                author={comment.author}
                publishedAt={comment.publishedAt}
                content={comment.content}
              />
            )
          })
        }
      </div>
    </article>
  )
}
