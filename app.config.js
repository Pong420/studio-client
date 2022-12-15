const sassPresets =
  `
@use 'src/styles/sass/variables' as vars;
@use 'src/styles/sass/index.scss';
`
    .trim()
    .replace(/^ +/gm, '') + '\n';

/** @type {import('@ct/react-scripts/config/types').AppConfig} */
const config = {
  sass: {
    additionalData: (content, loaderContext) => {
      const { resourcePath } = loaderContext;

      if (resourcePath.indexOf('node_modules') === -1) {
        return sassPresets + content;
      }

      return content;
    },
  },
};

module.exports = config;
