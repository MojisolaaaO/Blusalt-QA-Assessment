import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ClientSidePage from '../../fixtures/clientSidePage';
const clientSidePage = new ClientSidePage()

Given('I am on the UI Test Automation Playground homepage', () => {
    clientSidePage.visit()
});


When('I click Client Side Delay', () => {
    clientSidePage.clientDelay()
})

When('I click the button', () => {
    clientSidePage.button()
})


Then('data should appear afer 15 seconds', () => {
    cy.wait(15000)
    clientSidePage.successText()
});