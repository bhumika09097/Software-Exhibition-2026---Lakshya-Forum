# SchemeSathi — Government Scheme Navigator

SchemeSathi is a responsive, bilingual (English and Hindi) guide for exploring selected Indian government schemes. It helps visitors understand why a scheme may fit their situation, which details are still missing, and what to check next.

> **Important:** This is an independent prototype and preliminary screening aid. It is not a government website, does not submit applications, and cannot confirm official eligibility. Always verify current rules with the linked official sources.

## Features

- Browse eight representative schemes with search and category filters.
- Enter general details once in a shared profile.
- Answer additional eligibility questions on each scheme's detail page.
- See conditions that match, do not match, or still need verification.
- Review benefits, eligibility information, documents, official sources, and a next-step checklist.
- Compare up to three schemes side by side.
- Switch between English and Hindi.
- Use the responsive layout on desktop and mobile.

Screening is based on explicit, explainable rules in the app—not AI or machine learning. Unknown, state-specific, institution-specific, or current-year conditions remain marked for verification rather than being guessed.

## Technology

- **React 18** for the interactive user interface and component state.
- **JavaScript (ES modules)** for page behavior, navigation, and screening rules.
- **Vite** for local development and production builds.
- **CSS** for visual styling and responsive layouts.
- **JSON** for the scheme dataset.
- **Netlify** can host the generated static site.

The current prototype has no backend, database, account system, or government API integration. Profile and scheme answers stay in browser memory for the current page session; they are not saved to a server and are lost after a full page refresh.

## Getting started

Install [Node.js](https://nodejs.org/) and npm, then run these commands from the project directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production-ready static files to `dist/`. The preview command serves that build locally.

## Deploying to Netlify

For a standard Netlify build, configure:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

The favicon source is `public/Icon.png`; Vite copies it to `dist/Icon.png`. After updating the connected repository, trigger or wait for a new Netlify deployment before expecting changes on the live site.

## Project structure

```text
.
├── index.html                 # HTML shell, page metadata, favicon
├── package.json               # Dependencies and npm scripts
├── vite.config.js             # Vite and React plugin configuration
├── public/
│   ├── Icon.png               # Browser favicon
│   └── images/                # Scheme and public-service photography
└── src/
    ├── main.jsx               # React application entry point
    ├── App.jsx                # Pages, translations, forms, matching, comparison
    ├── styles.css             # Layout, design, and responsive styles
    └── data/
        └── schemes.json       # Scheme information, eligibility, and sources
```

## Updating scheme information

Scheme records are in `src/data/schemes.json`. Each entry can include the scheme name, department, category, purpose, benefits, eligibility details, documents, application steps, official links, and matching notes. The file also includes data-status and verification notes; keep those accurate when changing the dataset.

The matching rules are implemented in `evaluateScheme` in `src/App.jsx`, and the additional questions for each scheme are defined in `schemeQuestionDefinitions` in the same file. When adding or editing a scheme, update the data, its questions, the matching logic, and the English and Hindi interface text as appropriate. Do not report a confirmed match for a rule the app cannot verify.

## Privacy and responsible use

- Do not enter Aadhaar numbers, bank account numbers, passwords, or other sensitive identifiers.
- Do not upload identity documents; the prototype does not need them.
- Scheme information may change. Check the official portal and current academic-year or state rules before applying.
- A “Potential match” is only a preliminary result—not approval, a guarantee of benefits, or a final eligibility decision.

## Exhibition demo

1. Choose English or Hindi and explore schemes with search or category filters.
2. Fill in sample general profile details.
3. Open a scheme, answer its additional questions, and review the matching explanation and remaining checks.
4. Select two or three schemes to compare.
5. Show the official link and explain that applications and final eligibility decisions are handled by the relevant government authority.

Use fictional sample information for demonstrations. Never use a visitor's sensitive personal or financial data.
