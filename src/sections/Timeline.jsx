import { eventos } from '../data/timeline'
import { img } from '../data/img'

export default function Timeline() {
  return (
    <section id="timeline" className="landing-section py-5">
      <div className="container">
        <div className="section-heading mb-5">
          <span className="section-kicker">1960 — 1969</span>
          <h2 className="display-4 fw-bold mb-2">Uma Viagem no Tempo</h2>
          <p className="lead text-muted mb-0">
            Quatro momentos que ajudam a visualizar a transformação dos Beatles ao longo da década.
          </p>
        </div>

        {eventos.map((evento, i) => {
          const invertido = i % 2 === 1
          return (
            <article
              className={`row align-items-center g-4 mb-5 item-timeline ${invertido ? 'flex-md-row-reverse' : ''}`}
              key={evento.ano}
            >
              <div className="col-12 col-md-6">
                <img
                  className={`timeline-image ${evento.pretoEBranco ? 'preto-e-branco' : ''}`}
                  src={img(evento.imagem)}
                  alt={evento.alt}
                />
              </div>
              <div className={`col-12 col-md-6 ${invertido ? 'text-md-end' : ''}`}>
                <p className="timeline-year mb-1">{evento.ano}</p>
                <h3 className="fw-bold mb-3">{evento.titulo}</h3>
                <p className="paragrafo text-justificado mb-0">{evento.texto}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
