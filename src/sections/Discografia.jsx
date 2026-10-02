import { useState } from 'react'
import { albuns, filtros } from '../data/albuns'
import { img } from '../data/img'

export default function Discografia() {
  const [filtroId, setFiltroId] = useState('todos')
  const filtroAtual = filtros.find((f) => f.id === filtroId)
  const visiveis = albuns.filter((a) => a.ano >= filtroAtual.de && a.ano <= filtroAtual.ate)

  return (
    <section id="discografia" className="landing-section py-5 bg-light">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">13 ÁLBUNS</span>
          <h2 className="display-4 fw-bold mb-2">Discografia</h2>
          <p className="lead text-muted">
            Entre 1963 e 1970, os Beatles lançaram 13 álbuns de estúdio, em um percurso que vai do
            pop direto dos primeiros trabalhos à experimentação em estúdio.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filtrar por período">
          {filtros.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`btn ${f.id === filtroId ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => setFiltroId(f.id)}
            >
              {f.rotulo}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {visiveis.map((album) => (
            <div className="col-6 col-md-4 col-lg-3" key={album.titulo}>
              <article className="album-card h-100">
                <div className="album-cover-wrap">
                  <img className="album-cover" src={img(album.capa)} alt={album.alt} />
                  <span className="album-ano">{album.ano}</span>
                </div>
                <div className="album-card-body">
                  <h3 className="album-titulo h5">{album.titulo}</h3>
                  <p className="album-info">{album.faixas}</p>
                  <p className="text-justificado mb-0">{album.descricao}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
