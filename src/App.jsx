import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./assets/css/App.module.css"

import "./assets/css/global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/29209254?v=4",
      name: "Celson Fernando",
      role: "Front-end Dev",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "https://jane.design/doctorcare",
      }
    ],
    publishedAt: new Date("2021-10-04T21:29:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/29209254?v=4",
      name: "Jose Foguete",
      role: "Fullstack Dev",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "https://jane.design/doctorcare",
      }
    ],
    publishedAt: new Date("2021-10-04T21:29:00"),
  },
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
              return (
                <Post key={post.id}
                  author={post.author} 
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ) 
            }
          )}
        </main>
      </div>
      
    </div>
  )
}