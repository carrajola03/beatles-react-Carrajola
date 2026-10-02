import { img } from '../data/img'

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-landing">
      <img className="hero-image" src={img('hero-local.png')} alt="Foto dos Beatles" />
      <div className="hero-camada">
        <div className="container hero-content">
          <span className="hero-kicker">A BANDA QUE MUDOU A MÚSICA</span>
          <h1>The Beatles</h1>
          <p className="lead text-white mb-4">
            Quatro garotos de Liverpool que mudaram a música para sempre.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#discografia" className="btn btn-light px-4 py-2">
              Ver discografia →
            </a>
            <a href="#curiosidades" className="btn btn-outline-light px-4 py-2">
              Ler curiosidades
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
