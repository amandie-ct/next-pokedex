module.exports = {
    // Lint & Prettify TS and JS files
    '*.{js, jsx, ts, tsx}': (filenames) => [
      `npm run lint --fix . ${filenames.join(' --file')}`,
      `prettier --write ${filenames.join(' ')}`,
      `npm test -- --findRelatedTests ${filenames.join('')}`
    ]
  }