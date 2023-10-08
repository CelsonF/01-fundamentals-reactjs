import { ThumbsUp , Trash } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/29209254?v=4" alt="Celson Fernando" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <section className={styles.authorTime}>
                            <strong> Celson Fernando </strong>
                            <time title="04 de Outubro às 21h:29m" dateTime="2023-10-04 21:29:00"> Cerca de 1h atrás</time>
                        </section>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> Ficou muito bom, parabéns! </p>
                </div> 
            
            
                <footer>
                  <button>
                    <ThumbsUp size={20} />
                    Aplaudir <span> 20 </span>
                  </button>
                </footer>
            
            </div>
        </div>
    )
} 