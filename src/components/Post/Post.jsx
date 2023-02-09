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
        <p>👉<a href={props.link}>{props.link}</a></p>
        <p><a href="#">{props.hashtag}</a></p>
      </div>
    </article>
  )
}