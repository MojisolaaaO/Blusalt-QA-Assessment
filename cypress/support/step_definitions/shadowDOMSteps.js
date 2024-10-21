import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ShadowDOMPage from '../../fixtures/shadowDOMPage';
const shadowDOMPageInstance = new ShadowDOMPage();



Given('I am on the Shadow DOM page', () => {
    shadowDOMPageInstance.visit()
});

When('I click on the "Generate GUID" button', () => {
    shadowDOMPageInstance.settingsBtn()
})

When('I click on the "Copy to Clipboard" button', () => {
    shadowDOMPageInstance.copyBtn()
})

Then('the guid generated should be copied to the clipboard', () => {
    shadowDOMPageInstance.clipboard()
});