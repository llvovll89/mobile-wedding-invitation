# Mobile Wedding Invitation - AI Coding Agent Instructions

## Project Overview

This is a mobile-first, single-page Korean wedding invitation web application built with React, TypeScript, Vite, and TailwindCSS. It's a fully static site deployed on Vercel with no backend, routing, or CMS integration.

## Tech Stack & Architecture

- **Build Tool**: Vite 5.2 with React plugin and TailwindCSS plugin
- **Framework**: React 18.2 with TypeScript 5.2 (strict mode enabled)
- **Styling**: TailwindCSS 4.1 with custom animations in `src/index.css`
- **Fonts**: Noto Serif KR (Korean), Cormorant Garamond (English), Playfair Display (English alt)
- **Deployment**: Vercel with SPA rewrites configured in `vercel.json`

## Component Architecture

**Single-page structure** (`src/App.tsx`): All components render sequentially without routing
```tsx
<Header /> → <CoupleInfo /> → <Gallery /> → <EventInfo /> → <Share /> → <AccountInfo />
```

**All components**:
- Located in `src/components/*.tsx`
- Functional components using React hooks (no class components)
- Export default (not named exports)
- TypeScript interfaces defined inline for data structures
- Self-contained with no shared state management library

## Code Patterns & Conventions

### Data Management
- **Hardcoded data**: All content (names, dates, accounts, images) is hardcoded in component files
- **No external APIs**: Change content by editing component source directly
- **Example pattern** (see `AccountInfo.tsx:17-59`):
  ```tsx
  const groomAccounts: AccountData[] = [
    { role: '신랑', name: '김건호', bank: '카카오뱅크', account: '3333-00-0000000' }
  ]
  ```

### Styling Patterns
- **Mobile-first responsive**: Use Tailwind breakpoints `sm:`, `md:`, `lg:`
- **Black/white gradient theme**: Consistent color palette defined in `src/index.css:4-13`
  - Primary: `#ffffff`, Secondary: `#f5f5f5`, Accent: `#000000`
  - Gradients: `from-white to-[#fafafa]`, `from-black to-gray-800`
- **Glass morphism**: `backdrop-blur-md` + semi-transparent backgrounds (`bg-white/50`)
- **Custom animations**: `fadeInUp`, `float`, `sparkle` defined in `index.css:54-112`
  - Apply with stagger delays: `style={{ animationDelay: '0.3s' }}`
- **Emoji icons**: Use emoji (✨, 📷, 🤵, 👰, 💰) instead of icon libraries

### Common UI Patterns
1. **Section headers** (see `Gallery.tsx:44-55`):
   ```tsx
   <p className="text-xs tracking-[0.3em] uppercase font-serif-en">SECTION NAME</p>
   <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black">제목</h2>
   <div className="flex items-center gap-2">
     <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-black" />
     <div className="w-1.5 h-1.5 rounded-full bg-black animate-sparkle" />
   </div>
   ```

2. **Modal overlays** (see `Gallery.tsx:99-176`):
   - Fixed positioning: `fixed inset-0 z-50`
   - Dark backdrop: `bg-black/95`
   - Close on backdrop click, stop propagation on content click

3. **Accordion/collapse** (see `AccountInfo.tsx:145-177`):
   - State-controlled expansion with rotate chevron animation
   - Gradient hover effects on buttons

### TypeScript Patterns
- **Strict mode enabled**: Handle all nullables and type guards
- **Interface definitions**: Define inline above component
- **Type annotations**: Always type function parameters and state
- **Example** (`Gallery.tsx:4`): `const [selectedImage, setSelectedImage] = useState<number | null>(null)`

## Development Workflow

### Commands
```bash
npm run dev      # Start Vite dev server (default: http://localhost:5173)
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint with TypeScript support
npm run preview  # Preview production build locally
```

### Making Changes
1. **Content updates**: Edit component source files directly (no CMS)
2. **Date/time**: Update in `Header.tsx:8` (`weddingDate`)
3. **Images**: Replace placeholder objects in `Gallery.tsx:8-21` with actual URLs
4. **Account info**: Modify arrays in `AccountInfo.tsx:17-59`
5. **Styling**: Use Tailwind classes; custom animations in `index.css`

### Build Notes
- TypeScript compilation happens before Vite build (see `package.json:8`)
- Must pass lint with `--max-warnings 0` setting
- Vercel handles SPA routing via `vercel.json` rewrite rule

## Language & Localization

- **Primary language**: Korean (한글)
- **All user-facing text**: Korean, except decorative English labels (e.g., "Wedding Invitation")
- **Comments**: Korean or English accepted
- **Date format**: Korean style "2026년 00월 00일"

## Common Tasks

**Adding a new section**: Create component in `src/components/`, import in `App.tsx`, follow existing section header pattern

**Changing animations**: Modify keyframes in `index.css:54-100`, apply with Tailwind `animate-*` classes

**Updating colors**: Change CSS variables in `index.css:4-13`, use Tailwind color classes matching theme

**Deployment**: Push to main branch → Vercel auto-deploys (no manual build needed)

## Important Constraints

- No routing library - single page only
- No state management library - use React hooks
- No backend/API - fully static content
- No external icon libraries - use emoji
- Must maintain mobile-first responsive design
- Preserve black/white minimalist aesthetic
