module.exports = {
  '*.{js,jsx,ts,tsx}': ['prettier --write .', 'eslint  --fix'],
  '*.md': ['prettier --write'],
};
