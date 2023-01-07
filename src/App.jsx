import { useState } from 'react'

import styles from './app.module.scss'

function App() {


  return (
    <div className="App">
     <header>header</header>
     <nav>nav</nav>
     <main className={styles.ma}>main</main>
     <footer>footer</footer>
    </div>
  )
}

export default App
