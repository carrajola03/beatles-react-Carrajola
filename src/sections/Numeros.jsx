import { numeros } from '../data/numeros'

// Veio do index (faixa preta). Os números eram <h1>; agora são <div>,
// porque a página só pode ter um H1.
export default function Numeros() {
  return (
    <section id="numeros" className="faixa-preta text-white py-5">
      <div className="container text-center">
        <div className="row g-4 mb-4">
          {numeros.map((n) => (
            <div className="col-6 col-md-3 passada" key={n.rotulo}>
              <div className="num-home text-white">{n.valor}</div>
              <p className="fw-bold fs-5">{n.rotulo}</p>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="paragrafo text-center fs-5 mt-3 mb-4">
              Em pouco mais de sete anos de carreira de estúdio, os Beatles atravessaram fases
              completamente distintas: do pop cru dos primeiros singles à experimentação
              psicodélica. Cada disco é a fotografia de uma banda em constante transformação.
            </p>
            <a className="btn btn-light px-4 py-2" href="#discografia">
              Ver discografia completa →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
