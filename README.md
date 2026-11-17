# TokenLab // Design Systems, Motion, @latest Stack & AST10 Lab

Aplicação web estática completa (**HTML5, CSS3 e JavaScript ES6+ vanilla**, sem frameworks e sem etapa de build) pronta para hospedagem direta no **GitHub Pages**. O **TokenLab** permite explorar 10 sistemas visuais com Color Picker dinâmico, combinar 2 estilos, testar físicas de animação ao vivo, escolher bibliotecas modernas (`@latest`), aplicar regras de segurança **OWASP AST10** e exportar Prompts ou `SKILL.md`.

## Estrutura dos Arquivos

- `index.html` — Estrutura semântica com Content Security Policy (CSP) restrita, Google Fonts (`Inter`, `JetBrains Mono`, `Geist`, `Geist Mono`, `Plus Jakarta Sans`, `Space Grotesk`, `Newsreader`, `Outfit`, `DM Sans`, `Chakra Petch`), switcher global Light / Dark Mode, barra fixa de preview e dock retrátil *Export Studio*.
- `styles.css` — Moldura em *Technical Minimalism*, 10 escopos de preview isolados, suporte a `padding-bottom: 180px` no `<footer>`, dock minimizável para `44px`, demos de *Botão Magnético*, *3D Mouse Parallax* com reflexo especular, *Scroll-Driven Reveal & Stagger* e *Snappy Zero-Delay*, além de `@media (prefers-reduced-motion: reduce)`.
- `app.js` — Catálogo dos 10 estilos com geração de tokens HSL + `color-mix()`, cálculo automático de contraste (`--accent-contrast`), injeção live no `document.body.style`, construção segura de DOM (`document.createElement` + `textContent`, zero `innerHTML`), persistência validada em `localStorage` (`try/catch` + allowlist) e download client-side de `SKILL.md` via `Blob`.
- `README.md` — Documentação técnica e guia de publicação no GitHub Pages.

## Módulos Implementados

1. **Theme Switcher Global & Export Studio Retrátil:**
   - Alternância Light / Dark Mode recalculando automaticamente todos os tokens derivados.
   - Dock flutuante com botão **Minimizar / Expandir (`▾` / `▴`)** que recolhe para `44px` com resumo compacto e atalho **Copiar Prompt**.
   - `<footer>` com `padding-bottom: 180px` para leitura completa mesmo com o dock expandido.

2. **Módulo 1 — Catálogo com 10 Estilos + Style Mixer + Live Theme Switcher:**
   - Filtros por categoria: `All`, `Editorial`, `Dark Mode`, `Minimalist`, `Bold & Retro`, `Tactile`, `Sci-Fi & FinTech`.
   - **10 Estilos:** *Neo-Swiss Editorial*, *Linear Dark / Obsidian SaaS*, *Apple Bento Modular*, *Neo-Brutalism*, *Warm Paper / Literary Notion*, *Glassmorphism / Spatial Aurora*, *Retro Terminal / TUI*, *Soft Clay / Neumorphism*, *Cyberpunk HUD / Telemetry* e *Stripe FinTech / Crisp Mesh*.
   - Cada cartão possui Color Picker dinâmico, preview interativo (KPI, switch, badge e botões primário/secundário), `+ Combinar` (até 2 estilos), aba **Tokens / Code** adaptada à stack ativa e **Testar na Página** (injeta as variáveis computadas diretamente no `document.body.style`, incluindo as fontes escolhidas no Font Lab).

3. **Typography & Font Pairing Lab:**
   - 6 pares tipográficos curados (*Neo-Swiss Grotesque*, *Editorial Contrast*, *Modern SaaS*, *Bold Geometric*, *Futuristic HUD*, *Developer Terminal*) e 3 seletores `<select>` para mix livre (`Display`, `Body`, `Mono`) com carregamento dinâmico via Google Fonts.
   - Controles de **Tight Display Tracking (`-0.035em`)** e **Tabular Numerals (`tabular-nums`)**.
   - **Live Type Tester** com atualização estrita via `.textContent` e botão **Copiar `<link>` Google Fonts**.

4. **Styling Stack Selector (`Híbrido`, `Tailwind CSS @latest`, `CSS Puro`):**
   - Controle segmentado no *Export Studio* que adapta em tempo real a aba `Tokens / Code` de todos os 10 cartões (`:root`, `@import "tailwindcss"; @theme` ou `:root` + `@theme inline`) e injeta as diretrizes arquiteturais da stack no Prompt e no `SKILL.md`.

5. **Módulo 2 — Motion & Physics Lab:**
   - **Botão Magnético (Spring Physics)** (`pointermove` / `pointerleave`)
   - **Card 3D Mouse Parallax** (`perspective(900px) rotateX/rotateY` + reflexo especular)
   - **Scroll-Driven Reveal & Stagger** (`cubic-bezier(0.22, 1, 0.36, 1)` em cascata)
   - **Snappy Zero-Delay** (`0ms steps(1)`)

4. **Módulo 3 — Bibliotecas Front-End Modernas (Sempre `@latest`):**
   - Seleção por categorias (*Alertas & Toasts*, *Animação & Scroll*, *Componentes & Primitivos UI*, *Ícones & Visualização de Dados*) e injeção automática da **MANDATORY VERSION POLICY (`@latest`)** no Prompt e no `SKILL.md`.

5. **Módulo 4 — Ecossistema de Skills & OWASP AST10:**
   - Cartões com botão **Copiar Referência** para `anthropics/skills → frontend-design`, `vercel-labs/agent-skills → web-design-guidelines`, `ui-ux-pro-max` e `gsap-scroll-architect`.
   - Checkboxes para `[AST-01]`, `[AST-03]`, `[AST-05]` e `[DOM & WCAG 2.2 AA]`, além de visualização e download de `SKILL.md`.

## Execução Local

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`.

## Deploy no GitHub Pages

1. Faça push dos arquivos (`index.html`, `styles.css`, `app.js`, `README.md`) para a branch `main` de seu repositório no GitHub:

   ```bash
   git init
   git add index.html styles.css app.js README.md
   git commit -m "feat: TokenLab 10 styles, motion, @latest stack & AST10"
   git branch -M main
   git remote add origin https://github.com/<seu-usuario>/<seu-repositorio>.git
   git push -u origin main
   ```

2. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main` e pasta `/ (root)`, depois clique em **Save**.
3. Acesse a URL publicada em `https://<seu-usuario>.github.io/<seu-repositorio>/`.
