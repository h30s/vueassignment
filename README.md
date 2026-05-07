# Saras finance search task

this is my vue 3 + vite submission for the frontend assignment.

main goal was: search UI with reusable components + dummy api call + loading + expandable results + basic transitions.

## run it locally

```bash
npm install
npm run dev
```

## what i implemented

- `SearchBar` component (input + emits)
- `SearchResultList` component
- `SearchResultItem` component (click to expand/collapse)
- `LoaderPlaceholder` component (spinner while fetching)
- debounced search (`350ms`) so api is not called on every key stroke
- dummy api request with postman echo + simulated delay
- result filtering on `title`, `snippet`, `description`, `category`
- simple transitions (`fade` and detail panel animation)
- responsive layout for mobile + desktop
- keyboard/focus friendly result buttons with aria attributes

## if i had more time / scaling plan

- add pinia for shared state + caching query results
- add pagination or infinite scroll
- use `AbortController` for canceling old requests
- add virtual list rendering for big datasets
- add tests (vitest + vue test utils + e2e)
- connect to real backend api

