import styles from './comments.module.css'

export default function Comments(){
    return(
        <>
 
             <div className={styles.comments}>
                <img src="src\assets\engrenagem.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Experiências profissionais</strong>
                            </div>
                        </header>
                        <li>Estágiário de TI - Prefeitura de Muriaé</li>
                        <li>Técnico em manutenção de computadores - Lelente Informática</li>
                        <li>Trainee técnico em eletrotécnica - Alternativa Magnetical Ressonance Image</li>
                    </div>
                </div>
            </div>

            <div className={styles.comments}>
                <img src="src\assets\formacao-academica.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Formação Acadêmica</strong>
                            </div>
                        </header>
                        <li>Programador FrontEnd - Senai</li>
                        <li>Tecnólogo em Gestão da Tecnologia da Informação - IF Sudeste MG</li>
                        <li>Formação LIVT (laravel Inertia Vue Thailwind) - BlackDev</li>
                        <li>Bootcamp Multicloud e Devops - The Cloud Bootcamp</li>
                        <li>Técnico Integrado ao Ensino Médio em eletrotécnica - IF Sudeste MG</li>
                    </div>
                </div>
            </div>

            <div className={styles.comments}>
                <img src="src\assets\ideias.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Principais Projetos</strong>
                            </div>
                        </header>
                        <li>Caliburn Games</li>
                        <img src="src\assets\experiencia1.png" alt="" />
                        <p>Projeto site de uma loja virtual de jogos, onde utilizei React Bootstrap, Chakra UI e o deploy no Vercel</p>
                        <a href="https://caliburn-games.vercel.app/">Link</a>
                    </div>
                </div>
            </div>

            <div className={styles.comments}>
                <img src="src/assets/habilidades.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Habilidades Técnicas</strong>
                            </div>
                        </header>
                        <li>React</li>
                        <li>Pacote Office</li>
                        <li>Montagem e manutenção de computadores</li>
                        <li>Visão computacional</li>
                    </div>
                </div>
            </div>

            <div className={styles.comments}>
                <img src="src\assets\aperto-de-mao.png" alt="" />
                <div>
                    <div className={styles.commentsContent}>
                        <header>
                            <div>
                                <strong>Habilidades Socioemocionais</strong>
                            </div>
                        </header>
                        <li>Comunicativo</li>
                        <li>Proativo</li>
                        <li>Autodidata</li>
                        <li>Organizado</li>
                        <li>Observador</li>
                        <li>Amigável</li>
                    </div>
                </div>
            </div>
        </>
    )
}