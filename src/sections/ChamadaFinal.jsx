// Veio do index: o card da citação do Lennon virou a chamada final (CTA),
// com destaque e botão para a ação principal do site: explorar a discografia.
export default function ChamadaFinal() {
  return (
    <section id="chamada-final" className="bg-dark text-white py-5">
      <div className="container text-center py-4">
        <figure className="mb-4">
          <blockquote className="blockquote destaque">
            <p>
              "Realize seu sonho. Você mesmo vai ter de fazer isso... eu não posso acordar você.
              Você é quem pode se acordar."
            </p>
          </blockquote>
          <figcaption className="blockquote-footer mt-3 text-white-50">
            John Lennon em <cite title="Playboy">entrevista à revista Playboy</cite>
          </figcaption>
        </figure>
        <h2 className="h3 fw-bold mb-3">Pronto para ouvir os discos?</h2>
        <a href="#discografia" className="btn btn-light px-4 py-2">
          Explorar a discografia →
        </a>
      </div>
    </section>
  )
}
