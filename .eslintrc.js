module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "max-len": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    "no-plusplus": "off",
    "import/no-cycle": "off",
    "no-return-assign": "off",
    "no-param-reassign": "off",
    "no-global-assign": "off",
  },
};
