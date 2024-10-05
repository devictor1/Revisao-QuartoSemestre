import './App.css'
import ComponentePai from './components/ComponentePai'
import ListaDinamica from './components/ListaDinamica'

function App() {
  const nomes = ["Cleber", "Jailson", "Jessica", "Ricardo", "Luciano"]
  return (
    <>
      <ComponentePai />
      <h1>Componente Filho</h1>
      <ListaDinamica nomes={nomes}/>
    </>
  )
}

export default App
