import Header from "./components/Header";
import Sidebar  from "./components/Sidebar";
import Post from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export default function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post
            author="Nathallye Bacelar"
            img="https://github.com/nathallye.png"
            contentHeader="Fala galera! 👋"
            contentBody="Acabei de subir mais um projeto no meu github. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é IgniteFeed 🚀"
            link="https://github.com/nathallye/ignite-feed"
            hashtag="#novoprojeto"
          />
          <Post
            author="Paulo Bacelar"
            img="https://github.com/henrique-dev.png"
            contentHeader="Fala galera! 👋"
            contentBody="Acabei de subir mais um projeto no meu github. 🚀"
            link="https://github.com/henrique-dev/nosso_financeiro"
            hashtag="#novoprojeto"
          />
        </main>
      </div>
    </div>
  )
}
