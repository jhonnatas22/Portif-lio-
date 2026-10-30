/* =========================================================
   1. DADOS — edite aqui para atualizar skills e projetos
   ========================================================= */
const SKILLS = [
  {
    group: "linguagens",
    items: ["Python", "JavaScript", "Node.js", "SQL"]
  },
  {
    group: "fundamentos",
    items: ["POO", "Lógica de Programação", "Estrutura de Dados"]
  },
  {
    group: "front-end",
    items: ["HTML5", "CSS3", "JavaScript", "Responsividade"]
  },
  {
    group: "back-end & dados",
    items: ["Flask", "FastAPI", "Express", "APIs REST", "JWT", "PostgreSQL", "SQLite", "Web Scraping", "Automação"]
  },
  {
    group: "ferramentas",
    items: ["Git & GitHub", "Deploy (Render)", "GitHub Pages"]
  },
];

const PROJECTS = [
  {
    name: "doaflow",
    title: "DoaFlow",
    status: "concluído",
    description: "Sistema de gestão de doações: aplicação web com interface e servidor no mesmo projeto, conectando doadores e instituições, com controle de estoque, feed, chat e notificações por e-mail.",
    features: [
      "Estoque de doações com histórico de movimentações",
      "Vitrine pública de ONGs com busca e filtros por tipo, estado e verificadas",
      "Feed de publicações e chat entre doador e instituição",
      "Notificações por e-mail em segundo plano, com opção de desativar",
      "Perfis de acesso: admin, doador e instituição"
    ],
    tech: ["Python", "Flask", "SQLite", "JavaScript", "Chart.js", "Gunicorn", "Render"],
    demo: "https://doaflow.onrender.com/",
    repo: "https://github.com/jhonnatas22/DoaFlow"
  },
  {
    name: "taagendado",
    title: "TáAgendado",
    status: "concluído",
    description: "Aplicação web de agendamento para negócios locais, como clínicas e barbearias, com API em Node.js e telas em HTML puro. Suporta vários negócios na mesma plataforma, cada um com seus dados isolados.",
    features: [
      "Multi-negócio, com separação de dados por tenant",
      "Perfis de acesso: cliente, funcionário, admin e super-admin (JWT)",
      "Lembretes automáticos por e-mail e WhatsApp",
      "Confirmação de conta, redefinição de senha e exportação de relatórios em CSV",
      "Painéis para admin, funcionário, super-admin e agendamento do cliente"
    ],
    tech: ["Node.js", "Express", "Sequelize", "PostgreSQL", "JWT", "Jest", "Render"],
    demo: "https://taagendado-api.onrender.com/",
    repo: "https://github.com/jhonnatas22/TaAgendamento"
  },
  {
    name: "mini-erp",
    title: "Nexo ERP",
    status: "concluído",
    description: "API REST de um mini ERP desenvolvida em FastAPI + SQLAlchemy, com autenticação JWT, controle de acesso por perfil (RBAC), estoque com histórico imutável, vendas transacionais, pedidos/orçamentos, relatórios e trilha de auditoria.",
    features: [
      "Autenticação JWT e controle de acesso por perfil (RBAC)",
      "Estoque com histórico imutável",
      "Vendas transacionais, pedidos e orçamentos",
      "Relatórios e trilha de auditoria"
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "JWT"],
    demo: "https://nexo-erp-site.onrender.com/",
    repo: "https://github.com/jhonnatas22/mini-erp"
  },
  {
    name: "lumina-financas",
    title: "Lumina Finanças",
    status: "concluído",
    description: "API REST do SaaS de gestão financeira Lumina, construída com FastAPI, SQLite e autenticação JWT.",
    features: [
      "API REST para gestão financeira",
      "Autenticação de usuários com JWT"
    ],
    tech: ["Python", "FastAPI", "SQLite", "JWT"],
    demo: "https://lumina-financas.onrender.com/",
    repo: "https://github.com/jhonnatas22/lumina-financas"
  },
  {
    name: "nexomarket",
    title: "NexoMarket",
    status: "concluído",
    description: "API REST completa de um marketplace multi-vendedor, implementando o fluxo comercial descrito na especificação: autenticação, lojas, produtos, carrinho, checkout, pedidos com rastreamento, avaliações, favoritos e painel administrativo.",
    features: [
      "Autenticação de usuários",
      "Gestão de lojas e produtos (multi-vendedor)",
      "Carrinho de compras e checkout",
      "Pedidos com rastreamento",
      "Avaliações e favoritos",
      "Painel administrativo"
    ],
    tech: ["Python", "SQL", "API REST", "Render"],
    demo: "https://nexomarket-pd2r.onrender.com/",
    repo: "https://github.com/jhonnatas22/nexomarket"
  },
  {
    name: "radarpreco_completo",
    title: "RadarPreço — Backend Completo",
    status: "concluído",
    description: "Backend real por trás do site RadarPreço: cadastro de usuários, login, cadastro de produtos para monitorar e verificação automática de preços — tudo persistido em banco de dados, não em memória.",
    features: [
      "Cadastro e login de usuários",
      "Cadastro de produtos para monitoramento contínuo",
      "Histórico de preços por produto",
      "Verificação automática de preços em segundo plano"
    ],
    tech: ["Python", "SQL", "Render"],
    demo: "https://radarpreco-completo.onrender.com",
    repo: "https://github.com/jhonnatas22/radarpreco_completo"
  },
  {
    name: "metodo-decolar",
    title: "Método Decolar",
    status: "concluído",
    description: "Site completo (landing page de conversão) com backend próprio em forma de API, feito para capturar leads e criar pedidos de forma automatizada.",
    features: [
      "Landing page de conversão",
      "API para captura de leads",
      "Criação e registro de pedidos"
    ],
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    demo: "https://metodo-decolar-site.onrender.com",
    repo: "https://github.com/jhonnatas22/metodo-decolar"
  },
  {
    name: "scraper-de-vagas",
    title: "Scraper de Vagas",
    status: "concluído",
    description: "Ferramenta de web scraping que faz uma única requisição para vagas em todo o Brasil por profissão, aplicando o filtro por estado depois — a partir do local de cada vaga retornada.",
    features: [
      "Uma requisição cobrindo o Brasil inteiro por profissão",
      "Filtro por estado aplicado sobre os resultados",
      "Extração automatizada de dados de vagas"
    ],
    tech: ["Python", "Web Scraping"],
    demo: "https://scraper-de-vagas.onrender.com",
    repo: "https://github.com/jhonnatas22/scraper-de-vagas"
  },
  {
    name: "cofre_gerador_senhas",
    title: "Cofre — Gerador de Senhas",
    status: "concluído",
    description: "Aplicação web para geração de senhas, pensada como um pequeno cofre digital de acesso rápido.",
    features: [
      "Geração de senhas sob demanda",
      "Interface simples e direta ao ponto"
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://cofre-gerador-senhas.onrender.com",
    repo: "https://github.com/jhonnatas22/cofre_gerador_senhas"
  },
  {
    name: "rastreador-gastos",
    title: "Rastreador de Gastos",
    status: "concluído",
    description: "Aplicação para acompanhar e organizar gastos pessoais, registrando os lançamentos de forma simples.",
    features: [
      "Registro de gastos",
      "Visualização organizada dos lançamentos"
    ],
    tech: ["JavaScript", "HTML", "CSS"],
    demo: "https://jhonnatas22.github.io/rastreador-gastos/",
    repo: "https://github.com/jhonnatas22/rastreador-gastos"
  },
  {
    name: "projeto-android",
    title: "Projeto Android (Capítulo 17)",
    status: "concluído",
    description: "Projeto prático desenvolvido no Capítulo 17 do curso de HTML e CSS, com foco em fixar os conceitos de layout e estilização vistos no módulo.",
    features: [
      "Aplicação dos conceitos do capítulo 17 do curso",
      "Prática de estruturação de layout com HTML e CSS"
    ],
    tech: ["HTML", "CSS"],
    demo: "https://jhonnatas22.github.io/projeto-android/",
    repo: "https://github.com/jhonnatas22/projeto-android"
  },
  {
    name: "projeto-login",
    title: "Tela de Login",
    status: "concluído",
    description: "Interface de tela de login desenvolvida como exercício prático de estruturação de formulários e estilização.",
    features: [
      "Formulário de login estilizado",
      "Layout responsivo"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://jhonnatas22.github.io/projeto-login/",
    repo: "https://github.com/jhonnatas22/projeto-login"
  },
  {
    name: "projeto-social",
    title: "Projeto de Rede Social",
    status: "concluído",
    description: "Interface inspirada em redes sociais, desenvolvida como exercício prático de HTML, CSS e JavaScript.",
    features: [
      "Layout de feed inspirado em redes sociais",
      "Estruturação de componentes reutilizáveis"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://jhonnatas22.github.io/projeto-social/",
    repo: "https://github.com/jhonnatas22/projeto-social"
  },
  {
    name: "projeto-cordel",
    title: "Cordel de Milton Duarte",
    status: "concluído",
    description: "Página dedicada a apresentar o Cordel de Milton Duarte, desenvolvida como projeto prático de HTML e CSS com foco em tipografia e leitura.",
    features: [
      "Layout focado em leitura e tipografia",
      "Apresentação do conteúdo do cordel"
    ],
    tech: ["HTML", "CSS"],
    demo: "https://jhonnatas22.github.io/projeto-cordel/",
    repo: "https://github.com/jhonnatas22/projeto-cordel"
  },
];

/* =========================================================
   2. RENDER — skills
   ========================================================= */
function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-group" data-reveal>
      <p class="skill-group__title">${group.group}</p>
      <div class="skill-tags">
        ${group.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* =========================================================
   3. RENDER — projetos
   ========================================================= */
function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="project-card" data-reveal>
      <div class="project-card__bar">
        <span class="project-card__file">${p.name}.md</span>
        <span class="project-card__status">● ${p.status}</span>
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
        <ul class="project-card__features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="project-card__tech">
          ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <div class="project-card__links">
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver projeto ↗</a>` : ''}
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">Código-fonte ↗</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/* =========================================================
   4. HERO — efeito de digitação
   ========================================================= */
function typeEffect(){
  const target = document.getElementById('typeTarget');
  if (!target) return;
  const text = '"criar software que resolve problemas reais"';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion){
    target.textContent = text;
    return;
  }

  let i = 0;
  (function step(){
    target.textContent = text.slice(0, i);
    i++;
    if (i <= text.length){
      setTimeout(step, 32);
    }
  })();
}

/* =========================================================
   5. NAV — menu mobile + estado de scroll
   ========================================================= */
function initNav(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* =========================================================
   6. SCROLL REVEAL
   ========================================================= */
function initReveal(){
  const items = document.querySelectorAll('[data-reveal]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}

/* =========================================================
   7. FORMULÁRIO DE CONTATO (placeholder — sem backend)
   ========================================================= */
function initContactForm(){
  const form = document.getElementById('contactForm');
  const hint = document.getElementById('formHint');
  if (!form) return;

  const DESTINO = 'Jhonnatasamaro@gmail.com';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').trim();
    const email = (data.get('email') || '').trim();
    const mensagem = (data.get('mensagem') || '').trim();

    const assunto = `Contato pelo portfólio — ${nome}`;
    const corpo =
      `Nome: ${nome}\n` +
      `E-mail: ${email}\n\n` +
      `Mensagem:\n${mensagem}`;

    const mailtoLink =
      `mailto:${DESTINO}` +
      `?subject=${encodeURIComponent(assunto)}` +
      `&body=${encodeURIComponent(corpo)}`;

    // Abre o cliente de e-mail do visitante com a mensagem já preenchida.
    window.location.href = mailtoLink;

    hint.textContent = `Abrindo seu aplicativo de e-mail com a mensagem preenchida, ${nome}. Se nada abrir, escreva direto para ${DESTINO}.`;
    hint.style.color = 'var(--green)';
    form.reset();
  });
}

/* =========================================================
   8. INIT
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

renderSkills();
renderProjects();
typeEffect();
initNav();
initReveal();
initContactForm();
