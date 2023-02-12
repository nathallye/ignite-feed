import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export default function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatar: "https://github.com/nathallye.png",
        name: "Nathallye Bacelar",
        role: "Full-Stack Developer"
      },
      publishedAt: new Date("2023-02-10 18:45:44"),
      content: {
        header: "Fala galera! 👋",
        body: "Acabei de subir mais um projeto no meu github. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed 🚀",
        link: "https://github.com/nathallye/ignite-feed",
        hashtag: "#novoprojeto"
      }
    },
    {
      id: 2,
      author: {
        avatar: "https://github.com/henrique-dev.png",
        name: "Paulo Bacelar",
        role: "Back-end Developer"
      },
      publishedAt: new Date("2023-02-11 19:45:44"),
      content: {
        header: "Fala galera! 👋",
        body: "Acabei de subir mais um projeto no meu github. 🚀",
        link: "https://github.com/henrique-dev/nosso_financeiro",
        hashtag: "#novoprojeto"
      }
    }
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  publishedAt={post.publishedAt}
                  content={post.content}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
