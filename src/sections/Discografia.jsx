import { useState } from 'react'
import { albuns, filtros } from '../data/albuns'
import { img } from '../data/img'

// Veio da SUA página discografia.html. O H1 virou H2.
// Diferencial: filtro por período com useState.
export default function Discografia() {
  const [filtroId, setFiltroId] = useState('todos')

  const filtroAtual = filtros.find((f) => f.id === filtroId)
  const visiveis = albuns.filter((a) => a.ano >= filtroAtual.de && a.ano <= filtroAtual.ate)

  return (
    <section id="discografia" className="bg-light py-5">
      <div className="container">
        <h2 className="display-4 fw-bold">Discografia</h2>
        <p className="lead text-muted">
          Entre 1963 e 1970, os Beatles lançaram <strong>13 álbuns de estúdio</strong>, um percurso
          que vai do pop direto dos primeiros singles até a experimentação em estúdio dos últimos
          trabalhos.
        </p>

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
            <div className="col-lg-3 col-md-4 col-6" key={album.titulo}>
              <div className="album-card">
                <div className="album-cover-wrap">
                  <img className="album-cover" src={img(album.capa)} alt={album.alt} />
                  <span className="album-ano">{album.ano}</span>
                </div>
                <div className="album-card-body">
                  <h3 className="album-titulo h5">{album.titulo}</h3>
                  <p className="album-info mb-0">{album.faixas}</p>
                  <p className="text-justificado">{album.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
