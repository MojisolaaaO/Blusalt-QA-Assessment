class AlertPage {
    visit() {
        cy.visit("/")
    }

    Alerts() {
        cy.get("a[href='/alerts']").click()
    }

    alertBtn() {
        cy.get("#alertButton").click()
    }

    alertText() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Today is a working day.\nOr less likely a holiday.")
        })
    }
}

export default AlertPage