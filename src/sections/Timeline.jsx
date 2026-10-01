import { eventos } from '../data/timeline'
import { img } from '../data/img'

// Veio do index: "Uma Viagem no Tempo". Os botões "Explorar..." (timeline.html) foram removidos.
export default function Timeline() {
  return (
    <section id="timeline" className="container py-5 previa-timeline">
      <div className="row mb-5">
        <h2 className="titulo">Uma Viagem no Tempo</h2>
      </div>

      {eventos.map((evento, i) => {
        // posições ímpares (1, 3...) invertem imagem e texto
        const invertido = i % 2 === 1
        return (
          <div
            className={`row align-items-center mb-5 item-timeline ${invertido ? 'flex-row-reverse' : ''}`}
            key={evento.ano}
          >
            <div className="col-md-6">
              <img
                className={`img-fluid shadow zoom-imagem ${evento.pretoEBranco ? 'preto-e-branco' : ''}`}
                src={img(evento.imagem)}
                alt={evento.alt}
              />
            </div>
            <div className={`col-md-6 mt-4 mt-md-0 ${invertido ? 'text-md-end' : ''}`}>
              <p className="titulo mb-1">{evento.ano}</p>
              <h3 className="fw-bold mb-3">{evento.titulo}</h3>
              <p className="paragrafo text-justificado">{evento.texto}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
