describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  LoginButton: '.oxd-button',
  sectionTittleTopbar: '.oxd-topbar-header-title',
  dashboardGrid:'.orangehrm-dashboard-grid',
  wrongCrendentialAlert: '.oxd-alert'

}

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.LoginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
   
  })
})