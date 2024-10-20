import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SampleAppPage from '../../fixtures/sampleAppPage';
const sampleAppPage = new SampleAppPage()

Given('I am on the UI Test Automation Playground website', () => {
    sampleAppPage.visit()
});

When('I click Sample App', () => {
    sampleAppPage.sampleApp()
})

When('I input a valid username with {string}', username => {
    sampleAppPage.username(username)
})

When('I input a valid password with {string}', password => {
    sampleAppPage.password(password)
})

When('I click the login button', () => {
    sampleAppPage.loginBtn()
});

Then('I should get a welcome text', () => {
    sampleAppPage.welcomeText()
});