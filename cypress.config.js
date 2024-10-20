const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

async function setupNodeEvents(on, config) {
    // This is required for the preprocessor to work with Cucumber
    await addCucumberPreprocessorPlugin(on, config);

    // Preprocess files with esbuild 
    const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    });

    on("file:preprocessor", bundler);

    // Always return the updated config object
    return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://www.uitestingplayground.com",
        viewportWidth: 1000,
        viewportHeight: 660,
        pageLoadTimeout: 120000,
        watchForFileChanges: false,
        specPattern: "**/*.feature", // Test files with .feature extension
        setupNodeEvents,
    },

});