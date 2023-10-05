import styles from './Post.module.css';

export function Post() {
    return (
       <article className={styles.post}>
            <header> 
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/29209254?v=4" width={30} height={30} alt="Celson Fernando" />
                    <div className={styles.authorInfo}>
                        <strong> Celson Fernando </strong>
                        <span> Front-end Dev </span>
                    </div>
                </div>
                <time title="04 de Outubro às 21h:29m" dateTime="2023-10-04 21:29:00"> Publicado há 1h </time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href=""> jane.design/doctorcare </a></p>

             
                <ul className={styles.listNotOrdered}>
                    <li> <a href=""> #novoprojeto </a> </li>
                    <li> <a href=""> #nlw </a> </li>
                    <li> <a href=""> #rocketseat </a> </li>
                </ul>
           
            </div>
       </article>
    )
}