# Repository Information: Tinder Profile Data Scraper

## Project Overview

**Name**: Tinder Web Automation and Scraper  
**Package Name**: tinder-parser-bot  
**Version**: 0.0.1  
**Type**: Browser Extension (Chrome & Firefox)  
**Manifest**: V3  
**Repository**: https://github.com/kostia7alania/tinder-parser-bot

## Description

A browser extension for scraping and automating Tinder profiles with advanced data collection capabilities. Built with modern web technologies using Vue 3, TypeScript, and Vite.

## Tech Stack

### Core Technologies
- **Framework**: Vue 3.5.22 (Composition API with `<script setup>`)
- **Language**: TypeScript 5.9.3 (strict mode enabled)
- **Build Tool**: Vite 7.1.10
- **Browser Extension**: Manifest V3 with webextension-polyfill

### UI & Styling
- **UI Framework**: @nuxt/ui 4.0.1
- **Component Library**: shadcn-vue (integrated)
- **CSS Framework**: Tailwind CSS 4.1.14
- **Animations**: tw-animate-css
- **Icons**: lucide-vue-next, @iconify
- **Utility**: class-variance-authority, clsx, tailwind-merge

### State Management & Data
- **Store**: Pinia 3.0.3
- **Composables**: @vueuse/core 13.9.0
- **Storage**: Browser Storage API with custom composables
- **i18n**: Vue-i18n 11.1.12 with @intlify/unplugin-vue-i18n

### Routing
- **Router**: Vue Router 4.6.3
- **File-based Routing**: unplugin-vue-router (auto-generated routes)
- **Typed Routes**: Auto-generated TypeScript definitions

### Build & Development
- **Extension Plugin**: @crxjs/vite-plugin 2.2.0
- **Vue Plugin**: @vitejs/plugin-vue 6.0.1
- **Dev Tools**: vite-plugin-vue-devtools 8.0.3
- **Type Checking**: vue-tsc 3.1.1
- **Linting**: ESLint 9.38.0 with eslint-plugin-vue
- **Formatting**: Prettier 3.6.2
- **Hot Reload**: concurrently for multi-browser dev

### Browser Extension Tools
- **Bridge**: webext-bridge 6.0.1 (for cross-context messaging)
- **Polyfill**: webextension-polyfill 0.12.0
- **Types**: chrome-types 0.1.383, @types/webextension-polyfill

### Utilities
- **Markdown**: marked 16.4.1
- **CLI**: commander 14.0.1, chalk 5.6.2
- **Console**: unplugin-turbo-console (enhanced logging)
- **Minification**: terser 5.44.0, unplugin-imagemin

## Project Structure

```
profile-scanner/
├── .github/                    # GitHub workflows, issue templates
├── .vscode/                    # VSCode settings and extensions
├── dist/                       # Built extension files
│   ├── chrome/                 # Chrome build output
│   └── firefox/                # Firefox build output
├── public/                     # Static assets
├── scripts/                    # Build and launch scripts
│   ├── getInstalledBrowsers.ts
│   └── launch.ts
├── screenshots/                # Extension screenshots
├── src/                        # Source code
│   ├── assets/                 # Images, CSS, static files
│   ├── background/             # Service worker/background scripts
│   │   └── index.ts
│   ├── components/             # Shared Vue components
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── ThemeSwitch.vue
│   │   └── state/              # State components (Loading, Error, etc.)
│   ├── composables/            # Vue composables (reusable logic)
│   │   ├── useBrowserStorage.ts
│   │   └── useTheme.ts
│   ├── content-script/         # Content scripts (injected into pages)
│   │   ├── index.ts
│   │   └── index.css
│   ├── devtools/               # DevTools extension page
│   ├── entities/               # Domain entities (FSD architecture)
│   │   └── users/
│   │       ├── config.ts
│   │       ├── types.ts
│   │       ├── index.ts
│   │       ├── model/          # Store definitions
│   │       │   └── users.store.ts
│   │       └── ui/             # Entity UI components
│   │           └── UsersTable.vue
│   ├── features/               # Business features (FSD architecture)
│   │   └── users-collect/
│   │       ├── index.ts
│   │       └── lib.ts
│   ├── lib/                    # Library utilities
│   │   └── utils.ts
│   ├── locales/                # i18n translations
│   │   ├── en.json
│   │   └── zh.json
│   ├── offscreen/              # Offscreen documents
│   ├── stores/                 # Pinia stores
│   │   ├── options.store.ts
│   │   └── test.store.ts
│   ├── types/                  # TypeScript definitions
│   │   ├── auto-imports.d.ts
│   │   ├── components.d.ts
│   │   ├── router-meta.d.ts
│   │   ├── typed-router.d.ts
│   │   └── vite-env.d.ts
│   ├── ui/                     # UI pages and views
│   │   ├── action-popup/       # Extension popup
│   │   ├── content-script-iframe/  # Iframe injected into pages
│   │   ├── devtools-panel/     # DevTools panel
│   │   ├── options-page/       # Extension options/settings
│   │   ├── setup/              # Installation/update pages
│   │   ├── side-panel/         # Side panel (Chrome)
│   │   └── common/             # Shared pages (404, about, etc.)
│   └── utils/                  # Utility functions
│       ├── formatDate.ts
│       ├── i18n.ts
│       ├── pinia.ts
│       └── router/
├── manifest.config.ts          # Base manifest configuration
├── manifest.chrome.config.ts   # Chrome-specific manifest
├── manifest.firefox.config.ts  # Firefox-specific manifest
├── vite.config.ts             # Base Vite configuration
├── vite.chrome.config.ts      # Chrome-specific Vite config
├── vite.firefox.config.ts     # Firefox-specific Vite config
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
├── components.json            # shadcn-vue configuration
└── package.json               # Dependencies and scripts
```

## Architecture & Design Patterns

### Feature-Sliced Design (FSD)
The project follows FSD architecture principles:
- **Entities**: Core business entities (e.g., `users`)
- **Features**: Business features (e.g., `users-collect`)
- **Shared**: Shared components, composables, utilities

### Vue 3 Best Practices
- **Composition API**: All components use `<script setup>` syntax
- **Functional Programming**: Preference for arrow functions and `type` over `interface`
- **Type Safety**: Strict TypeScript with no `any` types
- **Auto-imports**: Components, composables, and utilities are auto-imported
- **File-based Routing**: Routes auto-generated from page files

### Browser Extension Architecture
- **Service Worker**: Background processing (`src/background/index.ts`)
- **Content Scripts**: Injected into Tinder pages for data scraping
- **Popup**: Quick access interface (`action-popup`)
- **Side Panel**: Extended interface (Chrome only)
- **Options Page**: Settings and configuration
- **DevTools**: Development and debugging interface
- **Offscreen Documents**: For advanced background tasks

## Key Features

### Current Features
- ✅ Scrape Tinder profiles
- ✅ Sort by distance
- ✅ Theme switching (light/dark)
- ✅ Multi-language support (en, zh)
- ✅ Browser storage sync

### Planned Features
- 🚧 Auto-likes
- 🚧 Auto-responses
- 🚧 Data exports

## Development Commands

```bash
# Install dependencies
npm install

# Development (both browsers)
npm run dev

# Development (specific browser)
npm run dev:chrome
npm run dev:firefox

# Build (both browsers)
npm run build

# Build (specific browser)
npm run build:chrome
npm run build:firefox

# Launch extension in browser
npm run launch
npm run launch:all

# Code quality
npm run lint          # Run ESLint
npm run format        # Format with Prettier
npm run typecheck     # TypeScript type checking
npm run lint:manifest # Validate manifest

# Add shadcn-vue components
npx shadcn-vue@latest add <component>
```

## TypeScript Configuration

- **Target**: ESNext
- **Module**: ESNext with Bundler resolution
- **Strict Mode**: Enabled
- **Path Aliases**:
  - `@/*` → `./src/*`
  - `~/*` → `./*`
  - `src/*` → `./src/*`
  - `@assets/*` → `./src/assets/*`

## Manifest V3 Configuration

### Permissions
- `storage` - Browser storage API
- `tabs` - Tab management
- `background` - Background service worker
- `sidePanel` - Side panel (Chrome)
- `offscreen` - Offscreen documents

### Host Permissions
- `<all_urls>` - Required for data scraping

### Content Scripts
- **Matches**: `https://tinder.com/*`
- **Run At**: `document_idle`
- **All Frames**: `false`

### Web Accessible Resources
- `src/ui/setup/index.html`
- `src/ui/content-script-iframe/index.html`

## Coding Standards

### TypeScript
- ✅ Use `type` declarations (not `interface`)
- ✅ No `any` types allowed
- ✅ Strict type checking enabled
- ✅ Arrow functions preferred over `function` keyword

### Vue
- ✅ `<script setup>` syntax only
- ✅ Composition API
- ✅ Functional programming approach
- ✅ Auto-imported composables and components

### Styling
- ✅ Tailwind CSS utility classes
- ✅ Responsive design
- ✅ Dark mode support via theme composable

### Code Quality
- ✅ ESLint for linting
- ✅ Prettier for formatting
- ✅ Vue ESLint plugin for Vue-specific rules
- ✅ TypeScript ESLint for TS-specific rules

## Browser Compatibility

- **Chrome**: Manifest V3 (full support)
- **Firefox**: Manifest V3 (adapted configuration)
- **Build Targets**: Separate build outputs for each browser

## Key Custom Composables

### useBrowserStorage
Reactive browser storage with TypeScript support:
- `useBrowserSyncStorage` - Chrome sync storage
- `useBrowserLocalStorage` - Local storage

### useTheme
Theme management (light/dark mode)

## Development Notes

1. **Auto-imports**: Components, composables, and utilities are automatically imported
2. **File-based Routing**: Pages in `src/ui/*/pages/` are auto-registered as routes
3. **Hot Module Replacement**: Full HMR support in development mode
4. **Source Maps**: Inline source maps in development, none in production
5. **Browser Launch**: Custom scripts for launching extension in browsers

## Environment

- **Development Mode**: `NODE_ENV=development`
- **Production Mode**: `NODE_ENV=production`
- **Port**: 3303 (configurable via `PORT` env var)

## Build Output

- `dist/chrome/` - Chrome extension (ready to load)
- `dist/firefox/` - Firefox extension (ready to load)
- `dist/chrome-0.0.1.zip` - Chrome distribution package
- `dist/firefox-0.0.1.zip` - Firefox distribution package

## Contributing

The project follows strict coding standards:
- Functional programming over OOP
- Type safety (no `any`)
- Arrow functions only
- Proper error handling
- Comprehensive TypeScript types

## License & Author

- **Author**: kostia7alania@gmail.com
- **Repository**: Public (GitHub)
- **Version**: 0.0.1 (early development)