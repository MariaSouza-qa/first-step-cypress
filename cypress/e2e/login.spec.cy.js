import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  LoginButton: '.oxd-button',
  sectionTittleTopbar: '.oxd-topbar-header-title',
  dashboardGrid:'.orangehrm-dashboard-grid',
  wrongCrendentialAlert: '.oxd-alert',
  infoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  FirstNameField: '[name="firstName"]',
  LastNameField: '[name="lastName"]',
  MidleNameField: '[name="middleName"]',
  genericField:'.oxd-input--active',
  dateField: '[placeholder="yyyy-dd-mm"]',
  dateCloseButton: '.--close',
  saveButton: '.orangehrm-left-space'

}
  it.only('User Info Update - Success', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.LoginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.infoButton).click()
    cy.get(selectorsList.FirstNameField).clear()
    cy.get(selectorsList.FirstNameField).type('Jungkook')
    cy.get(selectorsList.LastNameField).clear().type('Jeon')
    cy.get(selectorsList.MidleNameField).clear().type('Kim')
    cy.get(selectorsList.genericField).eq(3).clear().type('test')
    cy.get(selectorsList.genericField).eq(4).clear().type('test')
    cy.get(selectorsList.genericField).eq(5).clear().type('test')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-05-13')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
   
  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.LoginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)
   
  })
})