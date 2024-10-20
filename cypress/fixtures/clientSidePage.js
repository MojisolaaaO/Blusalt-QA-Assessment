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

    successText() {
        cy.get('.bg-success').contains('Data calculated on the client side.')
    }
}

export default ClientSidePage