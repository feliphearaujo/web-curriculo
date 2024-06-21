import styles from './post.module.css'
import Comments from './Comments'

export default function Post() {
  return (
    <>
      <article className={styles.post}>
        {/* Header apenas está tendo função semantica */}
        <header>
          <div className={styles.author}>
            <img src="src\assets\avatar.png" alt="" />
            <div className={styles.authorInfo}>
              <strong>Feliphe Araújo dos Santos</strong>
              <span>Programador React</span>
            </div>
          </div>
        </header>
        <div className={styles.content}>
          <p>Sobre você</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error optio culpa iure maiores totam, praesentium exercitationem suscipit, sint quasi aspernatur magni velit, ipsum sequi molestiae aliquid nostrum accusantium vero?</p>

          <p><a>Link Repositórios</a></p>
          <p><a>Último Projeto</a></p>
        </div>

        <form action="">
          <strong>Experiência profissional</strong>
        </form>

        <div>
          <Comments/>
        </div>

      </article>
    </>
    
  )
}