import { useState } from 'react'
import { curiosidades } from '../data/curiosidades'

// Veio da SUA página curiosidades.html. O H1 virou H2.
// O acordeão agora é controlado pelo React: guardamos qual item está aberto.
export default function Curiosidades() {
  // null = todos fechados; número = índice do item aberto
  const [aberto, setAberto] = useState(null)

  const alternar = (i) => setAberto(aberto === i ? null : i)

  return (
    <section id="curiosidades" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="display-4 fw-bold">Curiosidades</h2>
            <p className="lead text-muted">
              Além da música, os Beatles deixaram histórias curiosas ao longo da carreira. Clique em
              cada pergunta abaixo para saber mais.
            </p>

            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <div className="accordion">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
