import { useState } from 'react'
import { links } from '../data/links'
import { img } from '../data/img'

export default function Navbar() {
  // true = menu aberto (só importa no celular)
  const [aberto, setAberto] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
      <div className="container">
        <a className="navbar-brand" href="#inicio" onClick={() => setAberto(false)}>
          <img src={img('logo-branca.png')} alt="The Beatles" height="80" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${aberto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setAberto(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
