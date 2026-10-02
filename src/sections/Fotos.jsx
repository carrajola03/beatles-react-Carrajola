import { fotos } from '../data/fotos'

export default function Fotos() {
  return (
    <section id="fotos" className="landing-section py-5 bg-light">
      <div className="container">
        <div className="section-heading mb-4">
          <span className="section-kicker">MEMÓRIA</span>
          <h2 className="display-4 fw-bold mb-2">Galeria</h2>
          <p className="lead text-muted mb-0">Alguns registros visuais para acompanhar a história da banda.</p>
        </div>

        <div className="row g-4">
          {fotos.map((foto) => (
            <div className="col-12 col-md-4" key={foto.src}>
              <figure className="gallery-card mb-0">
                <img className="gallery-image" src={foto.src} alt={foto.alt} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
