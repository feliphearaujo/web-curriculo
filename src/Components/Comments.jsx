import styles from './comments.module.css'

export default function Comments(){
    return(
        <>
            <div className={styles.comments}>
                <img src="src\assets\experiencia1.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Experiência 1</strong>
                            </div>
                        </header>
                        <p>Insira sua Experiência</p>
                    </div>
                </div>
            </div>
        </>
    )
}