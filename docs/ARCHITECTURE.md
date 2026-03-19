# Architecture Guide

## Overview

This project follows a route-first structure:

- Pages are route entry points.
- Components are shared UI building blocks.
- Routes and navigation metadata are centralized.
- Static content and project data live in dedicated data modules.

## Directory Responsibilities

### src/components

Reusable UI and layout elements used in multiple pages.

- GlobalShell.jsx: global overlays and persistent experience behaviors
- PageHeader.jsx: shared top header/navbar
- CinematicText.jsx: reusable motion text renderer
- index.js: barrel export for clean imports

### src/config

App-level configuration with low churn.

- routes.js: route constants and primary nav items

### src/pages

Route-level screens and route-owned styles.

- Home.jsx
- StudioHome.jsx
- AboutStory.jsx
- WorkGallery.jsx
- WorkCaseStudy.jsx
- BlogsTimeline.jsx
- ContactPage.jsx
- index.js: barrel export for pages

### src/data

Data models and static arrays consumed by pages.

### src/store

Redux setup and feature slices.

- store.js
- uiSlice.js

## Routing Pattern

All route path strings are sourced from src/config/routes.js.

Benefits:

- One source of truth for paths
- Safer refactoring
- Consistent link targets across pages/components

## Import Pattern

Use barrel exports where possible for cleaner top-level imports.

Examples:

- import { GlobalShell } from './components'
- import { AboutStory, Home } from './pages'

## Styling Pattern

- Global styles and typography tokens: src/index.css
- Page-specific styles: colocated module files in src/pages
- Utility styling: Tailwind classes in JSX

## How to Add a New Page

1. Create the page component under src/pages.
2. Add export in src/pages/index.js.
3. Add route constant in src/config/routes.js.
4. Register route in src/App.jsx.
5. Optionally include nav entry in PRIMARY_NAV_LINKS.

## Future Improvements

- Split pages into feature folders when page complexity grows.
- Add form validation module for contact form.
- Add testing folders for components and routes.
