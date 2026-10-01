import { img } from '../data/img'

// Veio do index (foto do hero). Ganha o ÚNICO <h1> da página e dois botões de ação.
export default function Hero() {
  return (
    <section id="inicio" className="hero hero-landing">
      <img className="img-fluid w-100" src={img('Hero.png')} alt="Foto dos Beatles" />
      <div className="hero-camada">
        <h1 className="display-1 fw-bold text-white">The Beatles</h1>
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
    </section>
  )
}
