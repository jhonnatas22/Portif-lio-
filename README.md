# Portfólio — Jhonnatas Amaro

Portfólio pessoal desenvolvido para apresentar projetos, habilidades e experiência na área de tecnologia.

🔗 **Site publicado:** _adicione aqui o link depois do deploy (ex: GitHub Pages)_

## Sobre

Site com identidade visual inspirada em um editor de código: fundo escuro, tipografia monoespaçada e paleta de syntax-highlighting. Construído do zero com HTML, CSS e JavaScript puros, sem frameworks ou dependências externas.

## Seções

- **Hero** — apresentação com efeito de digitação
- **Sobre Mim** — formação e objetivos profissionais
- **Skills** — Python, SQL, POO, HTML/CSS/JavaScript, Git & GitHub
- **Projetos** — 14 projetos com descrição, funcionalidades, tecnologias e links (demo + repositório)
- **Contato** — e-mail, WhatsApp, GitHub e LinkedIn

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, grid, flexbox, animações)
- JavaScript (vanilla — sem frameworks)
- Fontes: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) e [Inter](https://fonts.google.com/specimen/Inter)

## Estrutura do projeto

```
.
├── index.html            # estrutura da página
├── style.css              # estilos e identidade visual
├── script.js               # dados (skills/projetos) e interações
├── favicon.svg              # favicon principal
├── favicon-32.png            # fallback do favicon
└── apple-touch-icon.png       # ícone para dispositivos Apple
```

## Como editar

- **Textos gerais** (nome, bio, contato): direto no `index.html`
- **Skills e projetos**: nos arrays `SKILLS` e `PROJECTS` no topo do `script.js` — o site renderiza automaticamente a partir deles

## Como rodar localmente

Não precisa de instalação nem build. Basta abrir o `index.html` no navegador, ou, se preferir um servidor local:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Deploy

Este projeto é 100% estático, então pode ser publicado gratuitamente em:

- **GitHub Pages** (recomendado, já que o código está no GitHub)
- Vercel
- Netlify

### Publicando com GitHub Pages

1. No repositório do GitHub, vá em **Settings → Pages**
2. Em **Branch**, selecione `main` e a pasta `/ (root)`
3. Salve — o site ficará disponível em `https://jhonnatas22.github.io/nome-do-repositorio/`

## Contato

- **E-mail:** Jhonnatasamaro@gmail.com
- **GitHub:** [@jhonnatas22](https://github.com/jhonnatas22)
- **LinkedIn:** [jhonnatas-amaro](https://www.linkedin.com/in/jhonnatas-amaro-65b96734a/)
