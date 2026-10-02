import { links } from '../data/links'
import { img } from '../data/img'

const colunas = [
  links.slice(0, 3),
  links.slice(3, 6),
  links.slice(6),
]

export default function Footer() {
  return (
    <footer className="footer-beatles">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-2 text-center text-md-start">
            <img
              className="img-fluid logo-footer"
              src={img('beatles-footer-logo-branco.png')}
              alt="Logo dos Beatles"
            />
          </div>

          <div className="col-12 col-md-5 text-center text-md-start">
            <p>
              <strong>Trabalho de Front-end 2</strong> — Banda
              <br />
              Desenvolvido por Enzo Gabriel, Arthur Ribeiro, Gabriel Carrajola, Matheus Bonatti,
              Levi Lara e Jaderson Andrade.
              <br />
              Todos os direitos reservados © 2026 — The Beatles
            </p>
          </div>

          <div className="col-12 col-md-5">
            <div className="row g-2">
              {colunas.map((coluna, i) => (
                <div className="col-6 col-sm-4" key={i}>
                  <ul className="list-unstyled mb-0">
                    {coluna.map((link) => (
                      <li key={link.href}>
                        <a className="footer-link" href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
