function MascotaCard({ nombre, raza, edad, especie, descripcion, caracteristicas }) {
  const especieKey = especie?.toLowerCase() || 'otro'
  const speciesClass = especieKey === 'perro' ? 'perro' : especieKey === 'gato' ? 'gato' : 'otro'

  return (
    <article className={`mascota-card mascota-card--${speciesClass}`}>
      <div className="mascota-card__header">
        <div>
          <h3 className="mascota-card__title">{nombre}</h3>
          <p className="mascota-card__meta">{raza} · {edad} año{edad === 1 ? '' : 's'}</p>
        </div>
        <span className={`mascota-card__tag mascota-card__tag--${speciesClass}`}>
          {especie || 'Otro'}
        </span>
      </div>

      <p className="mascota-card__descripcion">{descripcion}</p>

      {caracteristicas?.length > 0 && (
        <div className="mascota-card__features">
          <strong>Características</strong>
          <ul>
            {caracteristicas.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default MascotaCard
