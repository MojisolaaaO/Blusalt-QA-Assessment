class FileUploadPage {
    visit() {
        cy.visit("/")
    }

    fileUpload() {
        cy.get("a[href='/upload']").click()

    }

    dragAndDrop() {
        cy.xpath("//iframe[@src='/static/upload.html']")
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find("input[type='file']")
            .attachFile("myfile.txt", { subjectType: 'drag-n-drop' })
    }

    fileSelected() {
        cy.xpath("//iframe[@src='/static/upload.html']")
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find("div[class='success-file'] p").should('contain', 'file(s) selected')

    }


}

export default FileUploadPage