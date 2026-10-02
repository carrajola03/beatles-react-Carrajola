import { numeros } from '../data/numeros'

export default function Numeros() {
  return (
    <section id="numeros" className="faixa-preta py-5">
      <div className="container text-center">
        <div className="row g-4">
          {numeros.map((n) => (
            <div className="col-6 col-md-3" key={n.rotulo}>
              <div className="num-home">{n.valor}</div>
              <p className="num-label">{n.rotulo}</p>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <p className="paragrafo fs-5 mb-4">
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
