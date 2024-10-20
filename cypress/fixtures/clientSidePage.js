class ClientSidePage {
    visit() {
        cy.visit("/")
    }

    clientDelay() {
        cy.get("a[href = '/clientdelay']").click()
    }

    button() {
        cy.get("#ajaxButton").click()
    }

    successText(expectedText) {
        cy.get(".bg-success").should('contain', expectedText);
    }

}

export default ClientSidePage