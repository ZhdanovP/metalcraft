# MetalCraft

Vite + React + TypeScript. This README describes how to run the app locally and how to stop it.

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node)

## First-time setup

From the project root:

```bash
npm install
```

## Development (live reload)

Starts the Vite dev server. The terminal prints the local URL (typically `http://localhost:5173`).

```bash
npm run dev
```

Open that URL in your browser. After you save source files, the page updates automatically.

**Stop the server:** focus the terminal where it is running and press **Ctrl+C** (macOS/Linux) or **Ctrl+C** in Windows Terminal. Confirm with `Y` if prompted.

**“Close the page”:** close the browser tab or window; that does not stop the server—stop it in the terminal if you no longer need it.

## Production build + static preview

Builds optimized files into `dist/`:

```bash
npm run build
```

Serve the built site locally (good check before deploying `dist/`):

```bash
npm run preview
```

The terminal prints the preview URL (often `http://localhost:4173`).

**Stop preview:** same as dev—**Ctrl+C** in that terminal.

## Quick reference

| Goal              | Command              | Stop        |
| ----------------- | -------------------- | ----------- |
| Develop with HMR  | `npm run dev`        | Ctrl+C      |
| Build for deploy  | `npm run build`      | (instant)   |
| Preview `dist/`   | `npm run preview`    | Ctrl+C      |
