function FiltroEspecie({ filtro, onChange }) {
  const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

  return (
    <div className="filtro-especie">
      <label htmlFor="filtro-especie">Filtrar por especie</label>
      <select
        id="filtro-especie"
        value={filtro}
        onChange={(e) => onChange(e.target.value)}
      >
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FiltroEspecie
