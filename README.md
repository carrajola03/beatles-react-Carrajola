# The Beatles | Landing Page em React

Parte 2 (individual) do trabalho de Desenvolvimento Frontend II.

## Autor
SEU NOME COMPLETO

## Origem
- Repositório do grupo (Parte 1): https://github.com/wnsogabriel/thebeatles-front2.git
- Páginas que fiz na Parte 1: discografia.html e curiosidades.html
- Autor(a) do index.html original: wnsogabriel

## Site publicado
LINK_DO_NETLIFY

## Como executar
```
npm install
npm run dev
```

## Seções da Landing Page
| Seção | Origem |
|---|---|
| Hero | index.html |
| História | index.html |
| Números | index.html |
| Fotos | index.html |
| Timeline | index.html |
| Discografia | discografia.html (minha página) |
| Curiosidades | curiosidades.html (minha página) |
| Chamada final | index.html (citação do Lennon, transformada em CTA) |

## Decisões de fusão
- Navbar e rodapé das 3 páginas viraram um componente cada.
- Os títulos H1 de Discografia e Curiosidades viraram H2; o único H1 está no Hero.
- Os números da faixa preta eram H1 e viraram `div`.
- Links para `.html` viraram âncoras; os cards que só levavam a páginas que não entram na Landing foram removidos.
- Dados repetidos (links, álbuns, curiosidades, timeline, números, fotos) vêm de arrays com `map()`.
- `useState`: filtro de período na Discografia, acordeão das Curiosidades e menu do celular.
