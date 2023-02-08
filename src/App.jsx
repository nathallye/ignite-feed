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
            author="Diego Fernandes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
          />
          <Post
            author="Nathallye Bacelar"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
