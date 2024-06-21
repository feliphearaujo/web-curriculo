import styles from './sidebar.module.css'

export default function Sidebar(){
    return(
        <>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src="src\assets\banner.jpg" alt="" />
                <div className={styles.profile}>
                    <img className={styles.avatar} src="src\assets\avatar.png" alt="" />
                    <strong>Feliphe Araújo dos Santos</strong>
                    <span>Programador React</span>
                </div>
                <footer>
                    <a href="">Github</a>
                </footer>
            </aside>
        </>
    )
}