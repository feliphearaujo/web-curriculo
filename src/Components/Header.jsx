import styles from './header.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="" />
            <strong>Currículo eletrônico</strong>

        </header>
    )
}