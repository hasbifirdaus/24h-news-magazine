# Component Class Naming & Styling Standardization Plan

## Executive Summary

This plan outlines the standardization of CSS variables, class naming conventions, and file structure across 7 landing page components. The goal is to eliminate duplication, ensure consistency, and improve maintainability.

---

## Issues Identified

### 1. Duplicate CSS Variables

**Every CSS file contains identical `:root` blocks with:**

- Spacing variables (`--spacing-xs` through `--spacing-5xl`)
- Font size variables (`--font-size-xs` through `--font-size-5xl`)
- Font weight variables
- Line height variables
- Color variables
- Border variables

### 2. Filename Typo

- `Entertaiment.css` / `Entertaiment.jsx` → Should be `Entertainment`

### 3. Root Class Naming Inconsistencies

| Component        | Current Root Class | Should Be            |
| ---------------- | ------------------ | -------------------- |
| EditorPicks      | `.editor`          | `.editor-picks`      |
| HealthNews       | `.health`          | `.health-news`       |
| LatestTechnology | `.technology`      | `.latest-technology` |
| Money            | `.money`           | `.money` ✓           |
| Hero             | `.hero`            | `.hero` ✓            |
| Entertainment    | `.entertainment`   | `.entertainment` ✓   |
| Navbar           | `.navbar`          | `.navbar` ✓          |

### 4. BEM Naming Inconsistencies

| Component  | Issue                                                        |
| ---------- | ------------------------------------------------------------ |
| Money      | `.money__content_text` → should be `.money__content__text`   |
| Health     | `.health__content_text` → should be `.health__content__text` |
| Hero       | `.hero__grid__slider-and-articles` → overly verbose          |
| Technology | `.technology__content__hero-box__image` → 4 levels deep      |

### 5. Direct Element Selectors

Several components use `h1`, `p` selectors directly instead of BEM classes:

- Entertainment: `h1` selector in `.entertainment__box__content`
- Money: `h1`, `p` in `.money__content_text`
- Health: `h1`, `p` in `.health__content_text`
- Technology: `h1`, `p` in hero-box and article content
- Editor Picks: `h1`, `p` in box text and article content

---

## Implementation Plan

### Phase 1: Create Global CSS Variables File

**File:** `src/styles/variables.css`

```css
:root {
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  --spacing-4xl: 5rem;
  --spacing-5xl: 6rem;

  /* Line Height */
  --line-height-sm: 1.25;
  --line-height-md: 1.5;
  --line-height-lg: 2;

  /* Font Size */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;

  /* Font Weight */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Colors */
  --color-text-primary: #111;
  --color-text-secondary: #6b7280;
  --color-text-hover: #303f9f;

  /* Backgrounds */
  --background-primary: rgb(49, 49, 49);
  --background-blue: #303f9f;
  --background-color-primary: #fff;
  --background-gray-100: #f3f4f6;
  --background-gray-200: #e5e7eb;
  --background-gray-300: #d1d5db;
  --background-gray-400: #9ca3af;
  --background-gray-500: #6b7280;
  --background-gray-600: #4b5563;
  --background-gray-700: #374151;
  --background-gray-800: #1f2937;
  --background-gray-900: #111827;

  /* Borders */
  --border-primary: 1px solid #d1d5db;
  --border-color-primary: #c9c9c9;
}
```

### Phase 2: Rename Entertaiment Files

- Rename `src/sections/landing-page/entertainment/Entertaiment.css` → `Entertainment.css`
- Rename `src/sections/landing-page/entertainment/Entertaiment.jsx` → `Entertainment.jsx`
- Update imports in JSX file

### Phase 3: Component-by-Component Updates

#### Navbar

- Remove `:root` block (use global)
- Keep BEM naming: `.navbar`, `.navbar__container--mobile`, etc.
- Status: **Mostly OK** - only needs global variables import

#### Hero

- Remove `:root` block
- Rename `.hero__grid__slider-and-articles` → `.hero__slider-articles`
- Rename `.hero__grid__article-list` → `.hero__article-list`
- Rename `.hero__grid__featured-and_trending` → `.hero__featured-trending`
- Rename `.hero__grid__article-list-second` → `.hero__article-list-secondary`
- Update grid-area names to follow pattern: `.hero__featured-1`, `.hero__featured-2`, etc.

#### Entertainment (to be renamed to Entertainment)

- Remove `:root` block
- Add BEM classes for content elements instead of direct `h1` selector
- Rename `.entertainment__box__content h1` → `.entertainment__box-title`
- Rename `.entertainment__box__content span` → `.entertainment__box-author`

#### Money

- Remove `:root` block
- Rename `.money__content_text` → `.money__content-text`
- Add BEM classes for `h1` → `.money__content-title`, `p` → `.money__content-author`

#### Health News

- Remove `:root` block
- Rename root `.health` → `.health-news`
- Rename `.health__content_text` → `.health-news__content-text`
- Add BEM classes for `h1` → `.health-news__content-title`, `p` → `.health-news__content-author`

#### Latest Technology

- Remove `:root` block
- Rename root `.technology` → `.latest-technology`
- Flatten deep nesting:
  - `.technology__content__hero-box` → `.latest-technology__hero-box`
  - `.technology__content__hero-box__image` → `.latest-technology__hero-box-image`
  - `.technology__content__hero-box__content` → `.latest-technology__hero-box-content`
  - `.technology__content__article` → `.latest-technology__article`
  - `.technology__content__article__image` → `.latest-technology__article-image`
  - `.technology__content__article__content` → `.latest-technology__article-content`
  - `.technology__content__grid__article` → `.latest-technology__article-grid`
- Add BEM classes for `h1` → `__title`, `p` → `__author`

#### Editor Picks

- Remove `:root` block
- Rename root `.editor` → `.editor-picks`
- Flatten:
  - `.editor__content__box` → `.editor-picks__box`
  - `.editor__content__box__image` → `.editor-picks__box-image`
  - `.editor__content__box__text` → `.editor-picks__box-text`
  - `.editor__content__article` → `.editor-picks__article`
  - `.editor__content__article__image` → `.editor-picks__article-image`
  - `.editor__content__article__content` → `.editor-picks__article-content`
  - `.editor__content__grid__article` → `.editor-picks__article-grid`
- Add BEM classes for `h1` → `__title`, `p` → `__author`

### Phase 4: Update JSX Files

For each component, update the className attributes to match the new CSS class names.

---

## Class Naming Convention (BEM) Reference

### Root Level

`.{component-name}` (kebab-case)

### Element Level

`.{component-name}__{element-name}` (double underscore)

### Modifier Level

`.{component-name}__{element-name}--{modifier}` (double dash)

### Examples

```css
.navbar {
} /* Block */
.navbar__links {
} /* Element */
.navbar__link--active {
} /* Modifier */
```

---

## Migration Order

1. Create global `variables.css`
2. Rename Entertaiment → Entertainment
3. Update Hero
4. Update Money
5. Update Health News
6. Update Latest Technology
7. Update Editor Picks
8. Update Entertainment
9. Update Navbar
10. Test all components

---

## Notes

- All changes are purely structural/class naming - no visual styling changes
- The plan maintains backward compatibility where possible
- Each component should be tested after migration
