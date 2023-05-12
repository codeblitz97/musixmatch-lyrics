// babel.config.js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: false,
          browsers: ["ie >= 8"],
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
