# Adam ELmekadem Portfolio

A cinematic portfolio built with React, Vite, React Router, Tailwind CSS, and Redux Toolkit.

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Redux Toolkit
- Framer Motion
- Tailwind CSS

## Scripts

- `npm run dev` starts local development server
- `npm run build` builds production output into `dist/`
- `npm run lint` runs ESLint checks
- `npm run preview` serves the production build locally

## Architecture

The app uses a route-first page architecture with shared UI components and centralized route configuration.

### Structure

```text
src/
	components/          # Reusable UI and layout building blocks
		index.js           # Barrel exports for components
		GlobalShell.jsx    # Global cursor + music shell
		PageHeader.jsx     # Shared header/navbar
	config/
		routes.js          # Centralized route paths + nav link config
	data/                # Static content/data modules
	pages/               # Route-level page components
		index.js           # Barrel exports for pages
	store/               # Redux slices and store setup
	App.jsx              # Route map composition
	main.jsx             # Providers + app bootstrap
```

### Key Conventions

- Route strings are defined once in `src/config/routes.js`
- Header navigation reads from route config, not hardcoded links
- Route-level components live in `src/pages`
- Shared, reusable UI lives in `src/components`
- Global providers are configured in `src/main.jsx`

## Additional Documentation

- Architecture details: `docs/ARCHITECTURE.md`
