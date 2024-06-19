
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Post from './Components/Post'
import styles from './app.module.css'
import './styles.global.css'

function App() {

  return (
    <>
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post/>
          </main>
        </div>

      </div>
      
    </>
  )
}

export default App
