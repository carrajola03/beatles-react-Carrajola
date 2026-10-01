import { fotos } from '../data/fotos'

// Veio do index: 3 fotos. O link "Ver mais fotos" (galeria.html) foi removido.
export default function Fotos() {
  return (
    <section id="fotos" className="container py-5">
      <div className="row">
        {fotos.map((foto) => (
          <div className="col-md-4 mb-4 mb-md-0" key={foto.alt}>
            <img className="img-fluid hoverzada" src={foto.src} alt={foto.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
