import { useState } from 'react'
import { curiosidades } from '../data/curiosidades'

export default function Curiosidades() {
  const [aberto, setAberto] = useState(null)
  const alternar = (i) => setAberto(aberto === i ? null : i)

  return (
    <section id="curiosidades" className="landing-section py-5">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">VOCÊ SABIA?</span>
          <h2 className="display-4 fw-bold mb-2">Curiosidades</h2>
          <p className="lead text-muted">
            Clique em cada pergunta para descobrir mais sobre a história dos Beatles.
          </p>
        </div>

        <div className="accordion curiosidades-card">
          {curiosidades.map((item, i) => (
            <div className="accordion-item" key={item.pergunta}>
              <h3 className="accordion-header">
                <button
                  type="button"
                  className={`accordion-button ${aberto === i ? '' : 'collapsed'}`}
                  aria-expanded={aberto === i}
                  onClick={() => alternar(i)}
                >
                  {item.pergunta}
                </button>
              </h3>
              <div className={`accordion-collapse collapse ${aberto === i ? 'show' : ''}`}>
                <div className="accordion-body">{item.resposta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
