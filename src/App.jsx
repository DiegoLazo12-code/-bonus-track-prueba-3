import { useState } from 'react'
import './App.css'
import { mascotas } from '../data/mascota.js'
import FiltroEspecie from './components/FiltroEspecie.jsx'
import ListaMascotas from './components/ListaMascotas.jsx'

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const especieKey = mascota.especie?.toLowerCase() || 'otro'
    const termino = busqueda.trim().toLowerCase()

    const coincideEspecie =
      filtroEspecie === 'Todas' ||
      (filtroEspecie === 'Otro' && especieKey !== 'perro' && especieKey !== 'gato') ||
      especieKey === filtroEspecie.toLowerCase()

    const coincideNombre = !termino || mascota.nombre?.toLowerCase().includes(termino)

    return coincideEspecie && coincideNombre
  })

  const adopcionesUrgentes = mascotasFiltradas.filter((mascota) => mascota.adopcionUrgente).length

  return (
    <section id="mascotas-section">
      <div className="mascotas-header">
        <h2>Lista de mascotas</h2>
        <p className="contador-urgente">
          Adopciones urgentes: <strong>{adopcionesUrgentes}</strong>
        </p>
      </div>

      <div className="filtros-container">
        <FiltroEspecie filtro={filtroEspecie} onChange={setFiltroEspecie} />
        <div className="busqueda-container">
          <label htmlFor="busqueda-nombre">Buscar por nombre</label>
          <input
            id="busqueda-nombre"
            type="text"
            value={busqueda}
            placeholder="Escribe un nombre"
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {mascotasFiltradas.length > 0 ? (
        <ListaMascotas mascotas={mascotasFiltradas} />
      ) : (
        <p className="sin-resultados">No hay mascotas que coincidan</p>
      )}
    </section>
  )
}

export default App
