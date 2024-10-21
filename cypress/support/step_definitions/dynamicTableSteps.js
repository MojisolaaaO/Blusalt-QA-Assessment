import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import DynamicTablePage from '../../fixtures/dynamicTablePage'
const dynamicTablePage = new DynamicTablePage()

Given('I am on the Dynamic Table page', () => {
    dynamicTablePage.visit()
})

When('I reload the page', () => {
    dynamicTablePage.reloadPage()
})

Then('the Chrome CPU value should be the same as the value in the yellow label', () => {
    dynamicTablePage.verifyChromeCpuValue(); // Call the method from the POM
});