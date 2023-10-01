import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./assets/css/App.module.css"

import "./assets/css/global.css"



export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Celson Fernando" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
        </main>
      </div>
      
    </div>
  )
}