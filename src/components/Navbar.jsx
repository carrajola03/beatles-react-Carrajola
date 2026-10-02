import { useState } from 'react'
import { links } from '../data/links'
import { img } from '../data/img'

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-beatles sticky-top py-0">
      <div className="container">
        <a className="navbar-brand" href="#inicio" onClick={() => setAberto(false)}>
          <img className="navbar-logo" src={img('logo-branca.png')} alt="The Beatles" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-navegacao"
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div id="menu-navegacao" className={`collapse navbar-collapse ${aberto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
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
