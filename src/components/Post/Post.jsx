import Comment from "../Comment";

import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.img} alt="" />

          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time title="09 de Fevereiro às 19:45h" dateTime="2023-02-09 19:45:44">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>{props.contentHeader}</p>
        <p>{props.contentBody}</p>
        <p><a href={props.link}>{props.link}</a></p>
        <p><a href="#">{props.hashtag}</a></p>
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
        <Comment 
          img="https://github.com/henrique-dev.png"
          author="Paulo Bacelar"
          comment="Muito bom Nathallye, parabéns!! 👏👏"
        />
      </div>
    </article>
  )
}