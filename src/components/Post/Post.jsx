import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/nathallye.png" alt="" 
          />
          <div className={styles.authorInfo}>
            <strong>Nathallye Bacelar</strong>
            <span>Full-Stack Developer</span>
          </div>

          <time title="09 de Fevereiro às 19:45h" dateTime="2023-02-09 19:45:44">Publicado há 1h</time>
        </div>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto </a>
          <a href="#">#nlw </a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}