# CLAUDE.md

This file provides guidance to antigravity when working with code in this repository.

## Commandes courantes

```bash
npm run dev       # Serveur de développement Vite avec HMR
npm run build     # Compilation TypeScript puis bundle production
npm run lint      # Vérification ESLint
npm run preview   # Prévisualisation du build de production
```

## Stack technique

- **React 19** avec le nouveau transform JSX (`react-jsx`)
- **Vite** avec le transpileur Oxc (plus rapide que SWC)
- **TypeScript** en mode strict (`noUnusedLocals`, `noUnusedParameters`)
- **ESLint** en flat config (`eslint.config.js`) avec plugins `react-hooks` et `react-refresh`
- Pas de CSS framework — variables CSS natives avec support light/dark via `prefers-color-scheme`

## Architecture

Point d'entrée : `index.html` → `src/main.tsx` → `src/App.tsx`.

Le projet est un annuaire d'entreprises (business directory). La structure `src/` est encore minimale et destinée à être développée. Lors de l'ajout de fonctionnalités, organiser le code selon ces conventions :

```
src/
├── components/   # Composants réutilisables
├── pages/        # Composants de pages (un par route)
├── hooks/        # Hooks React personnalisés
├── services/     # Appels API et logique métier
├── types/        # Types et interfaces TypeScript
└── assets/       # Images et fichiers statiques
```

## Conventions TypeScript

Le `tsconfig.app.json` cible ES2023 avec `moduleResolution: "bundler"`. Les imports doivent utiliser des chemins relatifs ou des alias configurés dans `vite.config.ts`. Toute variable ou paramètre non utilisé provoque une erreur de compilation.

## Styling

Le projet utilise du CSS vanilla avec imbrication native (CSS Nesting). Les tokens de design sont définis comme variables CSS dans `src/index.css`. Le mode sombre est géré via `prefers-color-scheme` — ne pas utiliser de classe `.dark` sauf si une bascule manuelle est ajoutée.
