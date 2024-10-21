class SampleAppPage {
    visit() {
        return cy.visit("/")
    }
    sampleApp() {
        return cy.get("a[href='/sampleapp']").click()
    }
    username(name) {
        return cy.get("input[name='UserName']").type(name)
    }

    password(password) {
        return cy.get("input[name='Password']").type(password)
    }

    loginBtn() {
        return cy.get("#login").click()
    }

    welcomeText() {
        return cy.get("#loginstatus").invoke('text').should('match', /Welcome, \w+!/);
    }

}

export default SampleAppPage