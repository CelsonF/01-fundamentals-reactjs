import { Post } from "./components/Post"
import { Header } from "./components/Header"

import "./assets/css/global.css"

export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Celson Fernando" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      />
      
    </div>
  )
}