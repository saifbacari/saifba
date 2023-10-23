module.exports = function (api) {
  // Active la mise en cache pour votre configuration Babel
  api.cache(true);

  return {
    plugins: ['macros'],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
