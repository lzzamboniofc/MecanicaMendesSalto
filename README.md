# Mecânica Mendes Salto — Node + Vite

O projeto visual e o conteúdo foram preservados. O site agora usa Node.js no ambiente de desenvolvimento e Vite para desenvolvimento/build.

## GitHub Pages
A publicação continua usando **main / (root)**. Como os HTMLs e assets-fonte permanecem na raiz do repositório, o GitHub Pages continua servindo o site diretamente sem depender da pasta `dist`.

## Desenvolvimento
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

O build é gerado em `dist/` para uso opcional em outras hospedagens.

## Estrutura multipágina
- `/index.html`
- `/servicos/embreagem.html`
- `/servicos/freios.html`
- `/servicos/injecao-eletronica.html`
- `/servicos/troca-de-oleo.html`
- `/servicos/descarbonizacao-tsi.html`
- `/servicos/ar-condicionado.html`

A estrutura multipágina preserva as URLs e o SEO das páginas de serviços.
