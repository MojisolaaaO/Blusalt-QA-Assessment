import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FileUploadPage from '../../fixtures/fileUploadPage';
const fileUploadPage = new FileUploadPage()

Given('I am on the site', () => {
    fileUploadPage.visit()
});


When('I click File Upload', () => {
    fileUploadPage.fileUpload()
})

When('I drag & drop a file', () => {
    fileUploadPage.dragAndDrop()
})


Then('the file should be selected', () => {
    fileUploadPage.fileSelected()
});


Given('I am on the UITAP site', () => {
    fileUploadPage.visit()
})
When('I click on File Upload', () => {
    fileUploadPage.fileUpload()
})
When('I click on browse and select a file', () => {
    fileUploadPage.dragAndDrop()
})

Then('the file is selected', () => {
    fileUploadPage.fileSelected()
})