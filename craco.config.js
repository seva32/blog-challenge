module.exports = {
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
      modulePathIgnorePatterns: ["src/__tests__"],
    },
  },
};
