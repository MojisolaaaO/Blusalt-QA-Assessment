class ClientSidePage {
    visit() {
        return cy.visit("/")
    }

    clientDelay() {
        return cy.get("a[href = '/clientdelay']").click()
    }

    button() {
        return cy.get("#ajaxButton").click()
    }

    successText(expectedText) {
        return cy.get(".bg-success").should('contain', expectedText);
    }

}

export default ClientSidePage