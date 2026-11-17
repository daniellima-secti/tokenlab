(() => {
  'use strict';

  const STORAGE_KEY = 'tokenlab.v3.state';

  const INJECTED_BODY_VARS = [
    '--bg',
    '--bg-backdrop',
    '--surface',
    '--surface-subtle',
    '--ink',
    '--ink-muted',
    '--accent',
    '--accent-hover',
    '--accent-contrast',
    '--accent-soft',
    '--border-color',
    '--border',
    '--border-strong',
    '--radius',
    '--shadow',
    '--font-display',
    '--font-body',
    '--font-mono'
  ];

  const CATEGORIES = [
    'All',
    'Editorial',
    'Dark Mode',
    'Minimalist',
    'Bold & Retro',
    'Tactile',
    'Sci-Fi & FinTech'
  ];

  const QUICK_SWATCHES = ['#4F46E5', '#B23A1E', '#0071E3', '#10B981'];

  const STYLES = [
    {
      id: 'neo-swiss',
      name: 'Neo-Swiss Editorial',
      shortName: 'Neo-Swiss',
      category: 'Editorial',
      subtitle: 'Papel #F0EADB, tinta #1A1714, 0px radius, bordas 1px solid e Geist Mono tabular.',
      defaultColor: '#B23A1E',
      radius: '0px',
      fontDisplay: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
      fontBody: "'Geist Mono', ui-monospace, monospace",
      fontMono: "'Geist Mono', ui-monospace, monospace",
      signature: '0px · Geist Mono · Tabular',
      previewMeta: {
        kicker: 'EDITION // 01',
        metricLabel: 'Grid Ratio',
        metricOn: '99.4%',
        metricOff: '81.0%',
        deltaOn: '+2.4% Δ',
        deltaOff: 'Draft',
        switchLabel: 'Strict Grid',
        statusOn: 'ALIGNED',
        statusOff: 'UNBOUND',
        primaryBtn: 'Publish Spec',
        secondaryBtn: 'Inspect'
      },
      structureRules: [
        'Use strict mathematical column grids with exposed 1px solid dividers and 0px border-radius everywhere.',
        'Pair Geist for display headers/KPIs with Geist Mono (font-variant-numeric: tabular-nums) for metadata and controls.',
        'Keep elevation completely flat (box-shadow: none).'
      ],
      negativeConstraints: [
        'STRICTLY 0px border-radius — NO rounded corners or pills.',
        'NO drop shadows, NO gradients, NO blur.'
      ]
    },
    {
      id: 'linear-dark',
      name: 'Linear Dark / Obsidian SaaS',
      shortName: 'Linear Dark',
      category: 'Dark Mode',
      subtitle: '#0B0C0E, superfície #14161A, borda translúcida e brilho interno inset.',
      defaultColor: '#5E6AD2',
      radius: '10px',
      fontDisplay: "'Inter', -apple-system, sans-serif",
      fontBody: "'Inter', -apple-system, sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '10px · Inset Rim · Obsidian',
      previewMeta: {
        kicker: 'CLUSTER // PROD',
        metricLabel: 'P95 Latency',
        metricOn: '39 ms',
        metricOff: '118 ms',
        deltaOn: '-14.2%',
        deltaOff: 'Bypass',
        switchLabel: 'Edge Sync',
        statusOn: 'HEALTHY',
        statusOff: 'STANDBY',
        primaryBtn: 'Deploy',
        secondaryBtn: 'Logs'
      },
      structureRules: [
        'Use compact obsidian panels with 10px radius, 1px translucent borders, and top inner specular edge (inset 0 1px 0 rgba(255,255,255,0.08)).',
        'Pair Inter (-0.02em tracking) with JetBrains Mono for metrics and badges.'
      ],
      negativeConstraints: [
        'NO heavy drop shadows or harsh retro thick borders.',
        'NO pure white opaque surfaces.'
      ]
    },
    {
      id: 'apple-bento',
      name: 'Apple Bento Modular',
      shortName: 'Apple Bento',
      category: 'Minimalist',
      subtitle: '#F5F5F7, cards #FFFFFF, 22px radius, sombras difusas e Plus Jakarta Sans.',
      defaultColor: '#0071E3',
      radius: '22px',
      fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
      fontBody: "'Plus Jakarta Sans', -apple-system, sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '22px · Borderless · Diffuse',
      previewMeta: {
        kicker: 'Studio Node M4',
        metricLabel: 'Battery Health',
        metricOn: '98%',
        metricOff: '64%',
        deltaOn: 'Optimal',
        deltaOff: 'Low Power',
        switchLabel: 'Adaptive',
        statusOn: 'CONNECTED',
        statusOff: 'PAUSED',
        primaryBtn: 'Apply',
        secondaryBtn: 'Details'
      },
      structureRules: [
        'Arrange UI into modular Bento tiles with 22px radius, border: none, and feather-soft diffuse shadows.',
        'Use Plus Jakarta Sans across headlines and UI copy with pill-shaped primary CTAs.'
      ],
      negativeConstraints: [
        'NO visible hard 1px/2px borders around Bento tiles.',
        'NO sharp 0px corners.'
      ]
    },
    {
      id: 'neo-brutalism',
      name: 'Neo-Brutalism',
      shortName: 'Neo-Brutalism',
      category: 'Bold & Retro',
      subtitle: '#FFFDF7, superfície #FFDE59, borda 2px #000 e sombra dura 4px (afunda para 2px).',
      defaultColor: '#FF6B6B',
      radius: '4px',
      fontDisplay: "'Space Grotesk', sans-serif",
      fontBody: "'Space Grotesk', sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '4px · 2px #000 · 4px Hard Shadow',
      previewMeta: {
        kicker: 'DROP // #089',
        metricLabel: 'Gross Sales',
        metricOn: '$14,820',
        metricOff: '$8,100',
        deltaOn: '+34% LIVE',
        deltaOff: 'LOCKED',
        switchLabel: 'Payouts',
        statusOn: 'ACTIVE',
        statusOff: 'FROZEN',
        primaryBtn: 'Ship Now!',
        secondaryBtn: 'Diff'
      },
      structureRules: [
        'Use 2px solid borders, 4px radius, and hard unblurred 4px 4px 0px offset shadows.',
        'Translate buttons physically on :active (translate(2px, 2px)) reducing shadow to 2px 2px 0px.',
        'Use Space Grotesk with bold weights and WCAG-safe dark ink on saturated fills.'
      ],
      negativeConstraints: [
        'NO blurred shadows or glassmorphism.',
        'NO muted low-contrast borders.'
      ]
    },
    {
      id: 'warm-paper',
      name: 'Warm Paper / Literary Notion',
      shortName: 'Warm Paper',
      category: 'Editorial',
      subtitle: '#FBFBFA, superfície #F3F2EE, borda #E6E4DD, títulos Newsreader + corpo Inter.',
      defaultColor: '#D9730D',
      radius: '6px',
      fontDisplay: "'Newsreader', Georgia, serif",
      fontBody: "'Inter', -apple-system, sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '6px · Newsreader Serif + Inter',
      previewMeta: {
        kicker: 'Workspace Notes',
        metricLabel: 'Docs Indexed',
        metricOn: '1,248',
        metricOff: '1,190',
        deltaOn: '+58 today',
        deltaOff: 'Archived',
        switchLabel: 'Auto-Index',
        statusOn: 'SYNCED',
        statusOff: 'LOCAL',
        primaryBtn: 'Publish',
        secondaryBtn: 'History'
      },
      structureRules: [
        'Pair Newsreader serif headings and callout metrics with calm Inter UI body copy.',
        'Use 6px radius and quiet 1px solid warm borders with whisper-soft shadows.'
      ],
      negativeConstraints: [
        'NO cold neon gradients or aggressive brutalist outlines.',
        'NO low-contrast white text on warm amber buttons.'
      ]
    },
    {
      id: 'glassmorphism-aurora',
      name: 'Glassmorphism / Spatial Aurora',
      shortName: 'Spatial Aurora',
      category: 'Dark Mode',
      subtitle: 'Fundo escuro com esferas de luz, rgba(255,255,255,0.10) + blur(16px) e Outfit.',
      defaultColor: '#38BDF8',
      radius: '16px',
      fontDisplay: "'Outfit', sans-serif",
      fontBody: "'Outfit', sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '16px · Blur(16px) · Aurora',
      previewMeta: {
        kicker: 'AURORA // SPATIAL',
        metricLabel: 'Frame Rate',
        metricOn: '120 fps',
        metricOff: '60 fps',
        deltaOn: 'HDR Glass',
        deltaOff: 'Eco Mode',
        switchLabel: 'Depth Blur',
        statusOn: 'ACTIVE',
        statusOff: 'MUTED',
        primaryBtn: 'Launch',
        secondaryBtn: 'Calibrate'
      },
      structureRules: [
        'Layer frosted glass cards (rgba(255,255,255,0.10) + backdrop-filter: blur(16px)) with 16px radius and 1px specular borders.',
        'Float translucent panels over ambient cyan/violet aurora light spheres using Outfit typography.'
      ],
      negativeConstraints: [
        'NO flat opaque paper cards blocking ambient backdrop spheres.',
        'NO sharp 0px corners.'
      ]
    },
    {
      id: 'retro-terminal',
      name: 'Retro Terminal / TUI',
      shortName: 'Retro Terminal',
      category: 'Bold & Retro',
      subtitle: '#090D09, verde fósforo #33FF66, 0px radius, bordas dashed, cursor piscante.',
      defaultColor: '#33FF66',
      radius: '0px',
      fontDisplay: "'JetBrains Mono', monospace",
      fontBody: "'JetBrains Mono', monospace",
      fontMono: "'JetBrains Mono', monospace",
      signature: '0px · 1px Dashed · TUI Blink',
      previewMeta: {
        kicker: 'TTY0 // DAEMON',
        metricLabel: 'MEM_ALLOC',
        metricOn: '0412 MB',
        metricOff: '0000 MB',
        deltaOn: '[OK]',
        deltaOff: '[HALT]',
        switchLabel: 'TTY_ECHO',
        statusOn: 'ONLINE',
        statusOff: 'OFFLINE',
        primaryBtn: './exec',
        secondaryBtn: 'tail -f'
      },
      structureRules: [
        'Enforce 0px border-radius, 1px dashed borders, and JetBrains Mono exclusively.',
        'Include blinking cursor cues using steps(1) animation and inverted solid active states.'
      ],
      negativeConstraints: [
        'STRICTLY 0px border-radius and NO proportional sans-serif or serif fonts.',
        'NO smooth elastic easing.'
      ]
    },
    {
      id: 'soft-clay',
      name: 'Soft Clay / Neumorphism',
      shortName: 'Soft Clay',
      category: 'Tactile',
      subtitle: '#E4E8F0, sombras duplas extrudadas, :active inset e DM Sans.',
      defaultColor: '#4F46E5',
      radius: '18px',
      fontDisplay: "'DM Sans', sans-serif",
      fontBody: "'DM Sans', sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '18px · Dual Clay Shadow',
      previewMeta: {
        kicker: 'Haptic Console',
        metricLabel: 'Press Force',
        metricOn: '84.2 N',
        metricOff: '12.0 N',
        deltaOn: 'Extruded',
        deltaOff: 'Recessed',
        switchLabel: 'Clay Lock',
        statusOn: 'ARMED',
        statusOff: 'IDLE',
        primaryBtn: 'Press Hold',
        secondaryBtn: 'Reset'
      },
      structureRules: [
        'Sculpt controls directly from the monochromatic surface using paired light/dark directional shadows (6px 6px 12px / -6px -6px 12px).',
        'Switch :active buttons to recessed inset shadows (inset 4px 4px 8px / inset -4px -4px 8px) with 18px radius and DM Sans.'
      ],
      negativeConstraints: [
        'NO hard black borders or sharp 0px brutalist outlines.'
      ]
    },
    {
      id: 'cyberpunk-hud',
      name: 'Cyberpunk HUD / Telemetry',
      shortName: 'Cyberpunk HUD',
      category: 'Sci-Fi & FinTech',
      subtitle: '#05080F, cantos chanfrados (clip-path), mira técnica, Chakra Petch + Mono.',
      defaultColor: '#00F0FF',
      radius: '0px',
      fontDisplay: "'Chakra Petch', sans-serif",
      fontBody: "'JetBrains Mono', monospace",
      fontMono: "'JetBrains Mono', monospace",
      signature: 'Chamfer clip-path · Chakra Petch',
      previewMeta: {
        kicker: 'HUD // SECTOR-7G',
        metricLabel: 'CORE_LINK',
        metricOn: '99.97%',
        metricOff: '41.20%',
        deltaOn: 'LOCKED',
        deltaOff: 'DEGRADED',
        switchLabel: 'OVERRIDE',
        statusOn: 'ARMED',
        statusOff: 'SAFE',
        primaryBtn: 'ENGAGE',
        secondaryBtn: 'SCAN'
      },
      structureRules: [
        'Cut corners diagonally using CSS clip-path: polygon(...) on HUD containers and primary buttons.',
        'Pair Chakra Petch geometric display headings with JetBrains Mono telemetry readouts and sharp neon left-edge accents.'
      ],
      negativeConstraints: [
        'NO soft pastel rounded pill cards or warm editorial paper tones.'
      ]
    },
    {
      id: 'stripe-fintech',
      name: 'Stripe FinTech / Crisp Mesh',
      shortName: 'Stripe FinTech',
      category: 'Sci-Fi & FinTech',
      subtitle: '#F6F9FC, cards brancos nítidos, sombra azulada multicamada e Plus Jakarta Sans.',
      defaultColor: '#635BFF',
      radius: '8px',
      fontDisplay: "'Plus Jakarta Sans', -apple-system, sans-serif",
      fontBody: "'Plus Jakarta Sans', -apple-system, sans-serif",
      fontMono: "'JetBrains Mono', ui-monospace, monospace",
      signature: '8px · Multi-Layer Slate Shadow',
      previewMeta: {
        kicker: 'LEDGER // LIVE',
        metricLabel: 'Net Volume',
        metricOn: '$842,910',
        metricOff: '$610,400',
        deltaOn: '+18.4% YoY',
        deltaOff: 'Sandbox',
        switchLabel: 'Live Mode',
        statusOn: 'SETTLED',
        statusOff: 'TEST',
        primaryBtn: 'Create Payout',
        secondaryBtn: 'API Keys'
      },
      structureRules: [
        'Render crisp white surfaces over cool slate canvas (#F6F9FC) with subtle diagonal mesh highlights.',
        'Apply multi-layered cool indigo-tinted elevation shadows (0 13px 27px -5px rgba(50,50,93,0.12)) and 8px radius with Plus Jakarta Sans.'
      ],
      negativeConstraints: [
        'NO heavy brutalist 2px black outlines or neon CRT scanlines.'
      ]
    }
  ];

  const MOTION_TECHNIQUES = [
    {
      id: 'magnetic-spring',
      name: 'Botão Magnético (Spring Physics)',
      shortName: 'Magnetic Spring',
      spec: 'pointermove / pointerleave + cubic-bezier(0.34, 1.56, 0.64, 1)',
      description: 'Botão que atrai sutilmente em direção ao cursor no pointermove e retorna com mola no pointerleave.',
      promptDirective: 'Use Magnetic Spring Physics on primary interactive buttons: track pointermove relative to button center (clamped +/-16px), shift inner label slightly for depth, and return smoothly on pointerleave with cubic-bezier(0.34, 1.56, 0.64, 1).'
    },
    {
      id: 'mouse-parallax',
      name: 'Card 3D Mouse Parallax',
      shortName: '3D Mouse Parallax',
      spec: 'perspective(900px) rotateX/rotateY + specular glare',
      description: 'Card em camadas que inclina em 3D acompanhando o mouse, com reflexo especular dinâmico.',
      promptDirective: 'Implement 3D Mouse Parallax cards using transform: perspective(900px) rotateX(...) rotateY(...) (bounded +/-12deg), layered translateZ depths, and a dynamic radial-gradient specular glare tracking pointer coordinates.'
    },
    {
      id: 'scroll-stagger',
      name: 'Scroll-Driven Reveal & Stagger',
      shortName: 'Scroll & Stagger',
      spec: 'cubic-bezier(0.22, 1, 0.36, 1) + cascade delay',
      description: 'Demonstração interativa de revelação escalonada em cascata com desaceleração sedosa.',
      promptDirective: 'Implement Scroll-Driven Reveal & Staggered Cascade using IntersectionObserver or @supports (animation-timeline: view()) with 55ms incremental delays and cubic-bezier(0.22, 1, 0.36, 1) easing.'
    },
    {
      id: 'snappy-zero',
      name: 'Snappy Zero-Delay (TUI / Brutalist)',
      shortName: 'Snappy 0ms',
      spec: '0ms steps(1) · Instant Mechanical Swap',
      description: 'Transições mecânicas instantâneas sem interpolação para interfaces técnicas e terminais.',
      promptDirective: 'Enforce Snappy Zero-Delay state swaps (transition: all 0ms steps(1)) across tabs, command palettes, and split panes for instant terminal responsiveness.'
    }
  ];

  const LIBRARY_CATEGORIES = [
    {
      id: 'alerts-toasts',
      title: 'Alertas & Toasts',
      items: [
        { id: 'sonner', name: 'Sonner', pkg: 'sonner@latest', desc: 'Toasts empilháveis modernos.' },
        { id: 'sweetalert2', name: 'SweetAlert2', pkg: 'sweetalert2@latest', desc: 'Modais de confirmação acessíveis.' },
        { id: 'toastify-js', name: 'Toastify-js', pkg: 'toastify-js@latest', desc: 'Notificações leves em JS vanilla.' },
        { id: 'native-dialog-popover', name: 'Native <dialog> + Popover API', pkg: 'HTML5 Native API', desc: 'Zero dependências externas.' }
      ]
    },
    {
      id: 'animation-scroll',
      title: 'Animação & Scroll',
      items: [
        { id: 'motion-framer', name: 'Motion (Framer Motion)', pkg: 'motion@latest', desc: 'Motor declarativo de springs e layout.' },
        { id: 'gsap-scrolltrigger', name: 'GSAP + ScrollTrigger', pkg: 'gsap@latest', desc: 'Timelines e scroll choreography.' },
        { id: 'animejs', name: 'Anime.js', pkg: 'animejs@latest', desc: 'Animações leves de DOM/SVG.' },
        { id: 'autoanimate', name: 'AutoAnimate', pkg: '@formkit/auto-animate@latest', desc: 'Transições automáticas em listas.' },
        { id: 'native-view-transitions', name: 'Native CSS View Transitions & @starting-style', pkg: 'CSS Platform Native', desc: 'Zero dependências JS.' }
      ]
    },
    {
      id: 'ui-components',
      title: 'Componentes & Primitivos UI',
      items: [
        { id: 'shadcn-ui', name: 'shadcn/ui', pkg: 'shadcn@latest', desc: 'Componentes copiáveis e customizáveis.' },
        { id: 'radix-primitives', name: 'Radix Primitives', pkg: '@radix-ui/react-dialog@latest', desc: 'Primitivos headless acessíveis.' },
        { id: 'base-ui', name: 'Base UI', pkg: '@base-ui/react@latest', desc: 'Primitivos sem estilo de baixo nível.' },
        { id: 'daisyui', name: 'DaisyUI', pkg: 'daisyui@latest', desc: 'Classes semânticas de tema.' },
        { id: 'ark-ui', name: 'Ark UI', pkg: '@ark-ui/react@latest', desc: 'Máquinas de estado multi-framework.' }
      ]
    },
    {
      id: 'icons-dataviz',
      title: 'Ícones & Visualização de Dados',
      items: [
        { id: 'lucide-icons', name: 'Lucide Icons', pkg: 'lucide@latest', desc: 'Conjunto consistente de ícones SVG.' },
        { id: 'phosphor-icons', name: 'Phosphor Icons', pkg: '@phosphor-icons/web@latest', desc: 'Família flexível com múltiplos pesos.' },
        { id: 'apache-echarts', name: 'Apache ECharts', pkg: 'echarts@latest', desc: 'Gráficos interativos de alta densidade.' },
        { id: 'chart-js', name: 'Chart.js', pkg: 'chart.js@latest', desc: 'Charts responsivos em Canvas.' }
      ]
    }
  ];

  const COMMUNITY_SKILLS = [
    {
      id: 'anthropic-frontend-design',
      ref: 'anthropics/skills → frontend-design',
      badge: 'Claude Code / agy',
      description: 'Combate o visual genérico gerado por IA e exige direção estética intencional, tipografia expressiva e composição autoral.'
    },
    {
      id: 'vercel-web-design',
      ref: 'vercel-labs/agent-skills → web-design-guidelines',
      badge: 'Vercel Labs',
      description: 'Auditoria rigorosa de espaçamento, hierarquia de contraste, estados de foco, densidade e responsividade cross-device.'
    },
    {
      id: 'ui-ux-pro-max',
      ref: 'ui-ux-pro-max',
      badge: 'Design Intelligence',
      description: 'Inteligência de paletas semânticas, pareamento tipográfico e padrões estruturais de layout ajustados por domínio.'
    },
    {
      id: 'gsap-scroll-architect',
      ref: 'gsap-scroll-architect',
      badge: 'Motion Performance',
      description: 'Padrões de animação acelerados por GPU (transform/opacity) sem layout thrashing e com cleanup determinístico.'
    }
  ];

  const AST10_SKILLS = [
    {
      id: 'ast-01-prompt-injection',
      badge: 'AST-01',
      title: 'Indirect Prompt Injection Guard',
      description: 'Sanitização estrita de dados externos antes de renderizar na UI ou retroalimentar contexto de agentes.',
      promptRule: '[OWASP AST-01 — Indirect Prompt Injection Guard] Strictly sanitize and delimit untrusted external API data before rendering in UI or feeding back into AI agent contexts; never pass raw unescaped DOM HTML/comments into prompts.',
      skillRules: [
        'NEVER pass unsanitized external API payloads or hidden DOM text back into an agent prompt loop.',
        'Render untrusted data strictly via `.textContent` and explicitly isolate/escape control sequences.'
      ]
    },
    {
      id: 'ast-03-hitl',
      badge: 'AST-03',
      title: 'Execution Layer & Human-in-the-Loop',
      description: 'Exigir confirmação humana explícita na UI antes de disparar ações destrutivas ou chamadas de ferramentas.',
      promptRule: '[OWASP AST-03 — Execution Layer & Human-in-the-Loop] Require explicit human confirmation in the UI (showing target and parameters) before dispatching destructive actions or AI tool calls.',
      skillRules: [
        'Require explicit Human-in-the-Loop (HITL) confirmation dialogs for destructive or side-effecting tool calls.',
        'Display exact action target and payload parameters before executing.'
      ]
    },
    {
      id: 'ast-05-storage',
      badge: 'AST-05',
      title: 'Storage & Token Isolation',
      description: 'Proibir tokens sensíveis em localStorage aberto; validar inputs e storage com try/catch e allowlists.',
      promptRule: '[OWASP AST-05 — Storage & Token Isolation] NEVER store auth tokens, API keys, or secrets in localStorage/sessionStorage. Route sensitive sessions via HttpOnly BFF cookies and wrap non-sensitive storage access in try/catch + allowlists.',
      skillRules: [
        'NEVER store API keys, bearer tokens, or session credentials in `localStorage`, `sessionStorage`, or URL params.',
        'Wrap non-sensitive UI preference storage in `try/catch` and validate against explicit allowlists.'
      ]
    },
    {
      id: 'dom-wcag22',
      badge: 'DOM & WCAG 2.2 AA',
      title: 'DOM Seguro & Acessibilidade WCAG 2.2 AA',
      description: 'Zero innerHTML com strings dinâmicas (document.createElement + textContent), contraste >= 4.5:1 e :focus-visible.',
      promptRule: '[DOM & WCAG 2.2 AA] Zero innerHTML/outerHTML/insertAdjacentHTML with dynamic strings (use document.createElement + textContent), guarantee >= 4.5:1 text contrast, crisp :focus-visible outlines, rel="noopener noreferrer" on external links, and @media (prefers-reduced-motion: reduce).',
      skillRules: [
        'NEVER use `innerHTML`, `outerHTML`, `insertAdjacentHTML`, or `document.write` with dynamic strings.',
        'Build dynamic DOM nodes with `document.createElement` + `textContent`.',
        'Guarantee `>= 4.5:1` contrast, keyboard operability, `:focus-visible`, `rel="noopener noreferrer"` on external links, and `prefers-reduced-motion` support.'
      ]
    }
  ];

  const MANDATORY_VERSION_POLICY = 'MANDATORY VERSION POLICY (@latest): Always resolve, install, and use the `@latest` stable version of every selected library, UI kit, or CDN package (e.g., `npm install <package>@latest`). NEVER use outdated legacy APIs or old pinned versions from training data. Check the latest major version syntax before generating code.';

  const GOOGLE_FONT_SPECS = {
    'Geist': { query: 'Geist:wght@400;500;600;700', stack: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif" },
    'Inter': { query: 'Inter:wght@400;500;600;700', stack: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" },
    'Plus Jakarta Sans': { query: 'Plus+Jakarta+Sans:wght@400;500;600;700', stack: "'Plus Jakarta Sans', -apple-system, sans-serif" },
    'Space Grotesk': { query: 'Space+Grotesk:wght@400;500;600;700', stack: "'Space Grotesk', sans-serif" },
    'Newsreader': { query: 'Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400', stack: "'Newsreader', Georgia, serif" },
    'Playfair Display': { query: 'Playfair+Display:wght@500;600;700', stack: "'Playfair Display', Georgia, serif" },
    'Outfit': { query: 'Outfit:wght@400;500;600;700', stack: "'Outfit', sans-serif" },
    'Chakra Petch': { query: 'Chakra+Petch:wght@500;600;700', stack: "'Chakra Petch', sans-serif" },
    'DM Sans': { query: 'DM+Sans:wght@400;500;600;700', stack: "'DM Sans', sans-serif" },
    'Source Sans 3': { query: 'Source+Sans+3:wght@400;500;600;700', stack: "'Source Sans 3', sans-serif" },
    'Geist Mono': { query: 'Geist+Mono:wght@400;500;600', stack: "'Geist Mono', ui-monospace, monospace" },
    'JetBrains Mono': { query: 'JetBrains+Mono:wght@400;500;600;700', stack: "'JetBrains Mono', ui-monospace, monospace" },
    'Fira Code': { query: 'Fira+Code:wght@400;500;600', stack: "'Fira Code', ui-monospace, monospace" },
    'Space Mono': { query: 'Space+Mono:wght@400;700', stack: "'Space Mono', ui-monospace, monospace" }
  };

  const DISPLAY_FONT_OPTIONS = ['Geist', 'Inter', 'Plus Jakarta Sans', 'Space Grotesk', 'Newsreader', 'Playfair Display', 'Outfit', 'Chakra Petch', 'JetBrains Mono'];
  const BODY_FONT_OPTIONS = ['Inter', 'Geist', 'DM Sans', 'Plus Jakarta Sans', 'Source Sans 3', 'JetBrains Mono'];
  const MONO_FONT_OPTIONS = ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'Space Mono'];

  const FONT_PAIRINGS = [
    {
      id: 'neo-swiss-grotesque',
      name: 'Neo-Swiss Grotesque (Editorial & Dashboards)',
      display: 'Geist',
      body: 'Geist',
      mono: 'Geist Mono',
      tightTracking: true
    },
    {
      id: 'editorial-contrast',
      name: 'Editorial Contrast (Publicações & Blogs)',
      display: 'Newsreader',
      body: 'Inter',
      mono: 'JetBrains Mono',
      tightTracking: false
    },
    {
      id: 'modern-saas',
      name: 'Modern SaaS & Startup (Tech / B2B)',
      display: 'Plus Jakarta Sans',
      body: 'Inter',
      mono: 'JetBrains Mono',
      tightTracking: false
    },
    {
      id: 'bold-geometric',
      name: 'Bold Geometric / Brutalist (Landing Pages)',
      display: 'Space Grotesk',
      body: 'DM Sans',
      mono: 'Space Mono',
      tightTracking: false
    },
    {
      id: 'futuristic-hud',
      name: 'Futuristic HUD / Sci-Fi (FinTech / AI)',
      display: 'Chakra Petch',
      body: 'Outfit',
      mono: 'JetBrains Mono',
      tightTracking: false
    },
    {
      id: 'developer-terminal',
      name: 'Developer Terminal (Docs & CLI)',
      display: 'JetBrains Mono',
      body: 'JetBrains Mono',
      mono: 'JetBrains Mono',
      tightTracking: false
    }
  ];

  const STYLING_STACKS = [
    { id: 'hybrid', label: 'Híbrido (CSS Vars + Tailwind)', shortLabel: 'Híbrido' },
    { id: 'tailwind', label: 'Tailwind CSS (@latest)', shortLabel: 'Tailwind v4+' },
    { id: 'vanilla', label: 'CSS Puro (Vanilla)', shortLabel: 'CSS Puro' }
  ];

  const STYLE_IDS = STYLES.map((s) => s.id);
  const MOTION_IDS = MOTION_TECHNIQUES.map((m) => m.id);
  const LIB_IDS = LIBRARY_CATEGORIES.flatMap((c) => c.items.map((i) => i.id));
  const SECURITY_IDS = AST10_SKILLS.map((s) => s.id);
  const STACK_IDS = STYLING_STACKS.map((s) => s.id);

  const state = {
    globalTheme: 'light',
    activeCategory: 'All',
    colorsByStyle: Object.fromEntries(STYLES.map((s) => [s.id, s.defaultColor])),
    combinedStyleIds: [],
    focusedStyleId: 'neo-swiss',
    liveThemeSource: null, // { type: 'single', styleId } | { type: 'combo' } | null
    typography: {
      presetId: 'neo-swiss-grotesque',
      display: 'Geist',
      body: 'Geist',
      mono: 'Geist Mono',
      tightTracking: true,
      tabularNums: true,
      specimenTitle: 'TokenLab Design Architecture'
    },
    stylingStack: 'hybrid',
    motionId: 'magnetic-spring',
    selectedLibIds: ['sonner', 'motion-framer', 'shadcn-ui', 'lucide-icons'],
    activeSecurityIds: [...SECURITY_IDS],
    dockMinimized: false,
    previewDrawerOpen: false
  };

  const dom = {};
  const cardControllers = new Map();
  let toastTimer = null;

  /* ------------------------------------------------------------------------
     Safe DOM, Color & Storage Helpers
     ------------------------------------------------------------------------ */

  function createEl(tag, options, children) {
    const opts = options || {};
    const childList = Array.isArray(children) ? children : [];
    const el = document.createElement(tag);
    if (opts.className) {
      el.className = opts.className;
    }
    if (opts.text !== undefined && opts.text !== null) {
      el.textContent = String(opts.text);
    }
    if (opts.attrs) {
      for (const [k, v] of Object.entries(opts.attrs)) {
        if (v !== undefined && v !== null) {
          el.setAttribute(k, String(v));
        }
      }
    }
    for (const child of childList) {
      if (child !== null && child !== undefined) {
        el.appendChild(child);
      }
    }
    return el;
  }

  function clearChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function normalizeHex(raw) {
    if (typeof raw !== 'string') {
      return null;
    }
    const match = /^#?([0-9a-fA-F]{6})$/.exec(raw.trim());
    return match ? `#${match[1].toUpperCase()}` : null;
  }

  function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  }

  function rgbToHsl(r, g, b) {
    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;
    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === rn) h = (gn - bn) / d + (gn < bn ? 6 : 0);
      else if (max === gn) h = (bn - rn) / d + 2;
      else h = (rn - gn) / d + 4;
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  function hslToHex(h, s, l) {
    const hn = ((h % 360) + 360) % 360;
    const sn = Math.max(0, Math.min(100, s)) / 100;
    const ln = Math.max(0, Math.min(100, l)) / 100;
    const c = (1 - Math.abs(2 * ln - 1)) * sn;
    const x = c * (1 - Math.abs(((hn / 60) % 2) - 1));
    const m = ln - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (hn < 60) { r = c; g = x; }
    else if (hn < 120) { r = x; g = c; }
    else if (hn < 180) { g = c; b = x; }
    else if (hn < 240) { g = x; b = c; }
    else if (hn < 300) { r = x; b = c; }
    else { r = c; b = x; }
    const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, '0').toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function relativeLuminance(hex) {
    const { r, g, b } = hexToRgb(hex);
    const toLinear = (c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }

  function getContrastInk(bgHex) {
    const bgLum = relativeLuminance(bgHex);
    const cw = 1.05 / (bgLum + 0.05);
    const cd = (bgLum + 0.05) / (relativeLuminance('#0B0C0E') + 0.05);
    return cw >= cd ? '#FFFFFF' : '#0B0C0E';
  }

  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }

  function prefersReducedMotion() {
    return typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getStyleById(id) {
    return STYLES.find((s) => s.id === id) || STYLES[0];
  }

  function getMotionById(id) {
    return MOTION_TECHNIQUES.find((m) => m.id === id) || MOTION_TECHNIQUES[0];
  }

  function getStackById(id) {
    return STYLING_STACKS.find((s) => s.id === id) || STYLING_STACKS[0];
  }

  function getFontStackCss(fontName) {
    return (GOOGLE_FONT_SPECS[fontName] && GOOGLE_FONT_SPECS[fontName].stack) || "'Inter', sans-serif";
  }

  function buildGoogleFontsUrl(fontNames) {
    const unique = [];
    for (const name of fontNames) {
      if (GOOGLE_FONT_SPECS[name] && !unique.includes(name)) {
        unique.push(name);
      }
    }
    if (unique.length === 0) {
      unique.push('Inter', 'JetBrains Mono');
    }
    const families = unique.map((name) => `family=${GOOGLE_FONT_SPECS[name].query}`);
    return `https://fonts.googleapis.com/css2?${families.join('&')}&display=swap`;
  }

  function buildGoogleFontsLinkTag(fontNames) {
    return `<link rel="stylesheet" href="${buildGoogleFontsUrl(fontNames)}">`;
  }

  function loadDynamicGoogleFonts(fontNames) {
    const url = buildGoogleFontsUrl(fontNames);
    let link = document.getElementById('tokenlab-dynamic-fonts');
    if (!link) {
      link = document.createElement('link');
      link.id = 'tokenlab-dynamic-fonts';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    if (link.getAttribute('href') !== url) {
      link.setAttribute('href', url);
    }
  }

  function safeLoadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return;

      if (parsed.globalTheme === 'light' || parsed.globalTheme === 'dark') {
        state.globalTheme = parsed.globalTheme;
      }
      if (typeof parsed.activeCategory === 'string' && CATEGORIES.includes(parsed.activeCategory)) {
        state.activeCategory = parsed.activeCategory;
      }
      if (parsed.colorsByStyle && typeof parsed.colorsByStyle === 'object') {
        for (const id of STYLE_IDS) {
          if (Object.prototype.hasOwnProperty.call(parsed.colorsByStyle, id)) {
            const hex = normalizeHex(parsed.colorsByStyle[id]);
            if (hex) state.colorsByStyle[id] = hex;
          }
        }
      }
      if (Array.isArray(parsed.combinedStyleIds)) {
        const clean = [];
        for (const id of parsed.combinedStyleIds) {
          if (typeof id === 'string' && STYLE_IDS.includes(id) && !clean.includes(id) && clean.length < 2) {
            clean.push(id);
          }
        }
        state.combinedStyleIds = clean;
      }
      if (parsed.typography && typeof parsed.typography === 'object' && !Array.isArray(parsed.typography)) {
        if (DISPLAY_FONT_OPTIONS.includes(parsed.typography.display)) {
          state.typography.display = parsed.typography.display;
        }
        if (BODY_FONT_OPTIONS.includes(parsed.typography.body)) {
          state.typography.body = parsed.typography.body;
        }
        if (MONO_FONT_OPTIONS.includes(parsed.typography.mono)) {
          state.typography.mono = parsed.typography.mono;
        }
        if (typeof parsed.typography.tightTracking === 'boolean') {
          state.typography.tightTracking = parsed.typography.tightTracking;
        }
        if (typeof parsed.typography.tabularNums === 'boolean') {
          state.typography.tabularNums = parsed.typography.tabularNums;
        }
        if (typeof parsed.typography.specimenTitle === 'string' && parsed.typography.specimenTitle.trim()) {
          state.typography.specimenTitle = parsed.typography.specimenTitle.slice(0, 80);
        }
        syncMatchingPresetId();
      }
      if (typeof parsed.stylingStack === 'string' && STACK_IDS.includes(parsed.stylingStack)) {
        state.stylingStack = parsed.stylingStack;
      }
      if (typeof parsed.motionId === 'string' && MOTION_IDS.includes(parsed.motionId)) {
        state.motionId = parsed.motionId;
      }
      if (Array.isArray(parsed.selectedLibIds)) {
        state.selectedLibIds = parsed.selectedLibIds.filter((id) => typeof id === 'string' && LIB_IDS.includes(id));
      }
      if (Array.isArray(parsed.activeSecurityIds)) {
        state.activeSecurityIds = parsed.activeSecurityIds.filter((id) => typeof id === 'string' && SECURITY_IDS.includes(id));
      }
      if (typeof parsed.dockMinimized === 'boolean') {
        state.dockMinimized = parsed.dockMinimized;
      }
    } catch {
      // Safe fallback on malformed storage
    }
  }

  function safeSaveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        globalTheme: state.globalTheme,
        activeCategory: state.activeCategory,
        colorsByStyle: state.colorsByStyle,
        combinedStyleIds: state.combinedStyleIds,
        typography: state.typography,
        stylingStack: state.stylingStack,
        motionId: state.motionId,
        selectedLibIds: state.selectedLibIds,
        activeSecurityIds: state.activeSecurityIds,
        dockMinimized: state.dockMinimized
      }));
    } catch {
      // Ignore quota/private mode errors
    }
  }

  function showToast(msg) {
    if (!dom.toastRegion) return;
    clearChildren(dom.toastRegion);
    dom.toastRegion.appendChild(createEl('div', { className: 'toast', text: msg }));
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      clearChildren(dom.toastRegion);
      toastTimer = null;
    }, 2600);
  }

  function copyText(text, msg, btn) {
    const done = () => {
      showToast(msg);
      if (btn) {
        const orig = btn.dataset.origLabel || btn.textContent;
        btn.dataset.origLabel = orig;
        btn.textContent = 'Copiado!';
        window.setTimeout(() => {
          if (btn.isConnected) btn.textContent = orig;
        }, 1500);
      }
    };

    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, onDone) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.className = 'sr-only';
    document.body.appendChild(area);
    area.select();
    try {
      if (document.execCommand('copy')) onDone();
      else showToast('Copie o texto manualmente.');
    } catch {
      showToast('Área de transferência indisponível.');
    }
    document.body.removeChild(area);
  }

  /* ------------------------------------------------------------------------
     Dynamic Token Generation (10 Styles x HSL / color-mix() x Light/Dark)
     ------------------------------------------------------------------------ */

  function generateTokensForStyle(styleObj, primaryHex, globalTheme) {
    const accent = normalizeHex(primaryHex) || styleObj.defaultColor;
    const { r, g, b } = hexToRgb(accent);
    const hsl = rgbToHsl(r, g, b);
    const isDark = globalTheme === 'dark';

    const accentHover = hslToHex(hsl.h, hsl.s, isDark ? clamp(hsl.l + 8, 18, 86) : clamp(hsl.l - 9, 14, 72));
    const accentContrast = getContrastInk(accent);
    const accentSoft = `color-mix(in srgb, ${accent} ${isDark ? 20 : 13}%, transparent)`;

    let bg;
    let bgBackdrop = 'none';
    let surface;
    let surfaceSubtle;
    let ink;
    let inkMuted;
    let borderColor;
    let border;
    let shadow;
    let clayBtnShadow = '';
    let clayBtnInset = '';

    switch (styleObj.id) {
      case 'neo-swiss': {
        const defaultAccent = accent === styleObj.defaultColor;
        bg = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 12), 9) : (defaultAccent ? '#F0EADB' : hslToHex(hsl.h, Math.min(hsl.s, 18), 93));
        surface = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 10), 13) : (defaultAccent ? '#F8F4EA' : hslToHex(hsl.h, Math.min(hsl.s, 14), 97));
        surfaceSubtle = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 10), 18) : hslToHex(hsl.h, Math.min(hsl.s, 16), 88);
        ink = isDark ? '#F3EFE6' : '#1A1714';
        inkMuted = isDark ? '#B7B0A4' : '#4C463E';
        borderColor = isDark ? '#CFC8BA' : '#1A1714';
        border = isDark ? '1px solid rgba(207, 200, 186, 0.45)' : '1px solid #1A1714';
        shadow = 'none';
        break;
      }
      case 'linear-dark': {
        bg = isDark ? '#0B0C0E' : hslToHex(hsl.h, Math.min(hsl.s, 18), 95);
        surface = isDark ? '#14161A' : '#FFFFFF';
        surfaceSubtle = isDark ? '#1B1E24' : hslToHex(hsl.h, Math.min(hsl.s, 16), 91);
        ink = isDark ? '#F3F4F6' : '#111827';
        inkMuted = isDark ? '#9CA3AF' : '#4B5563';
        borderColor = isDark ? `color-mix(in srgb, ${accent} 18%, rgba(255,255,255,0.09))` : `color-mix(in srgb, ${accent} 18%, rgba(17,24,39,0.12))`;
        border = `1px solid ${borderColor}`;
        shadow = isDark
          ? 'inset 0 1px 0 rgba(255, 255, 255, 0.08)'
          : '0 4px 16px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
        break;
      }
      case 'apple-bento': {
        bg = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 18), 7) : (accent === styleObj.defaultColor ? '#F5F5F7' : hslToHex(hsl.h, Math.min(hsl.s, 22), 95));
        surface = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 14), 13) : '#FFFFFF';
        surfaceSubtle = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 14), 18) : '#EFEFF2';
        ink = isDark ? '#F5F5F7' : '#1D1D1F';
        inkMuted = isDark ? '#A1A1AA' : '#515154';
        borderColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.03)';
        border = 'none';
        shadow = isDark
          ? '0 12px 32px rgba(0, 0, 0, 0.45)'
          : `0 8px 24px color-mix(in srgb, ${accent} 10%, rgba(0, 0, 0, 0.04))`;
        break;
      }
      case 'neo-brutalism': {
        bg = isDark ? '#111115' : '#FFFDF7';
        surface = isDark
          ? hslToHex(hsl.h, Math.min(hsl.s, 24), 17)
          : (accent === styleObj.defaultColor ? '#FFDE59' : hslToHex((hsl.h + 42) % 360, clamp(hsl.s, 62, 90), 76));
        surfaceSubtle = isDark ? hslToHex(hsl.h, Math.min(hsl.s, 22), 23) : '#FFFDF7';
        ink = getContrastInk(surface);
        inkMuted = ink === '#FFFFFF' ? '#D4D4D8' : '#1F1F1F';
        borderColor = isDark ? hslToHex(hsl.h, clamp(hsl.s, 65, 92), 68) : '#000000';
        border = `2px solid ${borderColor}`;
        shadow = `4px 4px 0px ${borderColor}`;
        break;
      }
      case 'warm-paper': {
        bg = isDark ? '#171512' : '#FBFBFA';
        surface = isDark ? '#211E1A' : '#F3F2EE';
        surfaceSubtle = isDark ? '#2B2722' : '#EAE7E0';
        ink = isDark ? '#EDE9E1' : '#37352F';
        inkMuted = isDark ? '#B2AAA0' : '#5C584F';
        borderColor = isDark ? '#38332C' : '#E6E4DD';
        border = `1px solid ${borderColor}`;
        shadow = isDark ? '0 2px 6px rgba(0, 0, 0, 0.3)' : '0 1px 2px rgba(55, 53, 47, 0.04)';
        break;
      }
      case 'glassmorphism-aurora': {
        bg = isDark ? '#0F172A' : hslToHex(hsl.h, Math.min(hsl.s, 28), 90);
        const orb2 = hslToHex((hsl.h + 56) % 360, 76, 60);
        bgBackdrop = isDark
          ? `radial-gradient(circle at 15% 20%, color-mix(in srgb, ${accent} 42%, transparent), transparent 48%), radial-gradient(circle at 85% 80%, color-mix(in srgb, ${orb2} 38%, transparent), transparent 52%), linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)`
          : `radial-gradient(circle at 15% 20%, color-mix(in srgb, ${accent} 28%, transparent), transparent 48%), radial-gradient(circle at 85% 80%, color-mix(in srgb, ${orb2} 24%, transparent), transparent 52%)`;
        surface = isDark ? 'rgba(255, 255, 255, 0.10)' : 'rgba(255, 255, 255, 0.65)';
        surfaceSubtle = isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.5)';
        ink = isDark ? '#FFFFFF' : '#0F172A';
        inkMuted = isDark ? '#CBD5E1' : '#334155';
        borderColor = isDark ? 'rgba(255, 255, 255, 0.25)' : `color-mix(in srgb, ${accent} 26%, rgba(15, 23, 42, 0.16))`;
        border = `1px solid ${borderColor}`;
        shadow = isDark
          ? '0 8px 32px rgba(15, 23, 42, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          : '0 8px 28px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.85)';
        break;
      }
      case 'retro-terminal': {
        bg = isDark ? '#090D09' : hslToHex(hsl.h, Math.min(hsl.s, 18), 93);
        surface = isDark ? '#0F160F' : hslToHex(hsl.h, Math.min(hsl.s, 14), 97);
        surfaceSubtle = isDark ? '#142014' : hslToHex(hsl.h, Math.min(hsl.s, 14), 90);
        const termInk = isDark ? accent : hslToHex(hsl.h, Math.max(hsl.s, 55), 24);
        ink = termInk;
        inkMuted = isDark ? `color-mix(in srgb, ${termInk} 75%, #090D09)` : `color-mix(in srgb, ${termInk} 75%, #FFFFFF)`;
        borderColor = termInk;
        border = `1px dashed ${termInk}`;
        shadow = isDark ? `0 0 14px color-mix(in srgb, ${termInk} 18%, transparent)` : 'none';
        break;
      }
      case 'soft-clay': {
        bg = isDark ? '#1E222A' : '#E4E8F0';
        surface = bg;
        surfaceSubtle = bg;
        ink = isDark ? '#E2E8F0' : '#2D3748';
        inkMuted = isDark ? '#94A3B8' : '#4A5568';
        borderColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.55)';
        border = 'none';
        shadow = isDark
          ? '6px 6px 12px #14171D, -6px -6px 12px #282D37'
          : '6px 6px 12px #c5cad3, -6px -6px 12px #ffffff';
        clayBtnShadow = isDark
          ? '4px 4px 8px #14171D, -4px -4px 8px #282D37'
          : '4px 4px 8px #c5cad3, -4px -4px 8px #ffffff';
        clayBtnInset = isDark
          ? 'inset 4px 4px 8px #14171D, inset -4px -4px 8px #282D37'
          : 'inset 4px 4px 8px #c5cad3, inset -4px -4px 8px #ffffff';
        break;
      }
      case 'cyberpunk-hud': {
        bg = isDark ? '#05080F' : '#EDF2F7';
        bgBackdrop = isDark
          ? `linear-gradient(90deg, color-mix(in srgb, ${accent} 6%, transparent) 1px, transparent 1px), linear-gradient(color-mix(in srgb, ${accent} 6%, transparent) 1px, transparent 1px)`
          : `linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px)`;
        surface = isDark ? '#0B1120' : '#FFFFFF';
        surfaceSubtle = isDark ? '#111A2E' : '#E2E8F0';
        ink = isDark ? '#F8FAFC' : '#0F172A';
        inkMuted = isDark ? `color-mix(in srgb, ${accent} 55%, #94A3B8)` : '#334155';
        borderColor = isDark ? accent : hslToHex(hsl.h, Math.max(hsl.s, 60), 34);
        border = `1px solid ${borderColor}`;
        shadow = isDark
          ? `0 0 18px color-mix(in srgb, ${accent} 20%, transparent)`
          : '0 6px 18px rgba(15, 23, 42, 0.08)';
        break;
      }
      case 'stripe-fintech':
      default: {
        bg = isDark ? '#0A1022' : '#F6F9FC';
        bgBackdrop = isDark
          ? `linear-gradient(135deg, color-mix(in srgb, ${accent} 16%, transparent) 0%, transparent 55%)`
          : `linear-gradient(135deg, color-mix(in srgb, ${accent} 9%, transparent) 0%, rgba(246, 249, 252, 0) 58%)`;
        surface = isDark ? '#111936' : '#FFFFFF';
        surfaceSubtle = isDark ? '#172146' : '#F1F5F9';
        ink = isDark ? '#F8FAFC' : '#0A2540';
        inkMuted = isDark ? '#A5B4FC' : '#425466';
        borderColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(10, 37, 64, 0.08)';
        border = `1px solid ${borderColor}`;
        shadow = isDark
          ? '0 13px 27px -5px rgba(0, 0, 0, 0.45), 0 8px 16px -8px rgba(0, 0, 0, 0.3)'
          : `0 13px 27px -5px color-mix(in srgb, ${accent} 14%, rgba(50, 50, 93, 0.12)), 0 8px 16px -8px rgba(0, 0, 0, 0.08)`;
        break;
      }
    }

    return {
      styleId: styleObj.id,
      accent,
      accentRgb: `rgb(${r}, ${g}, ${b})`,
      accentHover,
      accentContrast,
      accentSoft,
      bg,
      bgBackdrop,
      surface,
      surfaceSubtle,
      ink,
      inkMuted,
      borderColor,
      border,
      borderStrong: border,
      radius: styleObj.radius,
      shadow,
      fontDisplay: styleObj.fontDisplay,
      fontBody: styleObj.fontBody,
      fontMono: styleObj.fontMono,
      clayBtnShadow,
      clayBtnInset
    };
  }

  function mergeComboTokens(baseStyle, skinStyle) {
    const baseTokens = generateTokensForStyle(baseStyle, state.colorsByStyle[baseStyle.id], state.globalTheme);
    const skinTokens = generateTokensForStyle(skinStyle, state.colorsByStyle[skinStyle.id], state.globalTheme);

    let borderColor = skinTokens.borderColor;
    let border = `1px solid ${borderColor}`;

    if (baseStyle.id === 'neo-brutalism') {
      borderColor = skinStyle.id === 'apple-bento' || skinStyle.id === 'soft-clay'
        ? skinTokens.ink
        : skinTokens.borderColor;
      border = `2px solid ${borderColor}`;
    } else if (baseStyle.id === 'retro-terminal') {
      border = `1px dashed ${borderColor}`;
    } else if (baseStyle.id === 'apple-bento' || baseStyle.id === 'soft-clay') {
      border = 'none';
    }

    return {
      styleId: baseStyle.id,
      accent: skinTokens.accent,
      accentRgb: skinTokens.accentRgb,
      accentHover: skinTokens.accentHover,
      accentContrast: skinTokens.accentContrast,
      accentSoft: skinTokens.accentSoft,
      bg: skinTokens.bg,
      bgBackdrop: skinTokens.bgBackdrop,
      surface: skinTokens.surface,
      surfaceSubtle: skinTokens.surfaceSubtle,
      ink: skinTokens.ink,
      inkMuted: skinTokens.inkMuted,
      borderColor,
      border,
      borderStrong: border,
      radius: baseTokens.radius,
      shadow: skinTokens.shadow,
      fontDisplay: baseTokens.fontDisplay,
      fontBody: baseTokens.fontBody,
      fontMono: baseTokens.fontMono,
      clayBtnShadow: skinTokens.clayBtnShadow,
      clayBtnInset: skinTokens.clayBtnInset
    };
  }

  function applyTokensToElement(el, tokens) {
    el.style.setProperty('--bg', tokens.bg);
    el.style.setProperty('--bg-backdrop', tokens.bgBackdrop);
    el.style.setProperty('--surface', tokens.surface);
    el.style.setProperty('--surface-subtle', tokens.surfaceSubtle);
    el.style.setProperty('--ink', tokens.ink);
    el.style.setProperty('--ink-muted', tokens.inkMuted);
    el.style.setProperty('--accent', tokens.accent);
    el.style.setProperty('--accent-hover', tokens.accentHover);
    el.style.setProperty('--accent-contrast', tokens.accentContrast);
    el.style.setProperty('--accent-soft', tokens.accentSoft);
    el.style.setProperty('--border-color', tokens.borderColor);
    el.style.setProperty('--border', tokens.border);
    el.style.setProperty('--border-strong', tokens.borderStrong);
    el.style.setProperty('--radius', tokens.radius);
    el.style.setProperty('--shadow', tokens.shadow);
    el.style.setProperty('--font-display', tokens.fontDisplay);
    el.style.setProperty('--font-body', tokens.fontBody);
    el.style.setProperty('--font-mono', tokens.fontMono);
    if (tokens.clayBtnShadow) {
      el.style.setProperty('--btn-clay-shadow', tokens.clayBtnShadow);
      el.style.setProperty('--btn-clay-inset', tokens.clayBtnInset);
    } else {
      el.style.removeProperty('--btn-clay-shadow');
      el.style.removeProperty('--btn-clay-inset');
    }
  }

  function getActiveFontStacks() {
    return {
      displayName: state.typography.display,
      bodyName: state.typography.body,
      monoName: state.typography.mono,
      fontDisplay: getFontStackCss(state.typography.display),
      fontBody: getFontStackCss(state.typography.body),
      fontMono: getFontStackCss(state.typography.mono)
    };
  }

  function formatCssTokens(tokens, label) {
    const fonts = getActiveFontStacks();
    const lines = [
      `/* TokenLab CSS Tokens: ${label} (${state.globalTheme.toUpperCase()}) */`,
      ':root {',
      `  --bg: ${tokens.bg};`,
      `  --surface: ${tokens.surface};`,
      `  --ink: ${tokens.ink};`,
      `  --ink-muted: ${tokens.inkMuted};`,
      `  --accent: ${tokens.accent};`,
      `  --accent-contrast: ${tokens.accentContrast};`,
      `  --accent-soft: color-mix(in srgb, var(--accent) 14%, transparent);`,
      `  --radius: ${tokens.radius};`,
      `  --border: ${tokens.border};`,
      `  --shadow: ${tokens.shadow};`,
      `  --font-display: ${fonts.fontDisplay};`,
      `  --font-body: ${fonts.fontBody};`,
      `  --font-mono: ${fonts.fontMono};`
    ];
    if (state.typography.tightTracking) {
      lines.push('  --display-tracking: -0.035em;');
    }
    lines.push('}');
    if (state.typography.tabularNums) {
      lines.push('.kpi, .tabular { font-variant-numeric: tabular-nums; }');
    }
    return lines.join('\n');
  }

  function formatCodeForStack(tokens, label) {
    const fonts = getActiveFontStacks();
    if (state.stylingStack === 'tailwind') {
      return [
        `/* Tailwind CSS v4+ (@latest) CSS-first Config: ${label} */`,
        '@import "tailwindcss";',
        '',
        '@theme {',
        `  --color-bg: ${tokens.bg};`,
        `  --color-surface: ${tokens.surface};`,
        `  --color-ink: ${tokens.ink};`,
        `  --color-accent: ${tokens.accent};`,
        `  --color-accent-contrast: ${tokens.accentContrast};`,
        `  --radius-card: ${tokens.radius};`,
        `  --shadow-card: ${tokens.shadow};`,
        `  --font-display: ${fonts.fontDisplay};`,
        `  --font-body: ${fonts.fontBody};`,
        `  --font-mono: ${fonts.fontMono};`,
        '}',
        '',
        '/* Utilitários equivalentes:',
        `<article class="bg-surface text-ink rounded-[var(--radius-card)] shadow-[var(--shadow-card)] font-body p-6">`,
        `  <h3 class="font-display${state.typography.tightTracking ? ' tracking-[-0.035em]' : ''}">Título</h3>`,
        `  <span class="font-mono${state.typography.tabularNums ? ' tabular-nums' : ''}">$1,840.00</span>`,
        `  <button class="bg-accent text-accent-contrast px-4 py-2">Ação</button>`,
        '</article> */'
      ].join('\n');
    }

    if (state.stylingStack === 'hybrid') {
      return [
        `/* Híbrido: Semantic CSS Vars (Light/Dark) + Tailwind v4 @theme inline */`,
        '@import "tailwindcss";',
        '',
        ':root {',
        `  --bg: ${tokens.bg};`,
        `  --surface: ${tokens.surface};`,
        `  --ink: ${tokens.ink};`,
        `  --accent: ${tokens.accent};`,
        `  --accent-contrast: ${tokens.accentContrast};`,
        `  --radius: ${tokens.radius};`,
        `  --border: ${tokens.border};`,
        `  --shadow: ${tokens.shadow};`,
        `  --font-display: ${fonts.fontDisplay};`,
        `  --font-body: ${fonts.fontBody};`,
        `  --font-mono: ${fonts.fontMono};`,
        '}',
        '',
        '@theme inline {',
        '  --color-bg: var(--bg);',
        '  --color-surface: var(--surface);',
        '  --color-ink: var(--ink);',
        '  --color-accent: var(--accent);',
        '  --color-accent-contrast: var(--accent-contrast);',
        '  --radius-card: var(--radius);',
        '  --shadow-card: var(--shadow);',
        '  --font-display: var(--font-display);',
        '  --font-body: var(--font-body);',
        '  --font-mono: var(--font-mono);',
        '}'
      ].join('\n');
    }

    return formatCssTokens(tokens, label);
  }

  /* ------------------------------------------------------------------------
     Global Light / Dark Mode Switch & Live Theme Switcher on <body>
     ------------------------------------------------------------------------ */

  function applyGlobalTheme(mode) {
    state.globalTheme = mode === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.globalTheme);
    const isDark = state.globalTheme === 'dark';

    dom.globalThemeToggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
    dom.globalThemeToggle.querySelector('.theme-switch-btn__icon').textContent = isDark ? '☾' : '☀';
    dom.globalThemeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';

    for (const ctrl of cardControllers.values()) {
      ctrl.refresh();
    }
    syncLiveThemeIfActive();
    renderExportDock();
    updatePreviewDrawerIfOpen();
  }

  function applyLiveThemeToBody(source) {
    state.liveThemeSource = source;
    let tokens;
    let label;

    if (source.type === 'combo' && state.combinedStyleIds.length === 2) {
      const baseStyle = getStyleById(state.combinedStyleIds[0]);
      const skinStyle = getStyleById(state.combinedStyleIds[1]);
      tokens = mergeComboTokens(baseStyle, skinStyle);
      label = `${baseStyle.shortName} (Estrutura) + ${skinStyle.shortName} (${tokens.accent})`;
      document.body.dataset.liveStyle = baseStyle.id;
    } else {
      const styleObj = getStyleById(source.styleId);
      tokens = generateTokensForStyle(styleObj, state.colorsByStyle[styleObj.id], state.globalTheme);
      label = `${styleObj.name} (${tokens.accent})`;
      document.body.dataset.liveStyle = styleObj.id;
    }

    const fonts = getActiveFontStacks();
    loadDynamicGoogleFonts([fonts.displayName, fonts.bodyName, fonts.monoName]);

    const liveTokens = {
      ...tokens,
      fontDisplay: fonts.fontDisplay,
      fontBody: fonts.fontBody,
      fontMono: fonts.fontMono
    };

    applyTokensToElement(document.body, liveTokens);
    document.body.dataset.tightTracking = state.typography.tightTracking ? 'true' : 'false';
    document.body.dataset.tabularNums = state.typography.tabularNums ? 'true' : 'false';
    document.body.classList.add('has-live-theme-bar');
    dom.liveThemeBar.removeAttribute('hidden');
    dom.liveThemeLabel.textContent = `${label} · ${fonts.displayName} + ${fonts.bodyName}`;
    updateCardActionStates();
  }

  function syncLiveThemeIfActive() {
    if (!state.liveThemeSource) return;
    if (state.liveThemeSource.type === 'combo' && state.combinedStyleIds.length < 2) {
      restoreDefaultTheme();
      return;
    }
    applyLiveThemeToBody(state.liveThemeSource);
  }

  function restoreDefaultTheme() {
    state.liveThemeSource = null;
    for (const prop of INJECTED_BODY_VARS) {
      document.body.style.removeProperty(prop);
    }
    delete document.body.dataset.liveStyle;
    delete document.body.dataset.tightTracking;
    delete document.body.dataset.tabularNums;
    document.body.classList.remove('has-live-theme-bar');
    dom.liveThemeBar.setAttribute('hidden', '');
    updateCardActionStates();
    showToast('Visual padrão do TokenLab restaurado.');
  }

  /* ------------------------------------------------------------------------
     Módulo 1: Category Filters & 10 Style Cards
     ------------------------------------------------------------------------ */

  function getFilteredStyles() {
    if (state.activeCategory === 'All') return STYLES;
    return STYLES.filter((s) => s.category === state.activeCategory);
  }

  function renderCategoryFilters() {
    clearChildren(dom.categoryFilters);

    for (const cat of CATEGORIES) {
      const count = cat === 'All' ? STYLES.length : STYLES.filter((s) => s.category === cat).length;
      const isActive = state.activeCategory === cat;
      const btn = createEl('button', {
        className: 'filter-btn',
        attrs: { type: 'button', 'aria-pressed': isActive ? 'true' : 'false' }
      }, [
        createEl('span', { text: cat }),
        createEl('span', { className: 'filter-btn__count', text: String(count) })
      ]);

      btn.addEventListener('click', () => {
        if (state.activeCategory === cat) return;
        state.activeCategory = cat;
        safeSaveState();
        renderCategoryFilters();
        renderStyleGrid();
      });

      dom.categoryFilters.appendChild(btn);
    }

    const visible = getFilteredStyles().length;
    dom.filterStatus.textContent = `Exibindo ${visible} de ${STYLES.length} estilos`;
  }

  function buildSingleStylePrompt(styleObj, tokens) {
    const lines = [
      'ROLE: Senior Front-End Architect & Design Systems Engineer.',
      `DESIGN SYSTEM: ${styleObj.name} (${styleObj.category})`,
      `PRIMARY COLOR: ${tokens.accent} (${tokens.accentRgb}) | THEME: ${state.globalTheme.toUpperCase()}`,
      '',
      'POSITIVE DESIGN RULES:'
    ];
    for (const r of styleObj.structureRules) lines.push(`- ${r}`);
    lines.push(`- Auto-derive surface/border scale via HSL & CSS color-mix() from ${tokens.accent}, ensuring contrast ink ${tokens.accentContrast}.`);
    lines.push('', 'NEGATIVE CONSTRAINTS:');
    for (const n of styleObj.negativeConstraints) lines.push(`- ${n}`);
    lines.push('', formatCssTokens(tokens, styleObj.shortName));
    return lines.join('\n');
  }

  function buildStyleCard(styleObj) {
    const meta = styleObj.previewMeta;
    let switchOn = true;
    let clicks = 0;

    const combineBtn = createEl('button', {
      className: 'btn btn--secondary btn--sm',
      attrs: { type: 'button', 'aria-pressed': 'false' },
      text: '+ Combinar'
    });
    combineBtn.addEventListener('click', () => toggleCombineStyle(styleObj.id));

    const testLiveBtn = createEl('button', {
      className: 'btn btn--primary btn--sm',
      attrs: { type: 'button', 'aria-pressed': 'false' },
      text: 'Testar na Página'
    });
    testLiveBtn.addEventListener('click', () => {
      const isCurrent = state.liveThemeSource &&
        state.liveThemeSource.type === 'single' &&
        state.liveThemeSource.styleId === styleObj.id;
      if (isCurrent) {
        restoreDefaultTheme();
      } else {
        applyLiveThemeToBody({ type: 'single', styleId: styleObj.id });
        showToast(`Tema aplicado na página: ${styleObj.shortName}`);
      }
    });

    const topRow = createEl('div', { className: 'style-card__top' }, [
      createEl('div', { className: 'style-card__title-group' }, [
        createEl('div', { className: 'style-card__title-row' }, [
          createEl('h3', { className: 'style-card__title', text: styleObj.name }),
          createEl('span', { className: 'category-badge', text: styleObj.category })
        ]),
        createEl('p', { className: 'style-card__subtitle', text: styleObj.subtitle })
      ]),
      createEl('div', { className: 'style-card__actions' }, [combineBtn, testLiveBtn])
    ]);

    // Color Picker
    const nativeColorInput = createEl('input', {
      className: 'color-native-input',
      attrs: {
        type: 'color',
        value: state.colorsByStyle[styleObj.id],
        'aria-label': `Color picker de ${styleObj.shortName}`
      }
    });

    const hexInput = createEl('input', {
      className: 'color-hex-input',
      attrs: {
        type: 'text',
        value: state.colorsByStyle[styleObj.id],
        maxlength: '7',
        'aria-label': `HEX de ${styleObj.shortName}`
      }
    });

    const quickSwatches = createEl('div', { className: 'swatch-quick-group' },
      QUICK_SWATCHES.map((hex) => {
        const sw = createEl('button', {
          className: 'swatch-quick-btn',
          attrs: { type: 'button', 'data-hex': hex, 'aria-label': `Cor ${hex}`, title: hex }
        });
        sw.addEventListener('click', () => updateStyleColor(styleObj.id, hex));
        return sw;
      })
    );

    const paletteDots = [
      createEl('span', { className: 'palette-dot', attrs: { title: '--bg' } }),
      createEl('span', { className: 'palette-dot', attrs: { title: '--surface' } }),
      createEl('span', { className: 'palette-dot', attrs: { title: '--border' } }),
      createEl('span', { className: 'palette-dot', attrs: { title: '--accent' } })
    ];

    nativeColorInput.addEventListener('input', (ev) => updateStyleColor(styleObj.id, ev.target.value));
    hexInput.addEventListener('change', (ev) => {
      const hex = normalizeHex(ev.target.value);
      if (hex) {
        updateStyleColor(styleObj.id, hex);
      } else {
        hexInput.value = state.colorsByStyle[styleObj.id];
        showToast('Digite um HEX válido (ex: #4F46E5).');
      }
    });

    const colorBar = createEl('div', { className: 'color-picker-bar' }, [
      createEl('div', { className: 'color-picker-controls' }, [
        createEl('span', { className: 'color-picker-label', text: 'COR' }),
        nativeColorInput,
        hexInput,
        quickSwatches
      ]),
      createEl('div', { className: 'palette-strip' }, paletteDots)
    ]);

    const cardHead = createEl('div', { className: 'style-card__head' }, [topRow, colorBar]);

    // Preview Stage
    const stage = createEl('div', {
      className: 'specimen-stage',
      attrs: { 'data-style': styleObj.id }
    });

    const badgeText = createEl('span', { text: meta.statusOn });
    const badgeEl = createEl('span', { className: 'specimen-badge' }, [
      createEl('span', { className: 'specimen-badge__dot', attrs: { 'aria-hidden': 'true' } }),
      badgeText
    ]);

    const metricNum = createEl('span', { className: 'specimen-metric-box__num', text: meta.metricOn });
    const metricDelta = createEl('span', { className: 'specimen-metric-box__delta', text: meta.deltaOn });
    const metricBox = createEl('div', { className: 'specimen-metric-box' }, [
      createEl('span', { className: 'specimen-metric-box__label', text: meta.metricLabel }),
      metricNum,
      metricDelta
    ]);

    const switchBtn = createEl('button', {
      className: 'specimen-switch',
      attrs: {
        type: 'button',
        role: 'switch',
        'aria-checked': 'true',
        'aria-label': `${meta.switchLabel} (${styleObj.shortName})`
      }
    }, [createEl('span', { className: 'specimen-switch__thumb', attrs: { 'aria-hidden': 'true' } })]);

    const sideTile = createEl('div', { className: 'specimen-side-tile' }, [
      createEl('div', { className: 'specimen-switch-row' }, [
        createEl('span', { text: meta.switchLabel }),
        switchBtn
      ]),
      createEl('span', { className: 'specimen-metric-box__label', text: 'HSL + color-mix()' })
    ]);

    const primaryBtn = createEl('button', {
      className: 'specimen-btn specimen-btn--primary',
      attrs: { type: 'button' },
      text: meta.primaryBtn
    });
    const secondaryBtn = createEl('button', {
      className: 'specimen-btn specimen-btn--secondary',
      attrs: { type: 'button' },
      text: meta.secondaryBtn
    });
    const feedbackEl = createEl('span', { className: 'specimen-feedback', text: styleObj.signature });

    switchBtn.addEventListener('click', () => {
      switchOn = !switchOn;
      switchBtn.setAttribute('aria-checked', switchOn ? 'true' : 'false');
      badgeText.textContent = switchOn ? meta.statusOn : meta.statusOff;
      metricNum.textContent = switchOn ? meta.metricOn : meta.metricOff;
      metricDelta.textContent = switchOn ? meta.deltaOn : meta.deltaOff;
      feedbackEl.textContent = `${meta.switchLabel}: ${switchOn ? 'ON' : 'OFF'}`;
    });

    primaryBtn.addEventListener('click', () => {
      clicks += 1;
      state.focusedStyleId = styleObj.id;
      feedbackEl.textContent = `${meta.primaryBtn} OK (#${clicks})`;
      renderExportDock();
    });

    secondaryBtn.addEventListener('click', () => {
      const t = generateTokensForStyle(styleObj, state.colorsByStyle[styleObj.id], state.globalTheme);
      feedbackEl.textContent = `Contrast ink: ${t.accentContrast}`;
    });

    const specimenUi = createEl('div', { className: 'specimen-ui' }, [
      createEl('div', { className: 'specimen-ui__head' }, [
        createEl('span', { className: 'specimen-ui__kicker', text: meta.kicker }),
        badgeEl
      ]),
      createEl('div', { className: 'specimen-ui__grid' }, [metricBox, sideTile]),
      createEl('div', { className: 'specimen-ui__foot' }, [
        createEl('div', { className: 'specimen-btn-row' }, [primaryBtn, secondaryBtn]),
        feedbackEl
      ])
    ]);
    stage.appendChild(specimenUi);

    // Tokens / Code Tab
    const cssPre = createEl('pre', { className: 'code-block' });
    const codeStackLabel = createEl('span', { className: 'mono-label' });
    const copyCssBtn = createEl('button', {
      className: 'btn btn--secondary btn--sm',
      attrs: { type: 'button' },
      text: 'Copiar Código'
    });
    copyCssBtn.addEventListener('click', () => {
      copyText(cssPre.textContent, `Tokens / Code de ${styleObj.shortName} copiados.`, copyCssBtn);
    });
    const cssPanel = createEl('div', { className: 'code-panel' }, [
      createEl('div', { className: 'code-panel__bar' }, [
        codeStackLabel,
        copyCssBtn
      ]),
      cssPre
    ]);

    // Prompt IA Tab
    const copyPromptBtn = createEl('button', {
      className: 'btn btn--secondary btn--sm',
      attrs: { type: 'button' },
      text: 'Copiar Prompt'
    });
    copyPromptBtn.addEventListener('click', () => {
      const tokens = generateTokensForStyle(styleObj, state.colorsByStyle[styleObj.id], state.globalTheme);
      copyText(buildSingleStylePrompt(styleObj, tokens), `Prompt IA de ${styleObj.shortName} copiado.`, copyPromptBtn);
    });
    const promptPanel = createEl('div', { className: 'prompt-panel' }, [
      createEl('div', { className: 'prompt-panel__bar' }, [
        createEl('span', { className: 'mono-label', text: 'AI Prompt Spec (EN)' }),
        copyPromptBtn
      ]),
      createEl('div', { className: 'prompt-panel__body' }, [
        createEl('div', null, [
          createEl('strong', { text: 'Positive Rules' }),
          createEl('ul', { className: 'prompt-list' },
            styleObj.structureRules.map((r) => createEl('li', { text: r }))
          )
        ]),
        createEl('div', null, [
          createEl('strong', { text: 'Negative Constraints' }),
          createEl('ul', { className: 'prompt-list' },
            styleObj.negativeConstraints.map((n) => createEl('li', { text: n }))
          )
        ])
      ])
    ]);

    // Tabs Setup
    const tabs = [
      { id: 'preview', label: 'Preview', content: stage },
      { id: 'css', label: 'Tokens / Code', content: cssPanel },
      { id: 'prompt', label: 'Prompt IA', content: promptPanel }
    ];
    const tabButtons = [];
    const tabPanels = [];
    const tabList = createEl('div', {
      className: 'card-tabs__list',
      attrs: { role: 'tablist', 'aria-label': `Abas de ${styleObj.shortName}` }
    });
    const panelsWrap = createEl('div');

    const activateTab = (targetIdx) => {
      tabButtons.forEach((b, i) => {
        const active = i === targetIdx;
        b.setAttribute('aria-selected', active ? 'true' : 'false');
        b.setAttribute('tabindex', active ? '0' : '-1');
      });
      tabPanels.forEach((p, i) => {
        if (i === targetIdx) p.removeAttribute('hidden');
        else p.setAttribute('hidden', '');
      });
    };

    tabs.forEach((t, idx) => {
      const tabId = `tab-${styleObj.id}-${t.id}`;
      const panelId = `panel-${styleObj.id}-${t.id}`;
      const btn = createEl('button', {
        className: 'tab-btn',
        attrs: {
          type: 'button',
          role: 'tab',
          id: tabId,
          'aria-selected': idx === 0 ? 'true' : 'false',
          'aria-controls': panelId,
          tabindex: idx === 0 ? '0' : '-1'
        },
        text: t.label
      });
      btn.addEventListener('click', () => activateTab(idx));
      btn.addEventListener('keydown', (ev) => {
        let next = null;
        if (ev.key === 'ArrowRight') next = (idx + 1) % tabs.length;
        else if (ev.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
        else if (ev.key === 'Home') next = 0;
        else if (ev.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          ev.preventDefault();
          activateTab(next);
          tabButtons[next].focus();
        }
      });
      tabButtons.push(btn);
      tabList.appendChild(btn);

      const panel = createEl('div', {
        className: 'tab-panel',
        attrs: { role: 'tabpanel', id: panelId, 'aria-labelledby': tabId }
      }, [t.content]);
      if (idx !== 0) panel.setAttribute('hidden', '');
      tabPanels.push(panel);
      panelsWrap.appendChild(panel);
    });

    const tabsBar = createEl('div', { className: 'card-tabs' }, [
      tabList,
      createEl('span', { className: 'card-tabs__sig', text: styleObj.signature })
    ]);

    const card = createEl('article', {
      className: 'style-card',
      attrs: { 'data-style-card': styleObj.id }
    }, [cardHead, tabsBar, panelsWrap]);

    const refresh = () => {
      const hex = state.colorsByStyle[styleObj.id];
      const tokens = generateTokensForStyle(styleObj, hex, state.globalTheme);
      const stackObj = getStackById(state.stylingStack);
      nativeColorInput.value = hex;
      hexInput.value = hex;
      paletteDots[0].style.backgroundColor = tokens.bg;
      paletteDots[1].style.backgroundColor = tokens.surface;
      paletteDots[2].style.backgroundColor = tokens.borderColor;
      paletteDots[3].style.backgroundColor = tokens.accent;
      applyTokensToElement(stage, tokens);
      codeStackLabel.textContent = `${stackObj.shortLabel} · ${styleObj.shortName}`;
      cssPre.textContent = formatCodeForStack(tokens, styleObj.shortName);
    };

    cardControllers.set(styleObj.id, { card, combineBtn, testLiveBtn, refresh });
    refresh();
    return card;
  }

  function updateStyleColor(styleId, rawColor) {
    const hex = normalizeHex(rawColor);
    if (!hex) return;
    state.colorsByStyle[styleId] = hex;
    state.focusedStyleId = styleId;
    safeSaveState();

    const ctrl = cardControllers.get(styleId);
    if (ctrl) ctrl.refresh();
    syncLiveThemeIfActive();
    renderExportDock();
    updatePreviewDrawerIfOpen();
  }

  function toggleCombineStyle(styleId) {
    const idx = state.combinedStyleIds.indexOf(styleId);
    const styleObj = getStyleById(styleId);
    if (idx !== -1) {
      state.combinedStyleIds.splice(idx, 1);
      showToast(`${styleObj.shortName} removido do Mixer.`);
    } else if (state.combinedStyleIds.length < 2) {
      state.combinedStyleIds.push(styleId);
      state.focusedStyleId = styleId;
      showToast(`${styleObj.shortName} ${state.combinedStyleIds.length === 1 ? 'definido como Estrutura' : 'definido como Cores'}.`);
    } else {
      state.combinedStyleIds[1] = styleId;
      showToast(`Cores alteradas para ${styleObj.shortName} (máx. 2 estilos).`);
    }

    safeSaveState();
    updateCardActionStates();
    syncLiveThemeIfActive();
    renderExportDock();
    updatePreviewDrawerIfOpen();
  }

  function swapCombinedStyles() {
    if (state.combinedStyleIds.length !== 2) return;
    state.combinedStyleIds = [state.combinedStyleIds[1], state.combinedStyleIds[0]];
    safeSaveState();
    updateCardActionStates();
    syncLiveThemeIfActive();
    renderExportDock();
    updatePreviewDrawerIfOpen();
    showToast('Estrutura e Cores invertidas.');
  }

  function updateCardActionStates() {
    dom.mixerCountBadge.textContent = `${state.combinedStyleIds.length}/2 no Mixer`;

    for (const styleObj of STYLES) {
      const ctrl = cardControllers.get(styleObj.id);
      if (!ctrl) continue;

      const slotIdx = state.combinedStyleIds.indexOf(styleObj.id);
      const isCombined = slotIdx !== -1;
      ctrl.card.classList.toggle('is-combined', isCombined);
      ctrl.combineBtn.setAttribute('aria-pressed', isCombined ? 'true' : 'false');
      ctrl.combineBtn.classList.toggle('btn--active', isCombined);

      if (!isCombined) ctrl.combineBtn.textContent = '+ Combinar';
      else if (state.combinedStyleIds.length === 2) ctrl.combineBtn.textContent = slotIdx === 0 ? '✓ Estrutura' : '✓ Cores';
      else ctrl.combineBtn.textContent = '✓ Combinado';

      const isLive = Boolean(
        state.liveThemeSource &&
        state.liveThemeSource.type === 'single' &&
        state.liveThemeSource.styleId === styleObj.id
      );
      ctrl.testLiveBtn.setAttribute('aria-pressed', isLive ? 'true' : 'false');
      ctrl.testLiveBtn.textContent = isLive ? '✓ Live na Página' : 'Testar na Página';
    }
  }

  function renderStyleGrid() {
    clearChildren(dom.styleGrid);
    cardControllers.clear();
    for (const styleObj of getFilteredStyles()) {
      dom.styleGrid.appendChild(buildStyleCard(styleObj));
    }
    updateCardActionStates();
  }

  /* ------------------------------------------------------------------------
     Parte 1: Typography & Font Pairing Lab
     ------------------------------------------------------------------------ */

  function syncMatchingPresetId() {
    const match = FONT_PAIRINGS.find((p) =>
      p.display === state.typography.display &&
      p.body === state.typography.body &&
      p.mono === state.typography.mono
    );
    state.typography.presetId = match ? match.id : null;
  }

  function applyTypographyToSpecimen() {
    const fonts = getActiveFontStacks();
    loadDynamicGoogleFonts([fonts.displayName, fonts.bodyName, fonts.monoName]);

    dom.typeSpecimenStage.style.setProperty('--preview-font-display', fonts.fontDisplay);
    dom.typeSpecimenStage.style.setProperty('--preview-font-body', fonts.fontBody);
    dom.typeSpecimenStage.style.setProperty('--preview-font-mono', fonts.fontMono);

    dom.typePreviewDisplay.classList.toggle('is-tight-tracking', state.typography.tightTracking);
    dom.typePreviewMetrics.classList.toggle('is-tabular-nums', state.typography.tabularNums);

    // Strictly assign user text via .textContent (never innerHTML)
    const rawTitle = state.typography.specimenTitle.trim();
    dom.typePreviewDisplay.textContent = rawTitle || 'TokenLab Design Architecture';
    dom.activeFontsBadge.textContent = `${fonts.displayName} + ${fonts.bodyName} + ${fonts.monoName}`;
  }

  function syncTypographyControlsUI() {
    dom.fontDisplaySelect.value = state.typography.display;
    dom.fontBodySelect.value = state.typography.body;
    dom.fontMonoSelect.value = state.typography.mono;
    dom.tightTrackingCheckbox.checked = state.typography.tightTracking;
    dom.tabularNumsCheckbox.checked = state.typography.tabularNums;
    dom.typeTesterInput.value = state.typography.specimenTitle;

    const presetButtons = dom.fontPresetsGrid.querySelectorAll('.font-preset-btn');
    presetButtons.forEach((btn) => {
      const active = btn.dataset.presetId === state.typography.presetId;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  function onTypographyChanged() {
    safeSaveState();
    syncTypographyControlsUI();
    applyTypographyToSpecimen();
    for (const ctrl of cardControllers.values()) {
      ctrl.refresh();
    }
    syncLiveThemeIfActive();
    renderExportDock();
    updatePreviewDrawerIfOpen();
  }

  function populateFontSelect(selectEl, options) {
    clearChildren(selectEl);
    for (const fontName of options) {
      selectEl.appendChild(createEl('option', {
        attrs: { value: fontName },
        text: fontName
      }));
    }
  }

  function renderTypographyLab() {
    clearChildren(dom.fontPresetsGrid);

    for (const preset of FONT_PAIRINGS) {
      const isSelected = state.typography.presetId === preset.id;
      const btn = createEl('button', {
        className: 'font-preset-btn',
        attrs: {
          type: 'button',
          'data-preset-id': preset.id,
          'aria-pressed': isSelected ? 'true' : 'false'
        }
      }, [
        createEl('span', { className: 'font-preset-btn__name', text: preset.name }),
        createEl('span', {
          className: 'font-preset-btn__pair',
          text: `${preset.display} / ${preset.body} / ${preset.mono}`
        })
      ]);

      btn.addEventListener('click', () => {
        state.typography.presetId = preset.id;
        state.typography.display = preset.display;
        state.typography.body = preset.body;
        state.typography.mono = preset.mono;
        state.typography.tightTracking = preset.tightTracking;
        onTypographyChanged();
        showToast(`Preset tipográfico aplicado: ${preset.display} + ${preset.body}`);
      });

      dom.fontPresetsGrid.appendChild(btn);
    }

    populateFontSelect(dom.fontDisplaySelect, DISPLAY_FONT_OPTIONS);
    populateFontSelect(dom.fontBodySelect, BODY_FONT_OPTIONS);
    populateFontSelect(dom.fontMonoSelect, MONO_FONT_OPTIONS);

    syncTypographyControlsUI();
    applyTypographyToSpecimen();
  }

  /* ------------------------------------------------------------------------
     Módulo 2: Motion & Physics Lab
     ------------------------------------------------------------------------ */

  function buildMotionDemo(tech) {
    const telemetry = createEl('span', { text: tech.spec });
    const box = createEl('div', { className: 'motion-demo-box' });

    if (tech.id === 'magnetic-spring') {
      const magInner = createEl('span', { className: 'magnetic-btn__inner', text: 'Magnetic Action' });
      const magBtn = createEl('button', { className: 'magnetic-btn', attrs: { type: 'button' } }, [magInner]);
      const arena = createEl('div', { className: 'magnetic-arena' }, [magBtn]);

      const setPull = (dx, dy) => {
        magBtn.classList.add('is-tracking');
        magBtn.style.setProperty('--mag-x', `${dx.toFixed(1)}px`);
        magBtn.style.setProperty('--mag-y', `${dy.toFixed(1)}px`);
        magBtn.style.setProperty('--mag-tx', `${(dx * 0.35).toFixed(1)}px`);
        magBtn.style.setProperty('--mag-ty', `${(dy * 0.35).toFixed(1)}px`);
        telemetry.textContent = `Pull: (${dx.toFixed(0)}px, ${dy.toFixed(0)}px)`;
      };

      const resetPull = () => {
        magBtn.classList.remove('is-tracking');
        magBtn.style.setProperty('--mag-x', '0px');
        magBtn.style.setProperty('--mag-y', '0px');
        magBtn.style.setProperty('--mag-tx', '0px');
        magBtn.style.setProperty('--mag-ty', '0px');
        telemetry.textContent = 'Spring rest: (0px, 0px)';
      };

      arena.addEventListener('pointermove', (ev) => {
        if (prefersReducedMotion()) return;
        const rect = arena.getBoundingClientRect();
        const dx = clamp((ev.clientX - (rect.left + rect.width / 2)) * 0.32, -18, 18);
        const dy = clamp((ev.clientY - (rect.top + rect.height / 2)) * 0.32, -16, 16);
        setPull(dx, dy);
      });
      arena.addEventListener('pointerleave', resetPull);

      const pulseBtn = createEl('button', {
        className: 'btn btn--secondary btn--sm',
        attrs: { type: 'button' },
        text: 'Simular Pulso'
      });
      pulseBtn.addEventListener('click', () => {
        if (prefersReducedMotion()) return;
        setPull(14, -8);
        window.setTimeout(resetPull, 180);
      });

      box.appendChild(arena);
      box.appendChild(createEl('div', { className: 'motion-demo-foot' }, [telemetry, pulseBtn]));
    } else if (tech.id === 'mouse-parallax') {
      const glare = createEl('div', { className: 'parallax-glare', attrs: { 'aria-hidden': 'true' } });
      const card = createEl('div', { className: 'parallax-card' }, [
        glare,
        createEl('div', { className: 'parallax-layer-mid' }, [
          createEl('strong', { text: '3D Spatial Specular Card' }),
          createEl('span', { text: 'Inclinação 3D + reflexo especular ao mover o cursor' })
        ]),
        createEl('div', { className: 'parallax-layer-front', text: 'Z: +34px · Specular Glare' })
      ]);
      const arena = createEl('div', { className: 'parallax-arena' }, [card]);

      const setTilt = (rx, ry, gx, gy, op) => {
        card.classList.add('is-tilting');
        card.style.setProperty('--rx', `${rx.toFixed(1)}deg`);
        card.style.setProperty('--ry', `${ry.toFixed(1)}deg`);
        card.style.setProperty('--glare-x', `${gx.toFixed(0)}%`);
        card.style.setProperty('--glare-y', `${gy.toFixed(0)}%`);
        card.style.setProperty('--glare-opacity', String(op));
        telemetry.textContent = `rotateX(${rx.toFixed(1)}deg) rotateY(${ry.toFixed(1)}deg)`;
      };

      const resetTilt = () => {
        card.classList.remove('is-tilting');
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
        card.style.setProperty('--glare-opacity', '0');
        telemetry.textContent = 'rotateX(0deg) rotateY(0deg)';
      };

      arena.addEventListener('pointermove', (ev) => {
        if (prefersReducedMotion()) return;
        const rect = arena.getBoundingClientRect();
        const nx = (ev.clientX - rect.left) / rect.width;
        const ny = (ev.clientY - rect.top) / rect.height;
        setTilt(-(ny - 0.5) * 22, (nx - 0.5) * 22, nx * 100, ny * 100, 0.85);
      });
      arena.addEventListener('pointerleave', resetTilt);

      const tiltBtn = createEl('button', {
        className: 'btn btn--secondary btn--sm',
        attrs: { type: 'button' },
        text: 'Simular Inclinação'
      });
      let tilted = false;
      tiltBtn.addEventListener('click', () => {
        if (prefersReducedMotion()) return;
        tilted = !tilted;
        if (tilted) setTilt(9, -11, 25, 25, 0.85);
        else resetTilt();
      });

      box.appendChild(arena);
      box.appendChild(createEl('div', { className: 'motion-demo-foot' }, [telemetry, tiltBtn]));
    } else if (tech.id === 'scroll-stagger') {
      const viewport = createEl('div', {
        className: 'stagger-viewport',
        attrs: { tabindex: '0', 'aria-label': 'Viewport de revelação escalonada' }
      });
      const items = [0, 1, 2, 3, 4].map((idx) => createEl('div', {
        className: `stagger-item is-revealed stagger-delay-${idx}`
      }, [
        createEl('strong', { text: `Bloco 0${idx + 1} · Stagger ${idx * 55}ms` }),
        createEl('span', { text: 'cubic-bezier(0.22, 1, 0.36, 1)' })
      ]));
      items.forEach((it) => viewport.appendChild(it));

      const replayBtn = createEl('button', {
        className: 'btn btn--secondary btn--sm',
        attrs: { type: 'button' },
        text: 'Disparar Cascata'
      });
      replayBtn.addEventListener('click', () => {
        if (prefersReducedMotion()) return;
        items.forEach((it) => it.classList.remove('is-revealed'));
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            items.forEach((it) => it.classList.add('is-revealed'));
          });
        });
        const atBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 8;
        viewport.scrollTo({ top: atBottom ? 0 : viewport.scrollHeight, behavior: 'smooth' });
        telemetry.textContent = 'Stagger: 0ms → 220ms cascade';
      });

      box.appendChild(viewport);
      box.appendChild(createEl('div', { className: 'motion-demo-foot' }, [telemetry, replayBtn]));
    } else {
      const layouts = ['split', 'focus', 'stack'];
      const panes = createEl('div', {
        className: 'snappy-panes',
        attrs: { 'data-layout': 'split' }
      }, [
        createEl('div', { className: 'snappy-pane' }, [
          createEl('strong', { text: 'TTY // BUFFER' }),
          createEl('span', { text: '0ms steps(1)' })
        ]),
        createEl('div', { className: 'snappy-pane' }, [
          createEl('strong', { text: 'AST10 // GUARD' }),
          createEl('span', { text: 'instant swap' })
        ])
      ]);
      const btns = [];
      const toolbar = createEl('div', { className: 'snappy-toolbar' });
      for (const l of layouts) {
        const b = createEl('button', {
          className: 'snappy-tab',
          attrs: { type: 'button', 'aria-pressed': l === 'split' ? 'true' : 'false' },
          text: l.toUpperCase()
        });
        b.addEventListener('click', () => {
          panes.setAttribute('data-layout', l);
          btns.forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
          telemetry.textContent = `Layout: ${l} (0ms steps)`;
        });
        btns.push(b);
        toolbar.appendChild(b);
      }
      box.appendChild(toolbar);
      box.appendChild(panes);
      box.appendChild(createEl('div', { className: 'motion-demo-foot' }, [
        telemetry,
        createEl('span', { text: 'Zero easing' })
      ]));
    }

    return box;
  }

  function renderMotionLab() {
    clearChildren(dom.motionGrid);
    for (const tech of MOTION_TECHNIQUES) {
      const selected = state.motionId === tech.id;
      const radioId = `motion-radio-${tech.id}`;
      const radio = createEl('input', {
        className: 'motion-radio-input',
        attrs: { type: 'radio', name: 'motion-tech', id: radioId, value: tech.id }
      });
      radio.checked = selected;
      radio.addEventListener('change', () => {
        if (!radio.checked) return;
        state.motionId = tech.id;
        safeSaveState();
        updateMotionSelectionUI();
        renderExportDock();
        updatePreviewDrawerIfOpen();
        showToast(`Motion selecionado: ${tech.shortName}`);
      });

      const card = createEl('div', {
        className: `motion-card${selected ? ' is-selected' : ''}`,
        attrs: { 'data-motion': tech.id }
      }, [
        createEl('div', { className: 'motion-card__head' }, [
          createEl('label', { className: 'motion-radio-label', attrs: { for: radioId } }, [
            radio,
            createEl('div', null, [
              createEl('div', { className: 'motion-card__title', text: tech.name }),
              createEl('p', { className: 'motion-card__desc', text: tech.description })
            ])
          ]),
          createEl('span', { className: 'category-badge', text: selected ? 'Ativo' : 'Selecionar' })
        ]),
        createEl('code', { className: 'motion-spec-pill', text: tech.spec }),
        buildMotionDemo(tech)
      ]);
      dom.motionGrid.appendChild(card);
    }
  }

  function updateMotionSelectionUI() {
    for (const tech of MOTION_TECHNIQUES) {
      const card = dom.motionGrid.querySelector(`[data-motion="${tech.id}"]`);
      if (!card) continue;
      const active = state.motionId === tech.id;
      card.classList.toggle('is-selected', active);
      const pill = card.querySelector('.category-badge');
      if (pill) pill.textContent = active ? 'Ativo' : 'Selecionar';
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = active;
    }
  }

  /* ------------------------------------------------------------------------
     Módulo 3: Modern Front-End Libraries (@latest)
     ------------------------------------------------------------------------ */

  function renderLibrariesSection() {
    clearChildren(dom.libsGrid);

    for (const cat of LIBRARY_CATEGORIES) {
      const list = createEl('div', { className: 'lib-list' });
      for (const item of cat.items) {
        const checked = state.selectedLibIds.includes(item.id);
        const cb = createEl('input', {
          className: 'lib-checkbox',
          attrs: { type: 'checkbox', value: item.id }
        });
        cb.checked = checked;

        const row = createEl('label', { className: `lib-item${checked ? ' is-checked' : ''}` }, [
          cb,
          createEl('div', { className: 'lib-item__body' }, [
            createEl('div', { className: 'lib-item__top' }, [
              createEl('span', { className: 'lib-item__name', text: item.name }),
              createEl('code', { className: 'lib-item__pkg', text: item.pkg })
            ]),
            createEl('span', { className: 'lib-item__desc', text: item.desc })
          ])
        ]);

        cb.addEventListener('change', () => {
          if (cb.checked) {
            if (!state.selectedLibIds.includes(item.id)) state.selectedLibIds.push(item.id);
          } else {
            state.selectedLibIds = state.selectedLibIds.filter((id) => id !== item.id);
          }
          row.classList.toggle('is-checked', cb.checked);
          safeSaveState();
          updateLibrariesCounter();
          renderExportDock();
          updatePreviewDrawerIfOpen();
        });

        list.appendChild(row);
      }

      const catCard = createEl('div', { className: 'lib-category-card' }, [
        createEl('h3', { className: 'lib-category-card__title' }, [
          createEl('span', { text: cat.title }),
          createEl('span', { className: 'category-badge', text: '@latest' })
        ]),
        list
      ]);
      dom.libsGrid.appendChild(catCard);
    }

    updateLibrariesCounter();
  }

  function updateLibrariesCounter() {
    dom.libsCounter.textContent = `${state.selectedLibIds.length} selecionadas`;
  }

  function getSelectedLibraries() {
    const selected = [];
    for (const cat of LIBRARY_CATEGORIES) {
      for (const item of cat.items) {
        if (state.selectedLibIds.includes(item.id)) {
          selected.push({ ...item, category: cat.title });
        }
      }
    }
    return selected;
  }

  /* ------------------------------------------------------------------------
     Módulo 4: Community Skills + OWASP AST10
     ------------------------------------------------------------------------ */

  function renderCommunitySkills() {
    clearChildren(dom.communitySkillsGrid);
    for (const sk of COMMUNITY_SKILLS) {
      const copyBtn = createEl('button', {
        className: 'btn btn--secondary btn--sm',
        attrs: { type: 'button' },
        text: 'Copiar Referência'
      });
      copyBtn.addEventListener('click', () => {
        copyText(sk.ref, `Referência copiada: ${sk.ref}`, copyBtn);
      });

      const card = createEl('div', { className: 'community-card' }, [
        createEl('div', { className: 'community-card__top' }, [
          createEl('code', { className: 'community-card__ref', text: sk.ref }),
          createEl('span', { className: 'category-badge', text: sk.badge })
        ]),
        createEl('p', { className: 'community-card__desc', text: sk.description }),
        createEl('div', null, [copyBtn])
      ]);
      dom.communitySkillsGrid.appendChild(card);
    }
  }

  function renderSecurityCheckboxes() {
    clearChildren(dom.securityGrid);
    for (const sec of AST10_SKILLS) {
      const checked = state.activeSecurityIds.includes(sec.id);
      const cb = createEl('input', {
        className: 'security-checkbox',
        attrs: { type: 'checkbox', value: sec.id }
      });
      cb.checked = checked;

      const card = createEl('label', { className: `security-card${checked ? ' is-checked' : ''}` }, [
        cb,
        createEl('div', { className: 'security-card__content' }, [
          createEl('span', { className: 'security-card__badge', text: sec.badge }),
          createEl('span', { className: 'security-card__title', text: sec.title }),
          createEl('span', { className: 'security-card__desc', text: sec.description })
        ])
      ]);

      cb.addEventListener('change', () => {
        if (cb.checked) {
          if (!state.activeSecurityIds.includes(sec.id)) state.activeSecurityIds.push(sec.id);
        } else {
          state.activeSecurityIds = state.activeSecurityIds.filter((id) => id !== sec.id);
        }
        card.classList.toggle('is-checked', cb.checked);
        safeSaveState();
        updateSecurityCounter();
        renderExportDock();
        updatePreviewDrawerIfOpen();
      });

      dom.securityGrid.appendChild(card);
    }
    updateSecurityCounter();
  }

  function updateSecurityCounter() {
    dom.securityCounter.textContent = `${state.activeSecurityIds.length}/${AST10_SKILLS.length} diretrizes ativas`;
  }

  /* ------------------------------------------------------------------------
     Unified Prompt & SKILL.md Export (with MANDATORY @latest Policy)
     ------------------------------------------------------------------------ */

  function getActiveDesignConfig() {
    if (state.combinedStyleIds.length === 2) {
      const base = getStyleById(state.combinedStyleIds[0]);
      const skin = getStyleById(state.combinedStyleIds[1]);
      return {
        mode: 'combo',
        base,
        skin,
        tokens: mergeComboTokens(base, skin),
        label: `${base.shortName} (Estrutura) + ${skin.shortName} (Cores)`
      };
    }

    const single = state.combinedStyleIds.length === 1
      ? getStyleById(state.combinedStyleIds[0])
      : getStyleById(state.focusedStyleId);
    return {
      mode: 'single',
      base: single,
      skin: single,
      tokens: generateTokensForStyle(single, state.colorsByStyle[single.id], state.globalTheme),
      label: single.name
    };
  }

  function getStackArchitectureDirectives() {
    if (state.stylingStack === 'vanilla') {
      return [
        '- **Selected Styling Stack:** `CSS Puro (Vanilla)`',
        '- Use modern native CSS exclusively: CSS Custom Properties (`:root`), CSS Grid/Flexbox, `color-mix()`, and native CSS nesting.',
        '- STRICTLY FORBIDDEN: Do NOT install or use Tailwind CSS, Bootstrap, Sass, or external CSS-in-JS runtime libraries.'
      ];
    }
    if (state.stylingStack === 'tailwind') {
      return [
        '- **Selected Styling Stack:** `Tailwind CSS (@latest)`',
        '- Install `tailwindcss@latest` (v4+ CSS-first architecture) and configure tokens inside `@import "tailwindcss";` + `@theme { ... }`.',
        '- Style all components using Tailwind utility classes referencing the `@theme` tokens.',
        '- STRICTLY FORBIDDEN: NEVER use legacy Tailwind v3 `tailwind.config.js` / `module.exports` JavaScript config syntax.'
      ];
    }
    return [
      '- **Selected Styling Stack:** `Híbrido (CSS Vars + Tailwind)`',
      '- Declare semantic Design Tokens in `:root` (supporting seamless Light/Dark Mode switching) and map them directly into Tailwind v4+ via `@import "tailwindcss";` and `@theme inline { ... }`.',
      '- Combine Tailwind `@latest` utility classes for layout/spacing with semantic CSS variables for theming and live palette switches.'
    ];
  }

  function buildFullPrompt() {
    const design = getActiveDesignConfig();
    const motion = getMotionById(state.motionId);
    const libs = getSelectedLibraries();
    const security = AST10_SKILLS.filter((s) => state.activeSecurityIds.includes(s.id));
    const fonts = getActiveFontStacks();
    const googleFontsUrl = buildGoogleFontsUrl([fonts.displayName, fonts.bodyName, fonts.monoName]);

    const lines = [
      'ROLE: Senior Front-End Architect, Design Systems Engineer & Agentic Security Specialist.',
      'TASK: Build a production-grade UI strictly following the Design Tokens, Typography, Styling Stack, Motion Physics, @latest Libraries, and OWASP AST10 guardrails below.',
      '',
      '====================================================================',
      `1. DESIGN SYSTEM (${design.label}) — ${state.globalTheme.toUpperCase()} MODE`,
      '====================================================================',
      `Primary Accent: ${design.tokens.accent} (${design.tokens.accentRgb}) | Contrast Text: ${design.tokens.accentContrast}`,
      ''
    ];

    if (design.mode === 'combo') {
      lines.push(`HYBRID MIXER: Structure from "${design.base.name}" + Colors, Surfaces & Shadows from "${design.skin.name}".`);
      lines.push('CONFLICT RULE: Structural Base governs layout, radius, and borders; Visual Skin governs palette, surfaces, and elevation.');
      lines.push('');
    }

    lines.push('POSITIVE RULES:');
    design.base.structureRules.forEach((r) => lines.push(`- ${r}`));
    lines.push('', 'NEGATIVE CONSTRAINTS:');
    design.base.negativeConstraints.forEach((n) => lines.push(`- ${n}`));
    lines.push('', formatCodeForStack(design.tokens, design.label), '');

    lines.push('## Typography & Font System');
    lines.push(`- Display Font: ${fonts.displayName} (--font-display: ${fonts.fontDisplay})`);
    lines.push(`- Body / UI Font: ${fonts.bodyName} (--font-body: ${fonts.fontBody})`);
    lines.push(`- Monospace / Numerals Font: ${fonts.monoName} (--font-mono: ${fonts.fontMono})`);
    lines.push(`- Google Fonts URL: ${googleFontsUrl}`);
    lines.push(`- Display Tracking: ${state.typography.tightTracking ? 'Apply letter-spacing: -0.035em on display headings (H1/H2).' : 'Use balanced default display letter-spacing (-0.015em).'}`);
    lines.push(`- Numerals: ${state.typography.tabularNums ? 'Enforce font-variant-numeric: tabular-nums on KPIs, tables, and counters.' : 'Standard proportional numerals.'}`, '');

    lines.push('## Styling Stack & Architecture Rules');
    getStackArchitectureDirectives().forEach((d) => lines.push(d));
    lines.push('');

    lines.push('====================================================================');
    lines.push(`2. MOTION & PHYSICS: ${motion.name}`);
    lines.push('====================================================================');
    lines.push(`- Spec: ${motion.spec}`);
    lines.push(`- Directive: ${motion.promptDirective}`);
    lines.push('- Always respect @media (prefers-reduced-motion: reduce).', '');

    lines.push('====================================================================');
    lines.push('3. SELECTED FRONT-END STACK & MANDATORY VERSION POLICY (@latest)');
    lines.push('====================================================================');
    lines.push(`> ${MANDATORY_VERSION_POLICY}`, '');
    if (libs.length === 0) {
      lines.push('- No external libraries selected; prefer native Web Platform APIs.');
    } else {
      libs.forEach((lib) => lines.push(`- [${lib.category}] ${lib.name} (${lib.pkg}): ${lib.desc}`));
    }

    lines.push('', '====================================================================');
    lines.push('4. OWASP AGENTIC SKILLS TOP 10 (AST10) & ACCESSIBILITY');
    lines.push('====================================================================');
    if (security.length === 0) {
      lines.push('- Apply baseline OWASP safe DOM and WCAG 2.2 AA practices.');
    } else {
      security.forEach((sec) => lines.push(`- ${sec.promptRule}`));
    }

    return lines.join('\n');
  }

  function buildSkillMarkdown() {
    const design = getActiveDesignConfig();
    const motion = getMotionById(state.motionId);
    const libs = getSelectedLibraries();
    const security = AST10_SKILLS.filter((s) => state.activeSecurityIds.includes(s.id));
    const fonts = getActiveFontStacks();
    const googleFontsUrl = buildGoogleFontsUrl([fonts.displayName, fonts.bodyName, fonts.monoName]);

    const lines = [
      '---',
      'name: tokenlab-design-motion-ast10',
      'description: Complete front-end engineering skill generated by TokenLab with dynamic HSL/color-mix() tokens, Typography & Font Pairing, Styling Stack rules, motion physics, @latest libraries policy, and OWASP AST10 security rules.',
      '---',
      '',
      '# TokenLab Agent Skill',
      '',
      '## MANDATORY VERSION POLICY (`@latest`)',
      '',
      `> ${MANDATORY_VERSION_POLICY}`,
      '',
      '## 1. Visual Design System & Generated Code',
      `- **Active System:** ${design.label} (${state.globalTheme} mode)`,
      `- **Primary Color:** \`${design.tokens.accent}\` (contrast ink: \`${design.tokens.accentContrast}\`)`,
      '',
      ...design.base.structureRules.map((r) => `- ${r}`),
      ...design.base.negativeConstraints.map((n) => `- FORBIDDEN: ${n}`),
      '',
      '```css',
      formatCodeForStack(design.tokens, design.label),
      '```',
      '',
      '## Typography & Font System',
      `- **Display Font:** \`${fonts.displayName}\` (\`--font-display: ${fonts.fontDisplay}\`)`,
      `- **Body / UI Font:** \`${fonts.bodyName}\` (\`--font-body: ${fonts.fontBody}\`)`,
      `- **Monospace / Numerals Font:** \`${fonts.monoName}\` (\`--font-mono: ${fonts.fontMono}\`)`,
      `- **Google Fonts URL:** ${googleFontsUrl}`,
      `- **Display Tracking Rule:** ${state.typography.tightTracking ? 'Apply `letter-spacing: -0.035em` on display headings (`h1`, `h2`).' : 'Keep standard balanced heading tracking.'}`,
      `- **Tabular Numerals Rule:** ${state.typography.tabularNums ? 'Apply `font-variant-numeric: tabular-nums` on KPIs, counters, and tables.' : 'Default proportional numerals.'}`,
      '',
      '## Styling Stack & Architecture Rules',
      ...getStackArchitectureDirectives(),
      '',
      '## 2. Motion & Physics Technique',
      `- **Selected:** ${motion.name} (\`${motion.spec}\`)`,
      `- **Directive:** ${motion.promptDirective}`,
      '',
      '## 3. Selected Libraries (Always `@latest`)',
      ...(libs.length > 0
        ? libs.map((l) => `- **${l.name}** (\`${l.pkg}\`) — ${l.category}: ${l.desc}`)
        : ['- Native HTML5/CSS3/Web Platform APIs (zero runtime dependencies).']),
      '',
      '## 4. OWASP Agentic Skills Top 10 (AST10) & Accessibility',
      ''
    ];

    if (security.length === 0) {
      lines.push('_No AST10 rules selected._');
    } else {
      for (const sec of security) {
        lines.push(`### [${sec.badge}] ${sec.title}`);
        sec.skillRules.forEach((r) => lines.push(`- ${r}`));
        lines.push('');
      }
    }

    return lines.join('\n');
  }

  function downloadSkillMd() {
    const content = buildSkillMarkdown();
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SKILL.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('Arquivo SKILL.md baixado com Typography, Styling Stack, @latest e AST10.');
  }

  function updatePreviewDrawerIfOpen() {
    if (state.previewDrawerOpen) {
      dom.exportPreviewCode.textContent = buildSkillMarkdown();
    }
  }

  /* ------------------------------------------------------------------------
     Retractable Floating Dock ("Export Studio") + Styling Stack Selector
     ------------------------------------------------------------------------ */

  function syncStylingStackUI() {
    const btns = dom.stylingStackGroup.querySelectorAll('.segmented-btn');
    btns.forEach((btn) => {
      const active = btn.dataset.stack === state.stylingStack;
      btn.setAttribute('aria-checked', active ? 'true' : 'false');
    });
  }

  function applyDockMinimizedUI() {
    dom.exportDock.classList.toggle('is-minimized', state.dockMinimized);
    dom.dockToggleBtn.setAttribute('aria-expanded', state.dockMinimized ? 'false' : 'true');
    dom.dockToggleBtn.textContent = state.dockMinimized ? 'Expandir ▴' : 'Minimizar ▾';
    if (state.dockMinimized) {
      dom.dockQuickCopyBtn.removeAttribute('hidden');
    } else {
      dom.dockQuickCopyBtn.setAttribute('hidden', '');
    }
  }

  function renderExportDock() {
    const design = getActiveDesignConfig();
    const motion = getMotionById(state.motionId);
    const stackObj = getStackById(state.stylingStack);
    const fonts = getActiveFontStacks();

    const styleSummary = state.combinedStyleIds.length === 2
      ? `${design.base.shortName} + ${design.skin.shortName}`
      : design.base.shortName;

    dom.dockCompactSummary.textContent =
      `Stack: ${stackObj.shortLabel} · Style: ${styleSummary} · Font: ${fonts.displayName} + ${fonts.bodyName}`;

    clearChildren(dom.dockPillars);

    const dot = createEl('span', { className: 'dock-pill__dot', attrs: { 'aria-hidden': 'true' } });
    dot.style.backgroundColor = design.tokens.accent;
    dom.dockPillars.appendChild(createEl('span', { className: 'dock-pill' }, [
      dot,
      createEl('span', { text: `${design.tokens.accent} (${state.globalTheme})` })
    ]));

    dom.dockPillars.appendChild(createEl('span', {
      className: 'dock-pill',
      text: `Stack: ${stackObj.shortLabel}`
    }));

    if (state.combinedStyleIds.length === 2) {
      dom.dockPillars.appendChild(createEl('span', {
        className: 'dock-pill',
        text: `Style: ${design.base.shortName} + ${design.skin.shortName}`
      }));
      const swapBtn = createEl('button', {
        className: 'btn btn--secondary btn--sm',
        attrs: { type: 'button', title: 'Inverter Estrutura e Cores' },
        text: '⇄ Inverter'
      });
      swapBtn.addEventListener('click', swapCombinedStyles);
      dom.dockPillars.appendChild(swapBtn);

      dom.dockTestComboBtn.removeAttribute('hidden');
      dom.dockClearComboBtn.removeAttribute('hidden');
    } else {
      dom.dockPillars.appendChild(createEl('span', {
        className: 'dock-pill',
        text: `Style: ${design.base.shortName}`
      }));
      dom.dockTestComboBtn.setAttribute('hidden', '');
      if (state.combinedStyleIds.length === 1) dom.dockClearComboBtn.removeAttribute('hidden');
      else dom.dockClearComboBtn.setAttribute('hidden', '');
    }

    dom.dockPillars.appendChild(createEl('span', {
      className: 'dock-pill',
      text: `Font: ${fonts.displayName} + ${fonts.bodyName}`
    }));

    dom.dockPillars.appendChild(createEl('span', {
      className: 'dock-pill',
      text: `Motion: ${motion.shortName}`
    }));

    dom.dockPillars.appendChild(createEl('span', {
      className: 'dock-pill',
      text: `Libs: ${state.selectedLibIds.length} · AST10: ${state.activeSecurityIds.length}/${AST10_SKILLS.length}`
    }));

    syncStylingStackUI();
    applyDockMinimizedUI();
  }

  /* ------------------------------------------------------------------------
     Init & Event Bindings
     ------------------------------------------------------------------------ */

  function cacheDom() {
    dom.liveThemeBar = document.getElementById('live-theme-bar');
    dom.liveThemeLabel = document.getElementById('live-theme-label');
    dom.restoreDefaultThemeBtn = document.getElementById('restore-default-theme-btn');
    dom.globalThemeToggle = document.getElementById('global-theme-toggle');
    dom.globalThemeText = document.getElementById('global-theme-text');
    dom.mixerCountBadge = document.getElementById('mixer-count-badge');
    dom.categoryFilters = document.getElementById('category-filters');
    dom.filterStatus = document.getElementById('filter-status');
    dom.styleGrid = document.getElementById('style-grid');

    dom.fontPresetsGrid = document.getElementById('font-presets-grid');
    dom.fontDisplaySelect = document.getElementById('font-display-select');
    dom.fontBodySelect = document.getElementById('font-body-select');
    dom.fontMonoSelect = document.getElementById('font-mono-select');
    dom.tightTrackingCheckbox = document.getElementById('tight-tracking-checkbox');
    dom.tabularNumsCheckbox = document.getElementById('tabular-nums-checkbox');
    dom.typeTesterInput = document.getElementById('type-tester-input');
    dom.typeSpecimenStage = document.getElementById('type-specimen-stage');
    dom.typePreviewDisplay = document.getElementById('type-preview-display');
    dom.typePreviewMetrics = document.getElementById('type-preview-metrics');
    dom.activeFontsBadge = document.getElementById('active-fonts-badge');
    dom.copyGoogleFontsBtn = document.getElementById('copy-google-fonts-btn');

    dom.motionGrid = document.getElementById('motion-grid');
    dom.libsGrid = document.getElementById('libs-grid');
    dom.libsCounter = document.getElementById('libs-counter');
    dom.communitySkillsGrid = document.getElementById('community-skills-grid');
    dom.securityGrid = document.getElementById('security-grid');
    dom.securityCounter = document.getElementById('security-counter');
    dom.togglePreviewBtn = document.getElementById('toggle-preview-btn');
    dom.exportPreviewDrawer = document.getElementById('export-preview-drawer');
    dom.copyPreviewSkillBtn = document.getElementById('copy-preview-skill-btn');
    dom.exportPreviewCode = document.getElementById('export-preview-code');
    dom.exportDock = document.getElementById('export-dock');
    dom.stylingStackGroup = document.getElementById('styling-stack-group');
    dom.dockCompactSummary = document.getElementById('dock-compact-summary');
    dom.dockQuickCopyBtn = document.getElementById('dock-quick-copy-btn');
    dom.dockToggleBtn = document.getElementById('dock-toggle-btn');
    dom.dockPillars = document.getElementById('dock-pillars');
    dom.dockTestComboBtn = document.getElementById('dock-test-combo-btn');
    dom.dockClearComboBtn = document.getElementById('dock-clear-combo-btn');
    dom.dockCopyPromptBtn = document.getElementById('dock-copy-prompt-btn');
    dom.dockDownloadSkillBtn = document.getElementById('dock-download-skill-btn');
    dom.toastRegion = document.getElementById('toast-region');
  }

  function bindEvents() {
    dom.globalThemeToggle.addEventListener('click', () => {
      const next = state.globalTheme === 'light' ? 'dark' : 'light';
      applyGlobalTheme(next);
      safeSaveState();
      showToast(`Tema global: ${next === 'dark' ? 'Dark Mode' : 'Light Mode'}`);
    });

    dom.restoreDefaultThemeBtn.addEventListener('click', restoreDefaultTheme);

    document.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && state.liveThemeSource) {
        restoreDefaultTheme();
      }
    });

    // Font Pairing Lab bindings
    dom.fontDisplaySelect.addEventListener('change', (ev) => {
      if (DISPLAY_FONT_OPTIONS.includes(ev.target.value)) {
        state.typography.display = ev.target.value;
        syncMatchingPresetId();
        onTypographyChanged();
      }
    });

    dom.fontBodySelect.addEventListener('change', (ev) => {
      if (BODY_FONT_OPTIONS.includes(ev.target.value)) {
        state.typography.body = ev.target.value;
        syncMatchingPresetId();
        onTypographyChanged();
      }
    });

    dom.fontMonoSelect.addEventListener('change', (ev) => {
      if (MONO_FONT_OPTIONS.includes(ev.target.value)) {
        state.typography.mono = ev.target.value;
        syncMatchingPresetId();
        onTypographyChanged();
      }
    });

    dom.tightTrackingCheckbox.addEventListener('change', (ev) => {
      state.typography.tightTracking = Boolean(ev.target.checked);
      onTypographyChanged();
    });

    dom.tabularNumsCheckbox.addEventListener('change', (ev) => {
      state.typography.tabularNums = Boolean(ev.target.checked);
      onTypographyChanged();
    });

    dom.typeTesterInput.addEventListener('input', (ev) => {
      state.typography.specimenTitle = ev.target.value.slice(0, 80);
      safeSaveState();
      // Strictly set text via .textContent
      const cleanTitle = state.typography.specimenTitle.trim();
      dom.typePreviewDisplay.textContent = cleanTitle || 'TokenLab Design Architecture';
    });

    dom.copyGoogleFontsBtn.addEventListener('click', () => {
      const linkTag = buildGoogleFontsLinkTag([
        state.typography.display,
        state.typography.body,
        state.typography.mono
      ]);
      copyText(linkTag, 'Tag <link> Google Fonts copiada.', dom.copyGoogleFontsBtn);
    });

    // Styling Stack segmented control
    dom.stylingStackGroup.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.segmented-btn');
      if (!btn) return;
      const nextStack = btn.dataset.stack;
      if (!STACK_IDS.includes(nextStack) || state.stylingStack === nextStack) return;
      state.stylingStack = nextStack;
      safeSaveState();
      for (const ctrl of cardControllers.values()) {
        ctrl.refresh();
      }
      renderExportDock();
      updatePreviewDrawerIfOpen();
      showToast(`Styling Stack: ${getStackById(nextStack).label}`);
    });

    dom.togglePreviewBtn.addEventListener('click', () => {
      state.previewDrawerOpen = !state.previewDrawerOpen;
      dom.togglePreviewBtn.setAttribute('aria-expanded', state.previewDrawerOpen ? 'true' : 'false');
      if (state.previewDrawerOpen) {
        dom.exportPreviewDrawer.removeAttribute('hidden');
        updatePreviewDrawerIfOpen();
      } else {
        dom.exportPreviewDrawer.setAttribute('hidden', '');
      }
    });

    dom.copyPreviewSkillBtn.addEventListener('click', () => {
      copyText(buildSkillMarkdown(), 'SKILL.md copiado.', dom.copyPreviewSkillBtn);
    });

    dom.dockToggleBtn.addEventListener('click', () => {
      state.dockMinimized = !state.dockMinimized;
      safeSaveState();
      applyDockMinimizedUI();
    });

    dom.dockQuickCopyBtn.addEventListener('click', () => {
      copyText(buildFullPrompt(), 'Prompt Completo copiado.', dom.dockQuickCopyBtn);
    });

    dom.dockCopyPromptBtn.addEventListener('click', () => {
      copyText(buildFullPrompt(), 'Prompt Completo copiado.', dom.dockCopyPromptBtn);
    });

    dom.dockDownloadSkillBtn.addEventListener('click', downloadSkillMd);

    dom.dockTestComboBtn.addEventListener('click', () => {
      if (state.combinedStyleIds.length === 2) {
        applyLiveThemeToBody({ type: 'combo' });
        showToast('Combinação de 2 estilos aplicada na página!');
      }
    });

    dom.dockClearComboBtn.addEventListener('click', () => {
      state.combinedStyleIds = [];
      safeSaveState();
      updateCardActionStates();
      syncLiveThemeIfActive();
      renderExportDock();
      updatePreviewDrawerIfOpen();
      showToast('Mixer limpo.');
    });
  }

  function init() {
    cacheDom();
    safeLoadState();
    renderCategoryFilters();
    renderStyleGrid();
    renderTypographyLab();
    renderMotionLab();
    renderLibrariesSection();
    renderCommunitySkills();
    renderSecurityCheckboxes();
    applyGlobalTheme(state.globalTheme);
    renderExportDock();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
