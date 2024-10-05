import './App.css'
import Texto from './components/Texto'
import Paragrafo from './components/Paragrafo'
import ListaOrdenada from './components/ListaOrdenada'
import Imagem from './components/Imagem'
import Video from './components/Video'
import Botao from './components/Botao'
import Link from './components/Link'
import TituloESubtitulo from './components/TituloESubtitulo'
import Condicional from './components/Condicional'
import DivEstilizada from './components/DivEstilizada'
import VariosElementos from './components/VariosElementos'

function App() {
  
  return (
    <>
    <Texto />
    <Paragrafo />
    <ListaOrdenada />
    <Imagem />
    <Video />
    <br />
    <Botao />
    <br />
    <Link />
    <TituloESubtitulo />
    <Condicional />
    <DivEstilizada />
    <VariosElementos />
    </>
  )
}

export default App
