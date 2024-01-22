module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: true,
        },
      },
    },
    'prefixIds',
  ],
  typescript: true,
  dimensions: true,
};
