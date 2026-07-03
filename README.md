# Robson Araújo — Engenharia e Projetos Integrados

Landing page single-page (conceito **"Pavimentos"**: o site é um edifício em
corte — cada seção é um andar, com alternância dark/light laje a laje).

**Stack:** React + Vite + TypeScript + Tailwind CSS. Deploy em Cloudflare Pages.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de produção

```bash
npm run build    # type-check (tsc -b) + bundle em dist/
npm run preview  # serve o build localmente
```

## Deploy — Cloudflare Pages

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`

## Arquitetura

- `src/data/content.ts` — **fonte única de conteúdo** (`RA_DATA`) + rótulos de
  UI (`UI_LABELS`). Nenhum texto é hardcoded nos componentes.
- `src/hooks/` — `useScrollDirection` (navbar hide/show), `useScrollLock`
  (lock iOS por `position:fixed`), `useScrollReveal` (IntersectionObserver),
  `useInView` (count-up das stats).
- `src/components/` — uma seção = um pavimento (`Section.tsx` controla o tom
  dark/light e a divisória do andar).

## ⚠️ A confirmar com o cliente antes do deploy

- **WhatsApp**, **e-mail** e **número do CREA** (placeholders em `content.ts`).
- **Imagens** — hoje via Pexels; trocar pelas fotos reais das obras do Robson.
- **Stats** (15+ / 320+ / 98% / 25+) são estimativas — validar.

---

Desenvolvido por Gustavo Dev.
