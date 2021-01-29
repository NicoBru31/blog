const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  pageExtensions: ['js', 'jsx', 'tsx'],
  images: {
    domains: [
      'react-hook-form.com',
      'react-query.tanstack.com',
      'tailwindcss.com',
      'nextjs.org',
    ],
  },
});
