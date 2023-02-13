import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import Avatar from "../Avatar";
import Comment from "../Comment";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content}) { /*Desestruturação do props*/

  // estado = variáveis que eu quero que o componente monitore

  const [comments, setComments] = useState([
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
    }
  ]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { /*formatDistanceToNow - compara a data armazenada em publishedAt com a atual*/
    locale: ptBR,
    addSuffix: true /*gera um prefixo antes de exibir o tempo relativo da publicação*/
  });

  function handleCreateNewComment() { // ou const handleCreateNewComment = () {}
    event.preventDefault(); // para evitar o comportamento padrão do html de redirecionar o usuário para outra página ao clickar no submit

    const publishedAt = Date.now();

    setComments([...comments, {
      id: comments.length,
      author: {
        avatar: "https://github.com/souzabel.png",
        name: "Isabel Souza"
      },
      publishedAt: new Date(publishedAt),
      content: {
        comment: newCommentText,
        amountApplause: 0
      }
    }])

    setNewCommentText(""); // depois de adicionar o comentário, o estádo vai voltar para o inicio (string vazia)
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value); // como o evento foi adicionado na textarea (e não no form) podemos acessar diretamente o valor com o event.target.value
  }

  function deleteComment(id) {
    console.log(`Deletar comentário com id ${id}`);
  }

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
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === "link") {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu faeedback</strong>

        {/*Hoje em dia o textarea não necessita mais dos atribulos name="" id="" cols="30" rows="10", e pode ser "autofechada*/}
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
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
                key={comment.id}
                id={comment.id}
                author={comment.author}
                publishedAt={comment.publishedAt}
                content={comment.content}
                OnDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}
