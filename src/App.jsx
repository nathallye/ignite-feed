import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export default function App() {

  const posts = [
    {
      id: 1,
      author: "Nathallye Bacelar",
      profession: "Full-Stack Developer",
      avatar: "https://github.com/nathallye.png",
      time: {
        title: "09 de Fevereiro às 19:45h",
        dateTime: "2023-02-09 19:45:44",
        text: "Publicado há 1h"
      },
      content: {
        header: "Fala galera! 👋",
        body: "Acabei de subir mais um projeto no meu github. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed 🚀",
        link: "https://github.com/nathallye/ignite-feed",
        hashtag: "#novoprojeto"
      }
    },
    {
      id: 2,
      author: "Paulo Bacelar",
      profession: "Back-end Developer",
      avatar: "https://github.com/henrique-dev.png",
      time: {
        title: "09 de Fevereiro às 18:45h",
        dateTime: "2023-02-09 18:45:44",
        text: "Publicado há 2h"
      },
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
            posts.map((item) => {
              return <Post key={item.id} posts={item} />
            })
          }
        </main>
      </div>
    </div>
  )
}
