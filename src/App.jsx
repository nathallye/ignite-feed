import Header from "./components/Header";
import Post from "./components/Post";

import "./global.css";

export default function App() {

  return (
    <div>
      <Header />
      
      <Post
        author="Diego Fernandes"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!"
      />
      <Post
        author="Nathallye Bacelar"
        content="Um novo post muito legal"
      />
    </div>
  )
}
