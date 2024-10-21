class ShadowDOMPage {
    visit() {
        return cy.visit("/shadowdom")
    }


    settingsBtn() {
        return cy.get('guid-generator')
            .shadow()
            .find("#buttonGenerate")
            .click()

    }

    copyBtn() {
        return cy.get('guid-generator')
            .shadow()
            .find("#buttonCopy")
            .click();
    }

    clipboard() {
        return cy.get("guid-generator")
            .shadow()
            .find("#editField")
            .invoke('val').then((guid) => {

                cy.window().then((win) => {
                    win.navigator.clipboard.readText().then((clipboardText) => {
                        expect(clipboardText).to.equal(guid);

                    })
                })
            })
    }

}

export default ShadowDOMPage