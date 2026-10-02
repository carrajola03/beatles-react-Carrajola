export default function Legado() {
  return (
    <section id="legado" className="legado-section py-5">
      <div className="container">
        <div className="legado-card">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="section-kicker">IMPACTO</span>
              <h2 className="display-4 fw-bold mb-3">Um Legado Eterno</h2>
              <p className="lead mb-3">
                Mais de seis décadas depois do início da Beatlemania, a música dos Beatles continua
                sendo revisitada por diferentes gerações.
              </p>
              <p className="mb-0">
                O grupo ajudou a transformar a linguagem do pop e do rock, influenciando artistas,
                produtores e novas formas de criação musical. Seu catálogo permanece como parte
                importante da história da música popular.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/img/foto-classica.png"
                alt="Os Beatles em uma imagem histórica"
                className="img-fluid legado-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
