import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>  
      <h1>React com Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Você jantou {count} vezes
        </button>
        <p>
          Clique acima para jantar e acima para dormir
        </p>
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          Você dormiu {count1} vezes
        </button> 
      </div>
      <p className="read-the-docs">
        Clique nas imagens pra saber mais
      </p>
    </>
  )
}

export default App
