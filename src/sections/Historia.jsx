// Veio do index: card "Conheça a História".
// O botão para biografia.html virou âncora para a timeline.
export default function Historia() {
  return (
    <section id="historia" className="py-5">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title display-4 fw-bold">Conheça a História</h2>
            <p className="card-text">
              De um porão apertado no Cavern Club às maiores plateias do planeta, a trajetória dos
              Beatles atravessa quatro personalidades diferentes, uma amizade e uma década inteira
              de reinvenção musical. Essa é a história de como quatro garotos de Liverpool se
              tornaram lenda.
            </p>
            <a href="#timeline" className="btn btn-dark">
              Ver a linha do tempo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
