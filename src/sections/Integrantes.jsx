import { integrantes } from '../data/integrantes'

export default function Integrantes() {
  return (
    <section id="integrantes" className="landing-section py-5">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">OS QUATRO</span>
          <h2 className="display-4 fw-bold mb-3">Os Quatro de Liverpool</h2>
          <p className="lead text-muted">
            John Lennon, Paul McCartney, George Harrison e Ringo Starr. Quatro personalidades
            diferentes que, juntas, criaram uma das formações mais reconhecidas da música.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {integrantes.map((integrante) => (
            <div className="col-6 col-lg-3" key={integrante.nome}>
              <article className="member-card h-100">
                <div className="member-image-wrap">
                  <img src={integrante.imagem} alt={integrante.alt} className="member-image" />
                </div>
                <div className="member-card-body">
                  <h3 className="h4 fw-bold">{integrante.nome}</h3>
                  <p className="mb-0">{integrante.texto}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
