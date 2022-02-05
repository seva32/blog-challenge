/* eslint-disable arrow-body-style */

module.exports = (on, config) => {
  config.fixturesFolder = "src/__tests__/e2e/fixtures";
  config.integrationFolder = "src/__tests__/e2e/specs";
  config.screenshotsFolder = "src/__tests__/e2e/screenshots";
  config.videosFolder = "src/__tests__/e2e/videos";
  config.supportFile = "src/__tests__/e2e/support/index.js";

  return config;
};
