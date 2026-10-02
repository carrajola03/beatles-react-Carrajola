# beatles-react-Carrajola
# The Beatles — Landing Page React

Projeto individual da disciplina **Desenvolvimento Frontend II — UVA**.

A proposta desta etapa foi migrar a página individual para React e reunir o conteúdo do site em **uma única Landing Page**, com navegação por âncoras, componentes reutilizáveis e layout responsivo.

## Tecnologias

- React
- Vite
- Bootstrap 5
- CSS3
- JavaScript

## Estrutura

```text
src/
├── components/
│   ├── Footer.jsx
│   └── Navbar.jsx
├── data/
│   ├── albuns.js
│   ├── curiosidades.js
│   ├── fotos.js
│   ├── img.js
│   ├── integrantes.js
│   ├── links.js
│   ├── numeros.js
│   └── timeline.js
├── pages/
│   └── LandingPage.jsx
├── sections/
│   ├── ChamadaFinal.jsx
│   ├── Curiosidades.jsx
│   ├── Discografia.jsx
│   ├── Fotos.jsx
│   ├── Hero.jsx
│   ├── Historia.jsx
│   ├── Integrantes.jsx
│   ├── Legado.jsx
│   ├── Numeros.jsx
│   └── Timeline.jsx
├── style/
│   ├── landing.css
│   └── style.css
├── App.jsx
└── main.jsx
```

## Requisitos atendidos

- Uma única Landing Page em `/`.
- Um único menu e um único footer.
- Um único `<h1>`, localizado na Hero.
- Links do menu usando âncoras `#id`.
- Conteúdo repetitivo renderizado com `map()`.
- Componentização por seções.
- Discografia com filtro usando React `useState`.
- Curiosidades com acordeão controlado pelo React.
- Layout responsivo para desktop, tablet e celular.
- Pasta `referencia-html/` preservada com a versão HTML original.
- Fontes utilizadas pelo React disponibilizadas em `public/fonts/`.
- Imagens principais locais, evitando dependência de links externos.
- Configuração de build para publicação no Netlify.

## Como executar

Instale as dependências:

```bash
npm install
```

Rode em desenvolvimento:

```bash
npm run dev
```

Verifique o build de produção:

```bash
npm run build
```

## Publicação no Netlify

Configuração recomendada:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

O arquivo `netlify.toml` também deixa essas configurações registradas no projeto.

## Referência

A pasta `referencia-html/` contém o material HTML/CSS original utilizado como base para a migração.
