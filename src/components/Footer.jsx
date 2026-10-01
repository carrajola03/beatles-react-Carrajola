import { links } from '../data/links'
import { img } from '../data/img'

// Divide os links em 3 colunas, como no rodapé original
const colunas = [links.slice(0, 2), links.slice(2, 4), links.slice(4)]

export default function Footer() {
  return (
    <footer className="footer-beatles">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img
              className="img-fluid logo-footer"
              src={img('beatles-footer-logo-branco.png')}
              alt="Logo Beatles Abbey Road"
            />
          </div>

          <div className="col-md-5">
            <p>
              <b>Trabalho de Front-end 2</b> - Banda
              <br />
              Desenvolvido por Enzo Gabriel, Arthur Ribeiro, Gabriel Carrajola, Matheus Bonatti,
              Levi Lara e Jaderson Andrade.
              <br />
              Todos os direitos reservados © 2026 - The Beatles
            </p>
          </div>

          <div className="col-md-5">
            <div className="row">
              {colunas.map((coluna, i) => (
                <div className="col-md-4" key={i}>
                  <ul className="list-unstyled">
                    {coluna.map((link) => (
                      <li className="nav-item" key={link.href}>
                        <a className="nav-link" href={link.href}>
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
