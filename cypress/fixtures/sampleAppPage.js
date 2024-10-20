class SampleAppPage {
    visit() {
        cy.visit("/")
    }
    sampleApp() {
        cy.get("a[href='/sampleapp']").click()
    }
    username(name) {
        cy.get("input[name='UserName']").type(name)
    }

    password(password) {
        cy.get("input[name='Password']").type(password)
    }

    loginBtn() {
        cy.get("#login").click()
    }

    welcomeText() {
        cy.get("#loginstatus").contains(/Welcome, \w+!/)
    }
}

export default SampleAppPage