import Avatar from "../Avatar";
import Comment from "../Comment";

import styles from "./Post.module.css";

export function Post(props) {

  const comments = [
    {
      id: 1,
      avatar: "https://github.com/henrique-dev.png",
      author: "Paulo Bacelar",
      time: {
        title: "09 de Fevereiro às 19:45h",
        dateTime: "2023-02-09 19:45:44",
        text: "Cerca de 1h atrás"
      },
      comment: "Muito bom Nathallye, parabéns!! 👏👏",
      amountApplause: 20
    },
    {
      id: 2,
      avatar: "https://github.com/henrique-dev.png",
      author: "Paulo Bacelar",
      time: {
        title: "09 de Fevereiro às 17:45h",
        dateTime: "2023-02-09 17:45:44",
        text: "Cerca de 3h atrás"
      },
      comment: "Muito bom Nathallye, parabéns!! 👏👏",
      amountApplause: 30
    }
  ];

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.posts.avatar} />

          <div className={styles.authorInfo}>
            <strong>{props.posts.author}</strong>
            <span>{props.posts.profession}</span>
          </div>
        </div>

        <time
          title={props.posts.time.title}
          dateTime={props.posts.time.dateTime}>
            {props.posts.time.text}
        </time>
      </header>

      <div className={styles.content}>
        <p>{props.posts.content.header}</p>
        <p>{props.posts.content.body}</p>
        <p>
          <a href={props.posts.content.link}>
            {props.link}
          </a>
        </p>
        <p>
          <a href="#">{props.posts.content.hashtag}</a>
        </p>
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
          comments.map((item) => {
            return <Comment comments={item} />
          })
        }
      </div>
    </article>
  )
}
