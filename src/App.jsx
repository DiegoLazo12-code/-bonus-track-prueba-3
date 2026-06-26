import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { mascotas } from '../data/mascota.js'
import ListaMascotas from './components/ListaMascotas.jsx'

function App() {
  const [count, setCount] = useState(0)
  console.log('mascotas cargadas:', mascotas)

  return (
    <>
      <section id="mascotas-section">
        <h2>Lista de mascotas</h2>
        <ListaMascotas mascotas={mascotas} />
      </section>

      <div className="ticks"></div>

      
    </>
  )
}

export default App
