class AlertPage {
    visit() {
        return cy.visit("/")
    }

    Alerts() {
        return cy.get("a[href='/alerts']").click()
    }

    alertBtn() {
        return cy.get("#alertButton").click()
    }

    alertText() {
        return cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Today is a working day.\nOr less likely a holiday.")
        })
    }
}

export default AlertPage