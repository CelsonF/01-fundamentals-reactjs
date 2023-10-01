import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1569396116180-7fe09fa16dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=520&q=20" alt="background image from perfil" />
            
            
            <div className={styles.profile}> 
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/29209254?v=4" alt="Celson Fernando" />
                <strong> 
                    Celson Fernando
                </strong>
                <span>Full Stack Developer</span>
            </div>
            <footer>
                <a href="#"> Editar seu perfil </a>
            </footer>
        </aside>
    )
}