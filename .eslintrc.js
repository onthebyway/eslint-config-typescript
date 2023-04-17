module.exports = {
  // eslint-configs
  extends: ["@onthebyway/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      // eslint-plugins
      plugins: ["@typescript-eslint"],
      // enabling/disabling/changing level of rules
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-empty-function": "warn",
      },
    },
  ],
};
