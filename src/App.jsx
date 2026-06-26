import './App.css'
import { mascotas } from '../data/mascota.js'
import ListaMascotas from './components/ListaMascotas.jsx'

function App() {
  return (
    <section id="mascotas-section">
      <h2>Lista de mascotas</h2>
      <ListaMascotas mascotas={mascotas} />
    </section>
  )
}

export default App
