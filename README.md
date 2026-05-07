# saras finance search (vue)

vue 3 + vite. assignment was to make a search screen with components, dummy api, transitions etc.

**run**

```
npm install
npm run dev
```

vite will show localhost link. for production build use `npm run build` and `npm run preview` if you need to check dist folder.

search uses watch on the input with setTimeout 350ms debounce. results come from `searchService.js` (hardcoded array right now). i still call postman echo with fetch because rubric mentioned it  matching is done on frontend after that.

folders: components under `src/components`, api logic in `src/services/searchService.js`.

if i extend this later probably real backend + pagination + pinia for state. didnt have time for extras here.
