import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AlertPage from '../../fixtures/alertPage';
const alertPage = new AlertPage()

Given('I am on the website', () => {
    alertPage.visit()
});


When('I click Alerts', () => {
    alertPage.Alerts()
})

When('I click the alerts button', () => {
    alertPage.alertBtn()
})


Then('an alert should display', () => {
    alertPage.alertText()
});